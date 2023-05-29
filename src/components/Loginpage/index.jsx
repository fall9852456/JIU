import { useState } from 'react'
import styles from "./login.module.css"
function Loginpage() {
  const [count, setCount] = useState(0)

  return (
    
      <div className={styles.midbg}>
        <div className={styles.midrange}>
          <div className={styles.wordlogin}>
            <h1>L</h1>
            <h2>O</h2>
            <h1>G</h1>
            <h2>I</h2>
            <h1>N</h1>
          </div>
          <div className={styles.slogan}>
          <h3>let</h3>
          <h4>J</h4>
          <h4>I</h4>
          <h4>U</h4>
          <h5>make your day</h5>
          </div>
          <div className={styles.enter1}>
          <input type='text 'placeholder='Email' className={styles.name}/>
          </div>
          <div className='enter2'>
          <input type='text 'placeholder='Password' className={styles.name}/>
          </div>
          <div className={styles.signin}>
          <button>
          Sign in
          </button>
          </div>
          <div className={styles.orword}>
          <h6>OR LOGIN WITH</h6>
          </div>
          <div className={styles.loginwith}>
          <a href="#"><img  className={styles.logicon} src="images/log1.png" alt="kf1"/></a>
          <a href="#"><img  className={styles.logicon} src="images/log2.png" alt="kf1" /></a>
          <a href="#"><img  className={styles.logicon} src="images/log3.png" alt="kf1" /></a>
          </div>
          <div className={styles.signupforgot}>
          <div className='2'><a href="#">SIGN UP</a></div>
          <div className='2'><a href="#">FORGOT PASSWORD?</a></div>
          </div>
        </div>
      </div>
  )
}

export default Loginpage
