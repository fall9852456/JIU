import { Col, Row } from 'antd';
import React from "react"
import styles from "./Container.module.css"
import Content from "../Content"
export default function Container({ products }) {
    return (
        <div className={styles.Contain}>
            <div className={styles.main}>
                <div className={styles.beer}>
                    啤酒
                </div>
                <hr className={styles.hr1} />
            </div>
            <Row gutter={[32, 32]}>
                {products.map(product => (
                    <Col
                        key={product.id}
                        sm={{ span: 12 }}
                        md={{ span: 8 }}
                        xl={{ span: 6 }}
                    >
                        <Content product={product} />
                    </Col>
                ))}
            </Row>
        </div >

    );
}