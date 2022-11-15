import React from "react";
import laptop from "../../../../assets/Main/LatestProducts/Gallery/laptop.png";
import phone from "../../../../assets/Main/LatestProducts/Gallery/phone.png";
import tablet from "../../../../assets/Main/LatestProducts/Gallery/tablet.png";
import watch from "../../../../assets/Main/LatestProducts/Gallery/watch.png";
import style from './Gallery.module.css';

const Gallery = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.block}>
                <img src={laptop} alt="" className={style.laptop}/>
                <div className={style.laptopText}>
                    <p className={style.laptopName}>{props.forGallery.latestProducts.laptopName}</p>
                    <p className={style.laptopDescription}>{props.forGallery.latestProducts.laptopDescription}</p>
                </div>
            </div>
            <div className={style.block}>
                <img src={phone} alt="" className={style.phone}/>
                <div className={style.phoneText}>
                    <p className={style.phoneName}>{props.forGallery.latestProducts.phoneName}</p>
                    <p className={style.phoneDescription}>{props.forGallery.latestProducts.phoneDescription}</p>
                </div>
            </div>
            <div className={style.block}>
                <div className={style.tabletText}>
                    <p className={style.tabletName}>{props.forGallery.latestProducts.tabletName}</p>
                    <p className={style.tabletDescription}>{props.forGallery.latestProducts.tabletDescription}</p>
                </div>
                <img src={tablet} alt="" className={style.tablet}/>
            </div>
            <div className={style.block}>
                <img src={watch} alt="" className={style.watch}/>
                <div className={style.watchText}>
                    <p className={style.watchName}>{props.forGallery.latestProducts.watchName}</p>
                    <p className={style.watchDescription}>{props.forGallery.latestProducts.watchDescription}</p>
                </div>
            </div>
        </div>
    );
}

export default Gallery;