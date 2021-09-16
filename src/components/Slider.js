import React, { useState } from 'react';
import './carousel.css';
import { images } from '../Data/dataSlider';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


function Carousel() {
    const [currImg, setCurrImg] = useState(0);

    return (
        <div className="carousel">
            <div
                className="carouselInner" style={{ backgroundImage: `url(${images[currImg].img})` }}>
                <div className="left"
                    onClick={() => {
                        currImg > 0 && setCurrImg(currImg - 1);
                    }}>
                    <ArrowBackIosIcon />
                </div>

                <div classname="center"><div>
                    <h1>{images[currImg].title}</h1>
                    <p>{images[currImg].subTitle}</p>
                </div>

                </div>
                <div className="right"
                    onClick={() => {
                        currImg < images.length - 1 && setCurrImg(currImg + 1);
                    }}>
                    <ArrowForwardIosIcon />
                </div>
            </div>
        </div>
    )
}

export default Carousel;