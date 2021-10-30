import React from 'react';
import Banner from '../Banner/Banner';
import Ratings from '../Ratings/Ratings';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Ratings></Ratings>
        </div>
    );
};

export default Home;