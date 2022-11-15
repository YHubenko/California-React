import React from "react";
import book from "../../../assets/Main/Ideas/book.png";
import arrow from "../../../assets/Main/Ideas/arrow.png";
import style from './Ideas.module.css';
import {NavLink} from "react-router-dom";

const Ideas = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.titleBlock}>
                <p className={style.title}>{props.forIdeas.ideas.title}</p>
                <p className={style.description}>{props.forIdeas.ideas.description}</p>
            </div>
            <div className={style.content}>
                <img src={book} alt="" className={style.img}/>
                <div className={style.ideas}>
                    <p className={style.idea}>{props.forIdeas.ideas.idea1}</p>
                    <p className={style.idea}>{props.forIdeas.ideas.idea2}</p>
                    <p className={style.idea}>{props.forIdeas.ideas.idea3}</p>
                    <p className={style.idea}>{props.forIdeas.ideas.idea4}</p>
                </div>
            </div>
            <div className={style.link}>
                <NavLink to={'/SeeAll'}><span>{props.forIdeas.ideas.link}</span><img src={arrow} alt=""/></NavLink>
            </div>
        </div>
    );
}

export default Ideas;