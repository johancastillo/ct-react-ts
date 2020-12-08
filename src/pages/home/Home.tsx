import React from 'react';

import Banner from '../../components/banner/Banner';
import Slider from '../../components/slider/Slider';

const Home = () => (
    <>
        <Slider />
        <div className="margins-page">
            <div className="ed-grid m-grid-2">
                <Banner />

                <Banner />
            </div>
        </div>
    </>
);

export default Home;