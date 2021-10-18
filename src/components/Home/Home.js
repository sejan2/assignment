import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

import TopNav from '../TopNav/TopNav';

const Home = () => {
    return (
        <div>
            <TopNav></TopNav>
            <Banner></Banner>

            <Services></Services>
        </div>
    );
};

export default Home;