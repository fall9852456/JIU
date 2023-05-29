import styles from "./square.module.css"
import {
    BrowserRouter,Routes,Route,Link
  } from 'react-router-dom' 

  
export default function Square(){

return(
    
<div className={styles.square}>
           
        <div className={styles.container}>
         <img className={styles.img} src="images/whisky.jpg" alt="whisky"/>
            <h1 className={styles.chiword}>威士忌</h1>
            <h2 className={styles.engword}>Whisky</h2>
        </div>   
            
        <div className={styles.container}>  
            <img className={styles.img} src="images/wine.jpg" alt="wine"/>
            <h1 className={styles.chiword}>葡萄酒</h1>
            <h2 className={styles.engword}>Wine</h2>   
        </div>    

        <div className={styles.container}>      
            <img className={styles.img} src="images/champagne.jpg" alt="champagne"/>
            <h1 className={styles.chiword}>香檳</h1>
            <h2 className={styles.engword}>Champagne</h2>   
        </div>   

         <div className={styles.container}>
            <Link to='product'>    
            <img className={styles.img} src="images/beer.jpg" alt="beer"/>
            <h1 className={styles.chiword}>啤酒</h1>
            <h2 className={styles.engword}>Beer</h2> 
            </Link>      
        </div>   

        <div className={styles.container}>      
            <img className={styles.img} src="images/plumwine.jpg" alt="plumwine"/>
            <h1 className={styles.chiword}>梅酒</h1>
            <h2 className={styles.engword}>Plum wine</h2>      
        </div>    

        <div className={styles.container}>      
            <img className={styles.img} src="images/sparkling.jpg" alt="sparkling"/>
            <h1 className={styles.chiword}>氣泡酒</h1>
            <h2 className={styles.engword}>Sparkling</h2>      
        </div>    
</div>
)

}