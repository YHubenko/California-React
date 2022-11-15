import React from "react";
import Gallery from "./Gallery/Gallery";
import style from './LatestProducts.module.css';

const LatestProducts = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.textBlock}>
                <p className={style.title}>{props.forLatestProducts.latestProducts.title}</p>
                <p className={style.description}>{props.forLatestProducts.latestProducts.description}</p>
            </div>
            <Gallery forGallery={props.forLatestProducts}/>
        </div>
    )
}

export default LatestProducts;