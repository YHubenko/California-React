import React from "react";
import magnifier from "../../../assets/Main/Search/magnifier.png";
import SignUp from "./SignUp/SignUp";
import style from './Search.module.css';

const Search = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.titleContainer}>
                <p className={style.title}>{props.forSearch.search.title}</p>
            </div>
            <div className={style.searchbar}>
                <img src={magnifier} alt="" className={style.magnifier}/><input type={"text"} className={style.input}
                                                                                placeholder={props.forSearch.search.placeholder}/>
            </div>
            <div className={style.keywords}>
                <div className={style.keywordsHalf}>
                    <button className={style.keyword}>{props.forSearch.search.keyword1}</button>
                    <button className={style.keyword}>{props.forSearch.search.keyword2}</button>
                    <button className={style.keyword}>{props.forSearch.search.keyword3}</button>
                    <button className={style.keyword}>{props.forSearch.search.keyword4}</button>
                    <button className={style.keyword}>{props.forSearch.search.keyword5}</button>
                </div>
                <div className={style.keywordsHalf}>
                    <button className={style.keyword}>{props.forSearch.search.keyword6}</button>
                    <button className={style.keyword}>{props.forSearch.search.keyword7}</button>
                    <button className={style.keyword}>{props.forSearch.search.keyword8}</button>
                    <button className={style.keyword}>{props.forSearch.search.keyword9}</button>
                </div>
            </div>
            <SignUp forSignUp={props.forSearch}/>
        </div>
    );
}

export default Search;