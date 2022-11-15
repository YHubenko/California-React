import React from "react";
import {NavLink} from "react-router-dom";
import style from '../Links.module.css';

const Company = (props) => {
    return (
        <div className={style.wrapper}>
            <p className={style.title}>{props.forCompany.footer.title2}</p>
            <nav>
                <NavLink to={"/about"} className={style.link}>{props.forCompany.footer.link2_1}</NavLink>
                <NavLink to={"/support"} className={style.link}>{props.forCompany.footer.link2_2}</NavLink>
            </nav>
        </div>
    );
}

export default Company;