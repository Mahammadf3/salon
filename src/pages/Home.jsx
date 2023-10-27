import React ,{useState}from "react";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";
export default function Home(){
    
    return(

<div className={styles.Home}>
<div className={styles.dummy}></div>
{/* ==========================================nav-bar-================================================================================ */}
               
{/* {==================================================================================================================================} */}
            
{/* ==========================================Info-Div=============================================================================== */}
                <div className={styles.infoDiv}>
                            <div className={styles.Information}>
                                            <div className={styles.name}>UNIQUE UNISEX SALON</div>
                                            <div className={styles.qoute}>
                                                        The real place for Mindfulness & Healthy Body
                                            </div>
                            </div>
                </div>

</div>

    )
}