import React from "react";
import logo from "../../../assets/Footer/California/logo.png";
import style from './California.module.css';

const California = (props) => {
    return (
        <div className={style.wrapper}>
            <img src={logo} alt="" className={style.logo}/>
            <p className={style.text}>{props.forCalifornia.footer.californiaText}</p>
        </div>
    )
}

export default California;