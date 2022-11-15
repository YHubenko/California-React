import React from "react";
import macbookPro from "../../../../assets/Main/MostSold/MacBookPro13.png";
import watch from "../../../../assets/Main/MostSold/watch.png";
import macbookAir from "../../../../assets/Main/MostSold/MacBookAirM1.png";
import ipad from "../../../../assets/Main/MostSold/ipad.png";
import style from './Products.module.css';

const Products = (props) => {
    return (
        <div className={style.wrapper}>
            <div>
                <img src={macbookPro} alt="" className={style.image}/>
                <p className={style.name}>{props.forProducts.mostSold.name1}</p>
                <p className={style.description}>{props.forProducts.mostSold.description1}</p>
                <p className={style.price}>{props.forProducts.mostSold.price1}</p>
            </div>
            <div>
                <img src={watch} alt="" className={style.image}/>
                <p className={style.name}>{props.forProducts.mostSold.name2}</p>
                <p className={style.description}>{props.forProducts.mostSold.description2}</p>
                <p className={style.price}>{props.forProducts.mostSold.price2}</p>
            </div>
            <div>
                <img src={macbookAir} alt="" className={style.image}/>
                <p className={style.name}>{props.forProducts.mostSold.name3}</p>
                <p className={style.description}>{props.forProducts.mostSold.description3}</p>
                <p className={style.price}>{props.forProducts.mostSold.price3}</p>
            </div>
            <div>
                <img src={ipad} alt="" className={style.image}/>
                <p className={style.name}>{props.forProducts.mostSold.name4}</p>
                <p className={style.description}>{props.forProducts.mostSold.description4}</p>
                <p className={style.price}>{props.forProducts.mostSold.price4}</p>
            </div>
        </div>
    );
}

export default Products;