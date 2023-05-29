import Link from "../Link"
import React from "react"
import styles from "./Header.module.css"
import CartSummary from "../CartSummary";
export default function Header(){
    return(
        <div className={styles.Head}>
            <Link to="/">
            <div className={styles.JIU}>
                JIU
            </div>
            </Link>
            <div className={styles.icon}>
            <img className={styles.icon1} src="images/magnifying-glass.png"width={'40px'}/>
            <img className={styles.icon1} src="images/user1.png"width={'40px'}  />
            <img className={styles.icon1} src="images/shopping-cart1.png"width={'40px'}/>
            <CartSummary />
            </div>
        </div>

    );
}