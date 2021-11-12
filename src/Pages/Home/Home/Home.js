import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <Features />
            <Reviews />
            {/* <AnotherComp /> */}
        </div>
    );
};

export default Home;