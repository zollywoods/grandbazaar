import Head from 'next/head'
import MenuBar  from '../pages/menubar'
import styles from '../styles/main.module.css'
import  { ScrollRotate } from 'react-scroll-rotate';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Grand Bazaar</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@100;200;300;400;500;700;800&family=Fredoka:wght@500&family=Kufam&family=Nunito:wght@200;300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,300;1,900&display=swap" rel="stylesheet" />
     </Head>
     <div className={styles.menuContainer}>
            <MenuBar/> 
      </div>

      <div className={styles.splashWrapper}>
        <div className={styles.headerGb}>
           Grand Bazaar 
          <div className={styles.arabicHeader}>
            البازار الكبير
          </div>
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
        <div className={styles.mintWrapper}>
          <div className={styles.mintModal}>
            <div className={styles.mintHeader}>
              Claim A 
              Paradise Palace
            </div>
            <br/> 
            <div className={styles.mintText}>
            The Paradise Palaces are Grand Bazaar’s
             first collection randomly generated on-chain. 
             This collection will include a total of 7,777 Palaces
              with rarity built in. Owners of the Palaces will have
               full IP and special access to our Grand Bazaar Marketplace
                <br/> <br/>
                Rug Owner Mint Cost ........... 1 eth <br/>
                Allowlist Mint Cost ...........  2 eth <br/>
                Public Mint Cost ...........  3 eth 
            </div>
            <br/>  <br/> 
            <div className={styles.mintButton}>
                MINT
            </div>
            <br/> 
          </div>
        </div>

        <div className={styles.roadmapWrapper}>
          <div className={styles.roadmapHeader}>
            ROADMAP
          </div>
          <br/>  
          <div className={styles.roadmapBlocks}>
            <div className={styles.roadmapRow}>
              <div className={styles.roadmapBlock}>
              <b> 10% </b> <br/>
                Framed Paradise Palace Prints 
                (5 to Paradise Palace owners, 5 
                to Genesis Rug owners)
              </div>
              <div className={styles.roadmapBlock}>
                 <b> 20% </b> <br/>
                Framed Paradise Palace Prints 
                (5 to Paradise Palace owners, 5 
                to Genesis Rug owners)
              </div>
              <div className={styles.roadmapBlock}>
                 <b> 30% </b> <br/>
                Framed Paradise Palace Prints 
                (5 to Paradise Palace owners, 5 
                to Genesis Rug owners)
              </div>
            </div>
            <div className={styles.roadmapRow}>
              <div className={styles.roadmapBlock}>
              <b> 40% </b> <br/>
                Framed Paradise Palace Prints 
                (5 to Paradise Palace owners, 5 
                to Genesis Rug owners)
              </div>
              <div className={styles.roadmapBlock}>
                 <b> 50% </b> <br/>
                Framed Paradise Palace Prints 
                (5 to Paradise Palace owners, 5 
                to Genesis Rug owners)
              </div>
              <div className={styles.roadmapBlock}>
                 <b> 60% </b> <br/>
                Framed Paradise Palace Prints 
                (5 to Paradise Palace owners, 5 
                to Genesis Rug owners)
              </div>
            </div>
            <div className={styles.roadmapRow}>
              <div className={styles.roadmapBlock}>
              <b> 70% </b> <br/>
                Framed Paradise Palace Prints 
                (5 to Paradise Palace owners, 5 
                to Genesis Rug owners)
              </div>
              <div className={styles.roadmapBlock}>
                 <b> 80% </b> <br/>
                Framed Paradise Palace Prints 
                (5 to Paradise Palace owners, 5 
                to Genesis Rug owners)
              </div>
              <div className={styles.roadmapBlock}>
                 <b> 90% </b> <br/>
                Framed Paradise Palace Prints 
                (5 to Paradise Palace owners, 5 
                to Genesis Rug owners)
              </div>
            </div>

          </div>
          <div className={styles.palaceRow}>
            <img src='/imgs/palaceRow.png' width = "100%" className={styles.palaceRowImage}/>
          </div>
        </div>

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
            Only 77 of our 3D Persian Rugs will 
            ever exist. Owners of these special NFTs
             will receive the most exclusive benefits 
             such as early mint, cheaper mint, and higher 
             mint caps for future collections. Rug owners
              will also be given the exclusive opportunity
               to become a Grand Bazaar Merchant. Merchants 
               will be given a shop within our Grand Bazaar
                Marketplace where they can display and sell goods
                 (physical and digital) that are approved by 
                 the Grand Bazaar (guidelines to be released).
                  Join our Discord for more information on the
                   Grand Bazaar Marketplace.

            </div>
            
          </div>

 
        </div>

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
            </div>
            <div className={styles.teamMember}>
              <img  src="/imgs/team/dottoncreative.jpeg" width="100%" className={styles.teamImage}/>
              <div className={styles.teamText}>
                Dotton Creative
              </div>
            </div>
            <div className={styles.teamMember}>
              <img  src="/imgs/team/zollywood.jpeg" width="100%" className={styles.teamImage}/>
              <div className={styles.teamText}>
                Zollywood
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
