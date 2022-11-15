import React from "react";
import California from "./California/California";
import AllProducts from "./AllProducts/AllProducts";
import Company from "./Company/Company";
import Support from "./Support/Support";
import FollowUs from "./FollowUs/FollowUs";
import divider from "../../assets/Footer/divider.png";
import arrow from "../../assets/Footer/arrow.png";
import style from './Footer.module.css';

const Footer = (props) => {
    return (
        <footer className={style.wrapper}>
            <div className={style.footerTop}>
                <California forCalifornia={props.forFooter}/>
                <AllProducts forAllProducts={props.forFooter}/>
                <Company forCompany={props.forFooter}/>
                <Support forSupport={props.forFooter}/>
                <FollowUs forFollowUs={props.forFooter}/>
            </div>
            <img src={divider} alt="" className={style.divider}/>
            <div className={style.footerBottom}>
                <div className={style.link}>
                    <span className={style.linkFirstPart}>{props.forFooter.footer.footerLeft1}</span><span
                    className={style.linkSecondPart}>{props.forFooter.footer.footerLeft2}</span><img src={arrow} alt="" className={style.arrow}/>
                </div>
                <div className={style.link}>
                    <span className={style.linkFirstPart}>{props.forFooter.footer.footerRight1}</span><a href={props.forFooter.footer.footerLink}><span
                    className={style.linkSecondPart}>{props.forFooter.footer.footerRight2}</span><img src={arrow} alt="" className={style.arrow}/></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;