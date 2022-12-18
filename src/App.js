import { Container } from "@mui/material";
import "./App.css";
import Banner from "./Home/Banner/Banner";
import Offer from "./Home/Offer/Offer/Offer";

function App() {
  return (
    <Container className="offer-container" maxWidth="xl">
      <Banner></Banner>
      <Offer></Offer>
    </Container>
  );
}

export default App;
