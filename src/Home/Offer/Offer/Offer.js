
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './Offer.css';
import { Grid } from '@mui/material';
import OfferTabs from '../OfferTap/OfferTap';
import img from '../../../asete/asset 17.png'

const Offer = () => {
    return (
      <Container className="offer mt-5 mb-5" maxWidth="xl">
        <Box sx={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item sx={12} sm={4} xl={4}>
              <Box className="mega-offer ml-0">
                <div>
                  <img class="w-40 md:w-60 m-auto my-8" src={img} alt="" />
                  <p class="md:text-xl text-base duration-300">
                    Time Limited Mega
                  </p>
                  <h1
                    class="text-[#fc3333] md:text-xl lg:text-2xl  text-2xl font-semibold my-2
                  duration-300"
                  >
                    50% Discount $500
                  </h1>
                  <div class="flex justify-between md:px-2 lg:px-12 xl:px-16 sm:px-2 md:text-sm font-semibold">
                    <p>Already Sold:01</p>
                    <p>Available:20</p>
                  </div>
                  <h1
                    class="text-2xl md:text-xl font-semibold my-6
                  duration-300"
                  >
                    <span class="text-[#fc3333]">Hurry up!</span> offer end in
                  </h1>
                </div>
              </Box>
            </Grid>
            <Grid item sx={12} sm={8} xl={8}>
              <Box
                className="flex justify-center md:justify-between 
              lg:justify-between"
              >
                <OfferTabs />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
};

export default Offer;


import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./Offer.css";
import { Grid, Link, Paper } from "@mui/material";
import OfferCard from "../OfferCard/OfferCard";

const Offer = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://book-store-server-roan.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  // console.log(books)

  return (
    <Container className="offer mt-5 mb-5" maxWidth="xl">
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item sx={12} sm={4} xl={4}>
            <Box className="mega-offer">Time Limited Mega Offer</Box>
          </Grid>
          <Grid item sx={12} sm={8} xl={8}>
            <Box className="flex justify-center md:justify-between lg:justify-between">
              <Paper className="hidden md:block lg:block font-bold">
                Our All Mega Offers
              </Paper>
              <ul className="offer-ul flex no-underline mb-5">
                <li>
                  <Link>30% Offer</Link>
                </li>
                <li className="ml-4">
                  <Link>45% Offer</Link>
                </li>
                <li className="ml-4">
                  <Link>70% Offer</Link>
                </li>
              </ul>
            </Box>
            <Grid className="card-img" container spacing={2}>
              {books.map((book, i) => (
                <Grid key={i} item sx={12} sm={6} md={6} lg={4} xl={4}>
                  <OfferCard book={book} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Offer;
>>>>>>> main
