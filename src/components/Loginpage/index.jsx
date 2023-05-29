import { useState } from 'react'
import styles from "./login.module.css"
import {Button} from "antd"
import Link from "../Link"

function Loginpage() {
  const [count, setCount] = useState(0)


  return (
    
      <div className={styles.midbg}>
        <div className={styles.midrange}> </div>
        
<div>
          <div className={styles.wordlogin}>
            <h1>L</h1>
            <h2>O</h2>
            <h1>G</h1>
            <h2>I</h2>
            <h1>N</h1>
          </div>

          <div className={styles.slogan}>
          <h5 className={styles.makeyourday}>let</h5>
          <h4>JIU</h4>
          <h5 className={styles.makeyourday}>make your day</h5>
          </div>

         
          <input type='text 'placeholder='Email' className={styles.name}/>
          <input type='text 'placeholder='Password' className={styles.name}/>
          

          <div className={styles.signin}>
          <Button type="primary" className={styles.btn}  >
     sign in
    </Button>
          </div>

          <div className={styles.orword}>
          <p>OR LOGIN WITH</p>
          </div>

          <div className={styles.loginwith}>
          <a href="#"><img  className={styles.logicon} src="images/log1.png" alt="kf1"/></a>
          <a href="#"><img  className={styles.logicon} src="images/log2.png" alt="kf1" /></a>
          <a href="#"><img  className={styles.logicon} src="images/log3.png" alt="kf1" /></a>
          </div>

          <div className={styles.signup}>
            <Link to="/">SIGN UP</Link>
          </div>

          <div className={styles.forgot}>
            <div className={styles.forgot}><Link to="/">FORGOT PASSWORD?</Link></div>
         </div>

        </div>
       
      {/* </div> */}
      </div>
  )
}

export default Loginpage
