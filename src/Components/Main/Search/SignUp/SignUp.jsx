import React from "react";
import gadgets from "../../../../assets/Main/Search/gadgets.png";
import style from './SignUp.module.css';

const SignUp = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.textBlock}>
                <p className={style.title}>{props.forSignUp.search.signUpTitle}</p>
                <p className={style.description}>{props.forSignUp.search.signUpDescription}</p>
            </div>
            <img src={gadgets} alt="" className={style.image}/>
            <div className={style.inputContainer}>
                <input type={"email"} placeholder={props.forSignUp.search.signUpPlaceholder} className={style.input}/>
                <button className={style.btn}>{props.forSignUp.search.signUpBtnText}</button>
            </div>
        </div>
    );
}

export default SignUp;