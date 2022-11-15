import React from "react";
import Products from "./Products/Products";
import style from './BestProducts.module.css';

const BestProducts = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.textBlock}>
                <p className={style.title}>{props.forBestProducts.bestProducts.title}</p>
                <p className={style.description}>{props.forBestProducts.bestProducts.description}</p>
            </div>
            <Products forProducts={props.forBestProducts}/>
        </div>
    );
}

export default BestProducts;