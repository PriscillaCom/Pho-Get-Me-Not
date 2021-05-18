import React from 'react';
import "./ImageSlider.css";

import picture1 from '../../assets/pho1.jpg';
import picture2 from '../../assets/pho2.jpg';
import picture4 from '../../assets/pho4.jpg';
import picture5 from '../../assets/pho5.jpg';
import picture3 from '../../assets/pho3.jpg';
const ImageSlider = () => (
    <div className='slider'>
        <figure>
            <img src={picture4} alt=""/>
        </figure>
    </div>
)

export default ImageSlider;