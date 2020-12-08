import React from 'react';
import image from './image.png';

import './Banner.scss';

const Banner = () => (
    <div className="banner">
        <div>
            <img src={image} alt="" />        
        </div>

        <div className="box-content">
            <h4 className="text-uppercase">
                Celulares y <br/>
                <strong>Mucho más</strong>
            </h4>

            <p>Encuentralo todo</p>
        </div>
    </div>
);

export default Banner;