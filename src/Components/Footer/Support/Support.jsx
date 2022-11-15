import React from "react";
import {NavLink} from "react-router-dom";
import style from '../Links.module.css';

const Support = (props) => {
    return (
        <div className={style.wrapper}>
            <p className={style.title}>{props.forSupport.footer.title3}</p>
            <nav>
                <NavLink to={"/styleGuide"} className={style.link}>{props.forSupport.footer.link3_1}</NavLink>
                <NavLink to={"/licensing"} className={style.link}>{props.forSupport.footer.link3_2}</NavLink>
                <NavLink to={"/changeLog"} className={style.link}>{props.forSupport.footer.link3_3}</NavLink>
                <NavLink to={"/contact"} className={style.link}>{props.forSupport.footer.link3_4}</NavLink>
            </nav>
        </div>
    );
}

export default Support;