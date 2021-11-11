import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <h2>This is Extra Compo</h2>
            <Reviews />
            {/* <AnotherComp /> */}
        </div>
    );
};

export default Home;