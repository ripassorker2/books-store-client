import { Container } from "@mui/material";
import "./App.css";
import Banner from "./Home/Banner/Banner";
import HotSell from "./Home/HotSell/HotSell";

import Offer from "./Home/Offer/Offer/Offer";
import Product from "./Home/Product/Product";

import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Services from "./Home/Servecs/Servecs";
import AllProduct from "./Pages/AllProduct/AllProduct";

import Footer from "./shared/Footer/Footer";
import Subscription from "./shared/Footer/Subscription/Subscription";
import Navbar from "./shared/Navbar/Navbar";

function App() {
  return (
    <Container className="offer-container" maxWidth="xl">
      <Navbar></Navbar>
      <Banner></Banner>
      <ProductDetails />
      <Offer></Offer>
      <Services></Services>
      <Product></Product>
      <HotSell />
      <AllProduct />
      <Subscription />
      <Footer />
    </Container>
  );
}

export default App;
