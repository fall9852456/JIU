import React from "react"
import styles from "./Footer.module.css"
export default function Header() {
    return (
        <div className={styles.Foot}>
            <div className={styles.Foot_content1}>
                <div className={styles.first}>
                    <div className={styles.promblem}>
                        常見問題
                    </div>
                    <div className={styles.content1}>
                        詢價流程
                    </div>
                    <div className={styles.content1}>
                        配送方式
                    </div>
                    <div className={styles.content1}>
                        退換貨方式
                    </div>
                </div>
                <div className={styles.first}>
                    <div className={styles.promblem}>
                        會員條款
                    </div>
                    <div className={styles.content2}>
                        會員優惠
                    </div>
                    <div className={styles.content2}>
                        如何成為會員
                    </div>
                </div>
                <div className={styles.first}>
                    <div className={styles.promblem}>
                        關於我們
                    </div>
                    <div className={styles.content3}>
                        人才招募
                    </div>
                    <div className={styles.content3}>
                        隱私條款
                    </div>
                    <div className={styles.content3}>
                        聯絡我們
                    </div>
                </div>
            </div>
            <div className={styles.Foot_content2}>
                <div className={styles.word}>
                    <div className={styles.number}>
                        TEL:02-12345678
                    </div>
                    <div className={styles.number}>
                        營業時間：9:00~21:00
                    </div>
                    <div className={styles.number}>
                        週一至週五
                    </div>
                </div>
                <div className={styles.social}>
                    <img className={styles.icon1} src="images/facebook_icon.png" width={'40px'} />
                    <img className={styles.icon1} src="images/instagram_icon.png" width={'40px'} />
                    <img className={styles.icon1} src="images/youtube_icon.png" width={'40px'} />
                </div>
            </div>
        </div>

    );
}