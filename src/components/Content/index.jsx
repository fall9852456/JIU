import styles from './Content.module.css';
import { Link } from 'react-router-dom';
export default function Content( { product }) {
    return (
        <div className={styles.item} >
          <Link to={`/id/${product.id}`}>
            <img
             style={{ width: '100%' }}
              src={product.image}
              alt={product.name}
            />
          </Link>
            
          <div className={styles.name}>
          <hr className={styles.hr}></hr>
          <h1 className={styles.name1}>
               {product.name}
            </h1>
            <h1 className={styles.name2}>
                {product.En_name}
            </h1>
            <h1
                  className={styles.price}>
                  NT$ {product.price}
               </h1>
            </div>
          </div>
    );
  }