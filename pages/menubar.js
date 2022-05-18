import { FC } from 'react'
import React, { useEffect, useState } from "react";

import styles from '../styles/main.module.css'





export default function MenuBar() {
    const[connection, setConnection] = useState(styles.connectButton);
    const[connectText, setConnectText] = useState(styles.answerHidden);

    return (
    <div className={styles.menuBar}>
        <div className={styles.menuText}> 
            <div className={styles.menuWord}>
                Mint
            </div>       
            <div className={styles.menuWord}>
                Roadmap
            </div>       
            <div className={styles.menuWord}>
                Rugs
            </div>       
            <div className={styles.connectButton} >
                Connect
            </div>      
        </div>
    </div> 
  )
}
