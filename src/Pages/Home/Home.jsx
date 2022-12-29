import React from "react";
import Banner from "../../Home/Banner/Banner";
import HotsellTabs from "../../Home/HotSell/HotSellTabs";
import Offer from "../../Home/Offer/Offer/Offer";
import Product from "../../Home/Product/Product";
import Services from "../../Home/Servecs/Servecs";
import Subscription from "../../shared/Footer/Subscription/Subscription";
import AddToCartPage from "../AddToCartPage/AddToCartPage";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Offer></Offer>
      <Services></Services>
      <HotsellTabs />
      <Product></Product>
      <AddToCartPage></AddToCartPage>
      <Subscription />
    </div>
  );
};

export default Home;
