import React from "react";
import Slider from "./Slider/Slider";
import LatestProducts from "./LatestProducts/LatestProducts";
import MostSold from "./MostSold/MostSold";
import BestProducts from "./BestProducts/BestProducts";
import Ideas from "./Ideas/Ideas";
import Search from "./Search/Search";
import style from './Main.module.css';

const Main = (props) => {
    return (
        <main className={style.main}>
            <Slider forSlider={props.forMain}/>
            <LatestProducts forLatestProducts={props.forMain}/>
            <MostSold forMostSold={props.forMain}/>
            <BestProducts forBestProducts={props.forMain}/>
            <Ideas forIdeas={props.forMain}/>
            <Search forSearch={props.forMain}/>
        </main>
    );
}

export default Main;