import React from 'react';

import Banner from '../../components/banner/Banner';
import HorizontalScroll from '../../components/horizontal-scroll/HorizontalScroll';
import Slider from '../../components/slider/Slider';

const Home = () => (
    <>
        <Slider />
        <div className="">
            <div className="ed-grid m-grid-2">
                <Banner />
                <Banner />
            </div>

            <HorizontalScroll />
        </div>
    </>
);

export default Home;