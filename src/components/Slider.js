import React, { useState } from 'react';
import './carousel.css';
import { images } from '../Data/dataSlider';


function Carousel() {
    const [currImg ,setCurrImg] = useState(2);

    return (
        <div className="carousel">
            <div 
            className="carouselInner" style={{backgroundImage:`url(${images[currImg].img})`}}>
              
            </div>
        </div>
    )
}

export default Carousel;