import { Container } from "@mui/material";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";

function App() {
  return (
    <div className="relative">
      <Container className="offer-container" maxWidth="xl">
        <RouterProvider router={router}></RouterProvider>
      </Container>
    </div>
  );
}

export default App;
