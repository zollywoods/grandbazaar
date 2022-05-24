import React, { useState, useEffect } from "react";
import {mint} from "./metamask.js"
const Web3 = require("web3");
const web3 = new Web3('https://rinkeby.infura.io/v3/f40f33ae30b14475be1dddf24efa9297');
import styles from '../styles/main.module.css'

const contractABI = require('./contract-abi.json')
const contractAddress = "0x1D60BAf4769E557FB37BC4886FD3B96d50d58Af8";

export const gbContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);


function Mint() {
    const [inputValue, setInputValue] = useState(1);

    return(


        <div id="mintButtons">
            {/* trigger a modal that aks how many you want to mint 
            with a little number box and a mint button below it 
            then mint */}
            <id className={styles.mintAndInput}>
                <div className={styles.mintButton} onClick = {() => mint(inputValue)} >
                    MINT
                </div> 
                <div className={styles.inputButton} >
                <b>  <input type="number"    min="1" max="20"  value={inputValue} onInput={(e) => setInputValue(e.target.value)} id="mintButtonYang"/>   </b>

                </div> 
            </id>

            {/* <b> <button id="mintButton" onClick = {() => mint(1)}> MINT </button> </b> */}
        </div>
   
    );
}

export default Mint;
