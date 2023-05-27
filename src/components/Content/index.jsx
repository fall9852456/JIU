import styles from './Content.module.css';

export default function Content( { product }) {
    return (
        <div className={styles.item} >
            <a href='/'>
            <img
             style={{ width: '100%' }}
              src={product.image}
              alt={product.name}
            />
            </a>
            
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