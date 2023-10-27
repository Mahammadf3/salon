import React ,{useState} from "react";
import { Outlet,Link } from "react-router-dom";
import styles from "../styles/Wrapper.module.css"
export default function Wrapper(){

    const [isClicked,setIsclicked]=useState(false);
    function hanldeClick(){
        setIsclicked(false)
    }

    return(

        <>
         <div className={styles.navBar}>
                        <div className={styles.navEmail}>
                        &#128231; shaikmahammad622@gmail.com
                        </div>
                        {/* &emsp; */}
                        <div className={styles.navPhone}>
                        &#9990; +91 85018 85725
                        </div>
                </div>
{/* ================================================================================================ */}
<div className={styles.sNavBar}>
<div className={styles.infoDiv}>
                            <div className={styles.logo}>

                            </div>
                </div>
                            <div>
                                <div className={styles.offerings}>
                                <div className={styles.home}><Link to="/" className={styles.Homee}>HOME</Link></div>
                                <div className={styles.services} onMouseEnter={() => setIsclicked(!isClicked)} >SERVICES
                                        {isClicked ? (
                                            <ul className={styles.navUl} onMouseLeave={hanldeClick}>
                                                <li onClick={hanldeClick}>
                                                    <Link to="/Haircut" className={styles.Links}>
                                                        Hair cut
                                                    </Link>
                                                </li>
                                                <li onClick={hanldeClick}>
                                                    <Link to="/Padicure" className={styles.Links}>
                                                        Padicure
                                                    </Link>
                                                </li>
                                                <li onClick={hanldeClick}>
                                                    <Link to="/Massage" className={styles.Links}>
                                                        Massage
                                                    </Link>
                                                </li>
                                                <li onClick={hanldeClick}>
                                                    <Link to="/Makeup" className={styles.Links}>
                                                        Make up
                                                    </Link>
                                                </li>
                                                <li onClick={hanldeClick}>
                                                    <Link to="/Oiltreatment" className={styles.Links}>
                                                        Oil Tearment
                                                    </Link>
                                                </li>
                                            </ul>
                                        ) : null}
                                    </div>


                                <div className={styles.info}>INFO</div>

                            </div>
                                </div> 
            </div>
            {/*==================================================================================== */}
        <Outlet/>
        </>
    )
}