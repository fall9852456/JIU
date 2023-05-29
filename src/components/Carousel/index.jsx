import styles from "./carousel.module.css"
import { Carousel } from 'antd';
import { Helmet } from "react-helmet-async"

export default function HeadImg(){
   
   const contentStyle = {
      height: '750px',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      width:'100%',
    };

    return(
     <div className={styles.wrap}>
       
        <div className={styles.carousel}> 
        <Helmet><title>JIU首頁</title></Helmet>
         <Carousel autoplay>
           <div>
              <img style={contentStyle} src="images/carouselimg1.jpg" alt="carouselimg1"/>
           </div>

           <div>
              <img style={contentStyle} src="images/carouselimg2.JPG" alt="carouselimg2"/>
           </div>

           <div>
              <img style={contentStyle} src="images/carouselimg3.JPG" alt="carouselimg3"/>
           </div>

           <div>
              <img style={contentStyle} src="images/carouselimg4.JPG" alt="carouselimg4"/>
           </div>
         </Carousel>

         </div>


       </div>
    
    )
        
 }