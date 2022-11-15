import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = (props) => {
    return (
        <nav className={style.wrapper}>
            <NavLink to='/allProducts' className={style.link}>{props.forNav.header.link1}</NavLink>
            <NavLink to='/solutions' className={style.link}>{props.forNav.header.link2}</NavLink>
            <NavLink to='/about' className={style.link}>{props.forNav.header.link3}</NavLink>
            <NavLink to='/support' className={style.link}>{props.forNav.header.link4}</NavLink>
        </nav>
    );
}

export default Navbar;