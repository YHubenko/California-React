import React from "react";
import magnifier from '../../../assets/Header/magnifier.png';
import cart from '../../../assets/Header/cart.png';
import style from './Controls.module.css';

const Controls = () => {
    return (
        <div className={style.wrapper}>
            <img src={magnifier} alt="" className={style.icon}/>
            <img src={cart} alt="" className={style.icon}/>
        </div>
    );
}

export default Controls;