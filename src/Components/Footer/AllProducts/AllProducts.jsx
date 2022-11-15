import React from "react";
import {NavLink} from "react-router-dom";
import style from '../Links.module.css';

const AllProducts = (props) => {
    return (
        <div className={style.wrapper}>
            <p className={style.title}>{props.forAllProducts.footer.title1}</p>
            <nav>
                <NavLink to={"/phones"} className={style.link}>{props.forAllProducts.footer.link1_1}</NavLink>
                <NavLink to={"/watch"} className={style.link}>{props.forAllProducts.footer.link1_2}</NavLink>
                <NavLink to={"/tablet"} className={style.link}>{props.forAllProducts.footer.link1_3}</NavLink>
                <NavLink to={"/laptops"} className={style.link}>{props.forAllProducts.footer.link1_4}</NavLink>
            </nav>
        </div>
    );
}

export default AllProducts;