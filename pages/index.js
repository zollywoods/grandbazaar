import Head from 'next/head'
import MenuBar  from '../pages/menubar'
import styles from '../styles/main.module.css'
import  { ScrollRotate } from 'react-scroll-rotate';
import Slide from 'react-reveal/Slide';
import { Bounce } from 'react-reveal';
import MetamaskButton from './metamask';
import MobileMetamaskButton from './metamaskmobile';
import { useState } from 'react';
import Mint from './mint';


export default function Home() {
  let [dropDown, setDropDown] = useState(styles.mobileDrop);
  let [mintVisibility, setMintVisibility] = useState(styles.mintBoxHidden);

  function dropMenu() {
    if(dropDown === styles.mobileDrop){
      console.log("getting here")
      setDropDown(styles.mobileDropVisible)
    }
    if(dropDown === styles.mobileDropVisible){
      console.log("changing visibility")
      setDropDown(styles.mobileDrop)
    }
  }

  function toggleMintBox() {
    if(mintVisibility === styles.mintBoxHidden){
      setMintVisibility(styles.mintBox)
    }
    else{
      setMintVisibility(styles.mintBoxHidden)
    }
  }
  
  return (
    <div>
      <Head>
        <base/> 
        <title>Grand Bazaar</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@100;200;300;400;500;700;800&family=Fredoka:wght@500&family=Kufam&family=Nunito:wght@200;300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,300;1,900&display=swap" rel="stylesheet" />
        <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
     </Head>
     <div className={styles.menuContainer}>
            <MetamaskButton/> 
      </div>
      <div className={dropDown}>
          <div ClassName={styles.dropDownItem} onClick={dropMenu}>
              <a href="#mintWrapper"> MINT </a>
          </div>
          {/* <div ClassName={styles.dropDownItem} onClick={dropMenu}>
              <a href="#roadmapWrapper"> ROADMAP </a>
          </div> */}
          <div ClassName={styles.dropDownItem} onClick={dropMenu} >
              <a href="#rugWrapper"> RUGS </a>
          </div>
          <div ClassName={styles.dropDownItem} onClick={dropMenu}>
              <a href="#teamWrapper"> TEAM </a>
          </div>
      </div>
      <div className={styles.splashWrapper}>
         <div className={styles.mobileHeader}>
           <MobileMetamaskButton/>
            <div className={styles.menuIcon} onClick={dropMenu}>
              <img src="menu.svg" height="22px" />
            </div>
         </div>
        <div className={styles.headerGb}>
           Grand Bazaar 
          <div className={styles.arabicHeader}>
          بازار بزرگ

          </div>
        </div>


        <div className={styles.topImage}>
          <img src="imgs/top_image.png" className={styles.actualTopImage}/>
        </div>

          <ScrollRotate from={-20} to={40} method={"perc"} loops={1} animationDuration={0.1}> 
          <div className={styles.rectangelHolder}>
            <img  src="/imgs/white-cube.png" width="100%" className={styles.whiteRect}/>
            
          </div>
          </ScrollRotate>
          {/* <div className={styles.rectangelHolderGrey}>
            <img  src="/imgs/grey-cube.png" width="100%" className={styles.greyRect}/>
          </div> */}

        </div> 
        <a name="mintWrapper"> 
        <div id={styles.mintWrapper}>


            <div id={mintVisibility}>
                <div className={styles.closeButton} onClick = {toggleMintBox}> X </div>
            </div>



          <div className={styles.mintModal}>
            <div className={styles.mintHeader}>
              Mint A Paradise Palace
            </div>
            <br/> 
            <div className={styles.mintText}>
            The Paradise Palaces are our first PFP collection 100% 
            randomly generated on-chain. Owners will receive full 
            commercial rights to the Paradise Palaces they own. Our
             goal is to convert our Palaces into Metaverse-ready NFTs
              for you all to enjoy on Metaverse Land we purchase for the community.   
                <br/> <br/>
       
                Rug Owner Mint Cost ........... 0.025 eth <br/>
                Allowlist Mint Cost ........... 0.032 eth <br/>
                Public Mint Cost ........... 0.038 eth
            </div>
            <br/>  <br/> 
            <Bounce> 
                <Mint/>
               <br/>
              <div className={styles.openseaButton}>
                  <a target="_blank"  href="https://opensea.io/collection/grandbazaarpalaces"> OPENSEA </a>
              </div>
            </Bounce>
            <br/><br/><br/>
            <div className={styles.mintSupply}>
                Supply = 7,777 <br/> 
                Token = ERC721 <br/> 
            </div>

            <br/> 
          </div>
        </div>
        </a>

        {/* <a name="roadmapWrapper"> 
        <div id={styles.roadmapWrapper}>
          <div className={styles.roadmapHeader}>
            PALACE ROADMAP
          </div>
          <br/>  
          <div className={styles.roadmapBlocks}>
            <div className={styles.roadmapRow}>
              <div className={styles.roadmapBlock}>
              <span className={styles.phases}>  <b> Phase One </b>   </span><br/>
              Grand Bazaar Otherside Headquarters 
                            </div>
              <div className={styles.rmbTwo}>
                <span className={styles.phases}>  <b> Phase Two </b>   </span><br/>                 Grand Bazaar Marketplace              </div>
              <div className={styles.rmbThree}>
                <span className={styles.phases}>  <b> Phase Three </b>   </span><br/>
                 Physically Backed Digital Persian Rugs             
              </div>
              <div className={styles.rmbFour}>
                <span className={styles.phases}>  <b> Phase Four </b>   </span><br/>
                  Grand Bazaar Marketplace (initiated by 100% minted)             
              </div>
            </div>
          </div>
          <div className={styles.palaceRow}>
          <Slide left>
            <img src='/imgs/rows/top.png' width = "100%" className={styles.palaceRowTop}/>
          </Slide>
          <Slide right>
            <img src='/imgs/rows/middle.png' width = "100%" className={styles.palaceRowMiddle}/>
          </Slide> 
            <img src='/imgs/rows/bottom.png' width = "100%" className={styles.palaceRowImage}/>
          </div>
        </div>
        </a> */}

        <a name="rugWrapper"> 
        <div className={styles.rugWrapper}>
          {/* <div className={styles.circleWrapper}> 
            <svg width="100%" height="100%">
              <circle cx="100" cy="350" r="400" stroke="white" stroke-width="4" fill="white" />
            </svg>
          </div> */}
         <div className={styles.rugModal}>
            <div className={styles.rugHeader}>
              RUGS
            </div> <br/>
            <div className={styles.rugText}>
            Our Genesis 3D Persian Rugs will 
            effectively act as our exclusive membership
             pass, where owners will receive benefits
              such as early mint, cheaper mint, and higher
               mint caps for future collections. Rug owners 
               will also be given the exclusive opportunity
                to become a Grand Bazaar Merchant. Merchants 
                will be given a shop within our Grand Bazaar 
                Marketplace where they can display and sell 
                goods (physical and digital) that are approved
                 by the Grand Bazaar (guidelines to be released).
                  Join our Discord for more information on the
                   Grand Bazaar Marketplace.            </div> <br/>  <br/> 
                  <div className={styles.openseaButton}>
                  <a target="_blank" href="https://opensea.io/collection/grandbazaar"> OPENSEA </a> 
              </div> <br/>  <br/>  <br/>
              Supply = 77 <br/> 
                  Token = ERC1155 <br/> <br/>

          </div>
          <div className={styles.rugModel}>
          <model-viewer id={styles.rug} alt="Neil Armstrong's Spacesuit from the 
              Smithsonian Digitization Programs Office and National Air
               and Space Museum" src="imgs/glbs/rug.glb" ar ar-modes="webxr scene-viewer quick-look" environment-image="imgs/glbs/GB_Rug_19.jpg"
                poster="imgs/glbs/GB_Rug_19.jpg" poster-color="#c8dcf4" seamless-poster shadow-intensity="1" camera-controls enable-pan
                ></model-viewer>
          </div> 
        </div>
        </a>

        <a name="teamWrapper">
        <div className={styles.teamWrapper}>
        <div className={styles.teamHeader}>
            TEAM
          </div> <br/>
          <div className={styles.teamMembers}>
            <div className={styles.teamMember}>
              <img  src="/imgs/team/butteredtoast.jpeg" width="100%" className={styles.teamImage}/>
              <div className={styles.teamText}>
                Buttered Toast
              </div>
              <p className={styles.teamRole}> Project Lead </p>
            </div>
            <div className={styles.teamMember}>
              <img  src="/imgs/team/dottoncreative.jpeg" width="100%" className={styles.teamImage}/>
              <div className={styles.teamText}>
                Dotton Creative
              </div>
              <p className={styles.teamRole}> Artist </p>

            </div>

          </div>

          <div className={styles.teamMembers}>
          <div className={styles.teamMember}>
              <img  src="/imgs/team/zollywood.jpeg" width="100%" className={styles.teamImage}/>
              <div className={styles.teamText}>
                Zollywood
              </div>
              <p className={styles.teamRole}> Developer </p>

            </div>
            <div className={styles.teamMember}>
              <img  src="/imgs/team/weareeternal.jpeg" width="100%" className={styles.teamImage}/>
              <div className={styles.teamText}>
                We Are Eternal
              </div>
              <p className={styles.teamRole}> Marketing </p>

            </div>
          </div>
          </div>
        </a>


        <div className={styles.footerWrapper}>
          <div className={styles.footerLogos}>
            <div className={styles.logo}>
              <a href="https://opensea.io/collection/grandbazaar"> <img  src="/imgs/logos/opensea.svg" width="100%" /> </a>
            </div>
            <div className={styles.logo}>
               <a href="https://twitter.com/grandbazaar_nft"> <img  src="/imgs/logos/twitter.svg" width="100%" />  </a> 
            </div>
            <div className={styles.logo}>
             <a href="https://www.instagram.com/grand_bazaar_nft/">  <img  src="/imgs/logos/instagram.svg" width="100%" /> </a> 
            </div>
            <div className={styles.logo}>
             <a href="https://etherscan.io/address/0x1D60BAf4769E557FB37BC4886FD3B96d50d58Af8#code">  <img  src="/imgs/logos/etherscan.png" width="100%" /> </a>
            </div>
            <div className={styles.logo}>
             <a href="https://discord.gg/95UhEBp2Rj">  <img  src="/imgs/logos/discord-white.svg" width="80%" /> </a>
            </div>
          </div>
          <div className={styles.footerHeader}>
            Grand  Bazaar
          </div>
        </div>
      </div>
  )
}
