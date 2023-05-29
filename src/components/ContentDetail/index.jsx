import { useState } from "react";
import { Select } from "antd";
import AddToBasket from "../AddToBasket"
const { Option } = Select;
import styles from "./ContentDetail.module.css"
export default function ContentDetail({ product }) {
    const [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);
    return (
        <div className={styles.all}>
            <div className={styles.detail}>
                <div className={styles.picture}>

                    <img
                        alt={product.name}
                        className={styles.picture1}
                        src={product.image}

                    />
                </div>

                <div className={styles.info}>
                    <div className={styles.name}>
                        {product.name}
                    </div>
                    <div className={styles.En_name}>
                        {product.En_name}
                    </div>
                    <hr className={styles.hr}></hr>
                    <div className={styles.describe}>
                        {product.describe}
                    </div>
                    <div className={styles.price}>
                        NT${product.price}
                    </div>
                    <div className={styles.qty}>
                    {"   "}
                     <Select
                        defaultValue={qty}
                        key={qty}                        
                        className={styles.selectStyle}
                        onChange={val => setQty(val)}
                     >
                        {[...Array(product.countInStock).keys()].map((x) => (
                           <Option key={x + 1} value={x + 1}>
                              {x + 1}
                           </Option>
                        ))}
                     </Select>
                  </div>
                  <AddToBasket  product={product} qty={qty} />
                </div>
            </div>
            <div className={styles.wine}>
                <div className={styles.introduce}>
                    酒款介紹
                </div>
                <div className={styles.news}>
                    <div className={styles.country}>
                        {product.country}
                    </div>
                    <div className={styles.brand}>
                        {product.brand}
                    </div>
                    <div className={styles.ml}>
                        {product.ml}
                    </div>
                    <div className={styles.percent}>
                        {product.percent}
                    </div>
                </div>
            </div>
        </div>
    );
}