import { Container } from "@mui/material";
import "./App.css";
import Banner from "./Home/Banner/Banner";
import Offer from "./Home/Offer/Offer/Offer";
import Product from "./Home/Product/Product";

function App() {
  return (
    <Container className="offer-container" maxWidth="xl">
      <Banner></Banner>
      <Offer></Offer>
      <Product></Product>
    </Container>

  );
}

export default App;
