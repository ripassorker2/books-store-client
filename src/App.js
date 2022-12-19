import { Container } from "@mui/material";
import "./App.css";
import Banner from "./Home/Banner/Banner";

import Offer from "./Home/Offer/Offer/Offer";
import Product from "./Home/Product/Product";
import Navbar from "./shared/Navbar/Navbar";


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
