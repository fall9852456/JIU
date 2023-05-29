import styles from "./about.module.css"
import AnimatedTextWord from "../AnimatedTextWorld/AnimatedTextWorld"
import { motion } from "framer-motion"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function About(){
 
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


    return(
    <div>

     <div className={styles.body}>

     <motion.div className={styles.title}
       initial={{opacity:0,y:-200}}
       animate={{opacity:1,y:0}}
       transition={{duration:1}}
     >
       <p>About Us</p>
     </motion.div>
     

     <div className={styles.content}>
         <p className={styles.word}>
          <AnimatedTextWord text="Life is too short to drink bad wine."/>
         </p>
         <p className={styles.word}>
          <AnimatedTextWord text="Wine improves with age. "/>
        </p>
        <p className={styles.word}>
          <AnimatedTextWord text="Penicillin cures, but wine makes people happy."/>
         </p>
     </div>
    </div> 

<div  className={styles.container}>

 <img className={styles.name} src="images/name.png"/>
    <div data-aos="fade-right" data-aos-duration="3000"className={styles.name}>
      <p className={styles.nametitle}>Name</p>
      <p className={styles.jiu}> JIU.</p><br></br>
      <p className={styles.namecon}><br></br><br></br>The Taiwanese pronunciation of wine is jiu</p>
     </div>

     <img className={styles.origin} src="images/origin.png"/>
     <div data-aos="fade-up" data-aos-duration="3000"className={styles.origin}>
      <p className={styles.origintitle}>Origin</p>
      <p className={styles.year}> Since 2010</p><br></br>
      <p className={styles.origincon}><br></br><br></br>Founded our own brand in 2010</p>
     </div>

     <div data-aos="fade-left" data-aos-duration="3000"className={styles.concept}>
      <p className={styles.concepttitle}>Concept</p>
      <p className={styles.conceptcon}><br></br><br></br>We who also like to drink,hope that<br></br>  everyone can also enjoy the fun of drinking <br></br>and taste all kinds of good wine</p>
     </div>
</div>


     </div>
  )
        
}