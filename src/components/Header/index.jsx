import Link from "../Link"
import React from "react"
import styles from "./Header.module.css"
import CartSummary from "../CartSummary";
export default function Header() {
    return (
        <div className={styles.Head}>
            <Link to="/">
                <div>
                    <img className={styles.JIU} src="images/logo.png" width={'100px'} />
                </div>
            </Link>

        <nav>
         <ul className={styles.back}>

        <Link to='/Aboutus'><li className={styles.block}>ABOUT US</li></Link>

        <Link to='product'><li className={styles.block}>ALCOHOL</li></Link>

        <Link to='/'><li className={styles.block}>ACTIVITY</li></Link>

        <Link to='/'><li className={styles.block}>BARTENDING</li></Link>

        </ul>
        </nav>

            <div className={styles.icon}>
                <img className={styles.icon1} src="images/magnifying-glass.png" width={'40px'} />
                <Link to='login'>    
                <img className={styles.icon1} src="images/user1.png" width={'40px'} />
                </Link>
                <CartSummary />
            </div>
        </div>

    );
}