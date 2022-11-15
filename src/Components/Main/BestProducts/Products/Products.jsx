import React from "react";
import watch from "../../../../assets/Main/BestProducts/watch.png";
import phones from "../../../../assets/Main/BestProducts/laptop-and-phones.png";
import laptop from "../../../../assets/Main/BestProducts/laptop-and-one-phone.png";
import style from './Products.module.css';

const Products = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.product}>
                <p className={style.description}>{props.forProducts.bestProducts.description1}</p>
                <p className={style.name}>{props.forProducts.bestProducts.name1}</p>
                <button className={style.btn}>{props.forProducts.bestProducts.btnText}</button>
                <img src={watch} alt="" className={style.watch}/>
            </div>
            <div className={style.product}>
                <p className={style.description}>{props.forProducts.bestProducts.description2}</p>
                <p className={style.name}>{props.forProducts.bestProducts.name2}</p>
                <button className={style.btn}>{props.forProducts.bestProducts.btnText}</button>
                <img src={phones} alt="" className={style.phones}/>
            </div>
            <div className={style.product}>
                <p className={style.description}>{props.forProducts.bestProducts.description3}</p>
                <p className={style.name}>{props.forProducts.bestProducts.name3}</p>
                <button className={style.btn}>{props.forProducts.bestProducts.btnText}</button>
                <img src={laptop} alt="" className={style.laptop}/>
            </div>
        </div>
    );
}

export default Products;