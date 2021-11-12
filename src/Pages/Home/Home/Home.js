import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <h2 style={{ height: '200px', border: '2px solid red', marginTop: '10px' }}>This is Extra Compo</h2>
            <Reviews />
            {/* <AnotherComp /> */}
        </div>
    );
};

export default Home;