import React from 'react';
import Appoinment from '../Appoinment/Appoinment';
import Banner from '../Banner/Banner';
import CarouselBanner from '../carousel/CarouselBanner';
import Contact from '../Contact/Contact';
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';

import Services from '../Services/Services';

import TopNav from '../TopNav/TopNav';

const Home = () => {
    return (
        <div>
            <CarouselBanner></CarouselBanner>
            <TopNav></TopNav>
            <Banner></Banner>
            <Services></Services>
            <Feature></Feature>
            <Appoinment></Appoinment>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;