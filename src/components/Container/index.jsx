import React from "react"
import styles from "./Container.module.css"
export default function Container() {
    return (
        <div className={styles.Contain}>
            <div className={styles.main}>
                <div className={styles.beer}>
                    啤酒
                </div>
               <hr className={styles.hr1}/>
            </div>
        </div>

    );
}