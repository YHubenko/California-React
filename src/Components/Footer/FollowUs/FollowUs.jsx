import React from "react";
import {NavLink} from "react-router-dom";
import style from '../Links.module.css';

const FollowUs = (props) => {
    return (
        <div className={style.wrapper}>
            <p className={style.title}>{props.forFollowUs.footer.title4}</p>
            <nav>
                <NavLink to={"/styleGuide"} className={style.link}>{props.forFollowUs.footer.link4_1}</NavLink>
                <NavLink to={"/licensing"} className={style.link}>{props.forFollowUs.footer.link4_2}</NavLink>
                <NavLink to={"/changeLog"} className={style.link}>{props.forFollowUs.footer.link4_3}</NavLink>
                <NavLink to={"/contact"} className={style.link}>{props.forFollowUs.footer.link4_4}</NavLink>
            </nav>
        </div>
    );
}

export default FollowUs;