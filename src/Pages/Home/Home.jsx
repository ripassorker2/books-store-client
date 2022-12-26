import React from "react";
import Banner from "../../Home/Banner/Banner";
import AddBook from "../../Home/HotSell/AddBook/AddBook";
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
      <AddBook />
      <Offer></Offer>
      <Services></Services>
      <HotsellTabs />
      <Product></Product>
      <MainCheckout />
      <CartPage></CartPage>
      <Whistlist></Whistlist>

      <Subscription />
    </div>
  );
};

export default Home;
