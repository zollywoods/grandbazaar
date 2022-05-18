import React, { useState, useEffect } from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from "walletlink"

import Web3Modal from "web3modal";

import Web3 from "web3";


const contractABI = require('./contract-abi.json')
const contractAddress = "0x1D60BAf4769E557FB37BC4886FD3B96d50d58Af8";

import styles from '../styles/main.module.css'



var selectedAccount;
var isInitialized = false;
var gbContract;
var walletId = "walletButton";
var provider;
var amountToMint = 1;
let web3;
let web3Modal;


const providerOptions = {
  walletconnect: {
    
    package: WalletConnectProvider,
    options: {
      // Mikko's test key - don't copy as your mileage may vary
      infuraId: "f40f33ae30b14475be1dddf24efa9297",
    }
  },
  binancechainwallet: {
    package: true
  },
  'custom-coinbase': {
    display: {
      logo: 'imgs/coinbase.svg', 
      name: 'Coinbase',
      description: 'Scan with WalletLink to connect',
    },
    options: {
      appName: 'app', // Your app name
      networkUrl: `https://mainnet.infura.io/v3/f40f33ae30b14475be1dddf24efa9297`,
      chainId: 1,
    },
    package: WalletLink,
    connector: async (_, options) => {
      const { appName, networkUrl, chainId } = options
      const walletLink = new WalletLink({
        appName
      });
      const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
      await provider.enable();
      return provider;
    },
  }
};






function MobileMetamaskButton() {

    useEffect(()=>{
        web3Modal = new Web3Modal({
            network: "rinkeby", // optional
            cacheProvider: true, // optional
            providerOptions, // required
          });      
    })

  const [buttonText, setButtonText] = useState("Not Connected");
  const [buttonStyle, setButtonStyle] = useState(styles.mobileConnection);
  const [dotColor, setDotColor] = useState("dot.svg");

  
   


  if ( provider !== undefined) {
              provider.on("accountsChanged", (accounts) => {
              if(selectedAccount === undefined){
                setButtonText("Not Connected");
                setButtonStyle(styles.mobileConnection);
                setDotColor("dot.svg");
                console.log("NO ACCOUNT");
              }
              else {
                selectedAccount = accounts[0];
                console.log(`Selected account changed to ${selectedAccount}`);
              }
        });
    }
      
      if( provider !== undefined )    {
        gbContract = new web3.eth.Contract(
          contractABI,
          contractAddress
        );
        
      }


    
      const connectWallet = async () => { 
          try{
            provider =  await web3Modal.connect();
          }
          catch (error){
              console.log(error)
              return
          }
        // setCachedProvider(provider)
        web3 = new Web3(provider);    

        web3.eth.getAccounts()
              .then(async (addr) => {
                console.log(addr);
                if(addr.length === 0){
                  setButtonText("Not Connected", String(selectedAccount));
                  setButtonStyle(styles.mobileConnection);
                  setDotColor("dot.svg");
                }
                else{
                  const accounts = await web3.eth.getAccounts();
                  selectedAccount = accounts[0];
                  console.log(`Selected account is ${selectedAccount}`);
                  setButtonText("Connected");
                  setDotColor("dot_green.svg");
                  setButtonStyle(styles.mobileConnected);
                }
              });
       }

       const hoverOverConnected = async () => {
         if( buttonStyle === styles.connectedButton)
         {
          setButtonText("Disconnect");
         }
       }

       const hoverOut = async () => {
        if( buttonText === "Disconnect")
        {
         setButtonText("Connected");
        }
       }



       const clickHandler = async () => {
          if(buttonStyle === styles.connectedButton){
            web3Modal.clearCachedProvider();
            setButtonText("Not Connected", String(selectedAccount));
            setButtonStyle(styles.mobileConnection);
            setDotColor("dot.svg");

          }
          else{
            connectWallet();
          }


       }
          



      useEffect(() => {
        const checkConnection = async () => {

          
          if (web3Modal.cachedProvider) {
            provider = await web3Modal.connect();
            web3 = new Web3(provider);

            web3.eth.getAccounts()
            .then(async (addr) => {
              console.log(addr);
              if(addr.length === 0){
                setButtonText("Not Connected", String(selectedAccount));
                setDotColor("dot.svg");
                setButtonStyle(styles.mobileConnection);
              }
              else{
                const accounts = await web3.eth.getAccounts();
                selectedAccount = accounts[0];
                console.log(`Selected account is ${selectedAccount}`);
                setButtonText("Connected ", String(selectedAccount));
                setDotColor("dot_green.svg");
                setButtonStyle(styles.mobileConnected);
              }
            });
          }
          else{
            setButtonText("Not Connected", String(selectedAccount));
            setDotColor("dot.svg");

            setButtonStyle(styles.mobileConnection);
      }

            
      };
      checkConnection();
  }, []);

      isInitialized = true;
      

      return(
        <div className={buttonStyle} onClick= {clickHandler} >
          <img src={dotColor} height="10px" className={styles.dot}/> {buttonText}
       </div>
 );
    }
  
  
  export default MobileMetamaskButton;






  

   


  export const mint = async ( inputNumber ) => {
    if(provider === undefined){
      alert("To mint you must connect a wallet")
      return
    }


    var isPublicMintActive = await gbContract.methods.checkPublicMintIsActive().call()
    var isRugMintActive = await gbContract.methods.checkRugListMintIsActive().call()
    var isOnRugList = await gbContract.methods.checkRugList(selectedAccount).call()
    var isOnWhiteList = await gbContract.methods.checkWhiteList(selectedAccount).call()

  
    if( isRugMintActive === false  ){
      alert("This mint will begin for rug owners at 10 am PST today!")
      return;
    }

    // if user is not on ruglist and ruglist is active alert them that mint has not begun for public
    // if( isPublicMintActive === false & isOnRugList === false & isRugMintActive === true ){
    //   alert("This mint is currently only active for rug owners, if you are a rug owner and cannot mint make sure you are connecting from the same account that owns a rug, feel free to contact our team if issues persist")
    //   return;
    // }


    // for whitelist and publicmint
    // if( isPublicMintActive === true & isRugMintActive === true & isOnWhiteList === false & isOnRugList === false){
    //   alert("This mint is currently only active for allowlist members and rug owners, please check back at 3 PM PST today")
    //   return;
    // }



    if(inputNumber > 20){
      alert("You are only able to mint 20 tokens at once");
      return;
    }

    if(selectedAccount !== undefined)
    {
      amountToMint = inputNumber;
      var pricePublic = String(amountToMint * 0.03800);
      var priceWhiteList = String(amountToMint * 0.03200);
      var priceRugList = String(amountToMint * 0.02500);

      const amountPublic= Web3.utils.toWei(pricePublic, "ether");
      const amountWhiteList= Web3.utils.toWei(priceWhiteList, "ether");
      const amountRugList= Web3.utils.toWei(priceRugList, "ether");


      gbContract.methods.checkRugList(selectedAccount).call()
      .then(function(result){
        if(result === true){
          gbContract.methods.rugMint(amountToMint).send({from: selectedAccount, to: contractAddress, value: amountRugList}, function(error, result){
            console.log(result);  
          })
        }
        else if( isOnWhiteList )
        {
          gbContract.methods.whiteListMint(amountToMint).send({from: selectedAccount, to: contractAddress, value: amountWhiteList}, function(error, result){
            console.log(result);  
          })
        }
        else{
          gbContract.methods.mint(amountToMint).send({from: selectedAccount, to: contractAddress, value: amountPublic}, function(error, result){
            console.log(result);
            })
        }
      });
      
    ;}
    else{
      alert("You Need To Connect Your Wallet to Interact With This Website")
    }

  }

