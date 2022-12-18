import { Container } from "@mui/material";
import "./App.css";
import Banner from "./Home/Banner/Banner";

import Product from "./Home/Product/Product";

function App() {
  return (
    <div className="App">
      <Banner />
      <Product />
    </div>

import Offer from "./Home/Offer/Offer/Offer";
import Navbar from "./shared/Navbar/Navbar";

function App() {
  return (
    <Container className="offer-container" maxWidth="xl">
      <Navbar></Navbar>
      <Banner></Banner>
      <Offer></Offer>
    </Container>

  );
}

export default App;
