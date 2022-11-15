import React from "react";
import Products from "./Products/Products";
import style from './MostSold.module.css';

const MostSold = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.textBlock}>
                <p className={style.title}>{props.forMostSold.mostSold.title}</p>
                <p className={style.description}>{props.forMostSold.mostSold.description}</p>
            </div>
            <Products forProducts={props.forMostSold}/>
        </div>
    )
}

export default MostSold;