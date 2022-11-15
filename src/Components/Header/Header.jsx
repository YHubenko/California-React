import React from "react";
import logo from '../../assets/Header/logo.png';
import Navbar from "./Navbar/Navbar";
import Controls from "./Controls/Controls";
import style from "./Header.module.css";

const Header = (props) => {
    return (
        <header className={style.wrapper}>
            <img src={logo} alt="" className={style.logo}/>
            <Navbar forNav={props.forHeader}/>
            <Controls/>
        </header>
    );
}

export default Header;