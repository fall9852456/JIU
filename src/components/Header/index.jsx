import React from "react"
import styles from "./Header.module.css"
export default function Header(){
    return(
        <div className={styles.Head}>
            <div className={styles.JIU}>
                JIU
            </div>
            <div className={styles.icon}>
            <img className={styles.icon1} src="images/magnifying-glass.png"width={'40px'}/>
            <img className={styles.icon1} src="images/user1.png"width={'40px'}  />
            <img className={styles.icon1} src="images/shopping-cart1.png"width={'40px'}/>
            </div>
        </div>

    );
}