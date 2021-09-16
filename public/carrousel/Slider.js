import React, {useState} from 'react'

import dataSlider from './dataSlider'

export default function Slider() {
    return (
        <div className="container-slider">
            {dataSlider.map((obj, index)=>{
                return (
                    <div>
                        <img
                        src={process.end.PUBLIC_URL + `/images/img${index + 1}.jpg`}
                         />
                    </div>
                )
            })}
        </div>
    )
}