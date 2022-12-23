import React from 'react';
import Banner from '../../Home/Banner/Banner';
import HotSell from '../../Home/HotSell/HotSell';
import Offer from '../../Home/Offer/Offer/Offer';
import Product from '../../Home/Product/Product';
import Services from '../../Home/Servecs/Servecs';
import Subscription from '../../shared/Footer/Subscription/Subscription';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <Services></Services>
            <HotSell />
            <Product></Product>
            <Subscription />
        </div>
    );
};

export default Home;