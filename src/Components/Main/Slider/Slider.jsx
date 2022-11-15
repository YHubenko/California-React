import React from "react";
import leftArrow from "../../../assets/Main/Slider/arrow-left.png";
import rightArrow from "../../../assets/Main/Slider/arrow-right.png";
import style from './Slider.module.css';

const Slider = (props) => {
    return (
        <div className={style.wrapper}>
            <div>
                <img src={leftArrow} alt="" className={style.arrow}/>
            </div>
            <div>
                <div>
                    <p className={style.title}>{props.forSlider.slider.text}</p>
                    <button className={style.btn}>{props.forSlider.slider.btnText}</button>
                </div>
            </div>
            <div>
                <img src={rightArrow} alt="" className={style.arrow}/>
            </div>
        </div>
    );
}

export default Slider;