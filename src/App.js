import { Container } from "@mui/material";
import "./App.css";
import Banner from "./Home/Banner/Banner";
<<<<<<< HEAD
import Offer from "./Home/Offer/Offer/Offer";
import Product from "./Home/Product/Product";
=======

import Product from "./Home/Product/Product";

import Offer from "./Home/Offer/Offer/Offer";
import Navbar from "./shared/Navbar/Navbar";
>>>>>>> 9cc6aebb327613ca7d09ee6c4bac4ca15aa64f5e

function App() {
  return (
    <Container className="offer-container" maxWidth="xl">
      <Navbar></Navbar>
      <Banner></Banner>
      <Offer></Offer>
      <Product></Product>
    </Container>
  );
}

export default App;
