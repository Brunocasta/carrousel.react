import React from 'react';
import './carousel.css';
import { images } from '../Data/dataSlider';


function Carousel() {
    return (
       <div className="carousel">
<div className="carouselInner">
    <img src={images[0].img}/>
</div>
       </div>
    )
}

export default Carousel;