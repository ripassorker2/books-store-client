
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './Offer.css';
import { Grid } from '@mui/material';
import OfferTabs from '../OfferTap/OfferTap';
import img from '../../../asete/asset 17.png'
import TimeCount from '../TimeCount/TimeCount';

const Offer = () => {
    return (
      <Container className="offer mt-5 mb-5" maxWidth="xl">
        <Box sx={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item sx={12} sm={4} xl={4}>
              <Box className="mega-offer">
                <div className="m-6 md:m-2">
                  <img className="w-40 md:w-60 m-auto my-8" src={img} alt="" />
                  <p className="md:text-xl text-base duration-300">
                    Time Limited Mega
                  </p>
                  <h1
                    className="text-[#fc3333] text-2xl md:text-[30px] lg:text-2xl  
                   xl:text-3xl font-semibold duration-300"
                  >
                    50% Discount $500
                  </h1>
                  <div
                    className="flex justify-between text-[12px] xl:px-16 lg:px-10  
                  md:text-[13px] md:px-2 font-semibold"
                  >
                    <p>Already Sold:01</p>
                    <p>Available:20</p>
                  </div>
                  <h1 className="text-xl  md:text-[19px] font-semibold my-6 lg:text-xl">
                    <span className="text-[#fc3333]">Hurry up!</span> offer end
                    in:
                  </h1>
                  <TimeCount></TimeCount>
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
