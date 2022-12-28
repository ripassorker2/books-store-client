import React from "react";
import Banner from "../../Home/Banner/Banner";
import HotsellTabs from "../../Home/HotSell/HotSellTabs";
import Offer from "../../Home/Offer/Offer/Offer";
import Product from "../../Home/Product/Product";
import Services from "../../Home/Servecs/Servecs";
import Subscription from "../../shared/Footer/Subscription/Subscription";
import CartPage from "../CartPage/CartPage";
import MainCheckout from "../MainCheckout/MainCheckout";
import Whistlist from "../Wishlist/Whistlist";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Offer></Offer>
      <Services></Services>
      <HotsellTabs />
      <Product></Product>
      <Subscription />
    </div>
  );
};

export default Home;
