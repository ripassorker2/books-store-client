import React from "react";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import UTurnRightIcon from '@mui/icons-material/UTurnRight';
import PaidIcon from '@mui/icons-material/Paid';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import { Box, Container, Grid } from "@mui/material";

const Services = () => {
  return (
    <Container className="offer-container hidden">
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid className="hidden md:block" item sm={4} xs={12} xl={2} md={2} lg={2}>
            <div
              className="flex border items-center py-6 justify-center"
            >
              <DirectionsCarIcon
                style={{ width: "50px", height: "50px", color: "#fc3333" }}
              />
              <div className="mt-2">
                <p className="text-sm font-bold">Free Delivery</p>
                <p>from $50</p>
              </div>
            </div>
          </Grid>
          <Grid className="hidden md:block" item sm={4} xs={12} xl={2} md={2} lg={2}>
            <div className="flex border items-center py-6 justify-center">
              <PeopleAltIcon
                style={{ width: "50px", height: "50px", color: "#fc3333" }}
              />
              <div className="mt-2">
                <p className="text-sm font-bold">99%Customer</p>
                <p>feedbacks</p>
              </div>
            </div>
          </Grid>
          <Grid className="hidden md:block" item sm={4} xs={12} xl={2} md={2} lg={2}>
            <div className="flex border items-center py-6 justify-center">
              <PaidIcon
                style={{ width: "50px", height: "50px", color: "#fc3333" }}
              />
              <div className="mt-2">
                <p className="text-sm font-bold">Payment</p>
                <p>secure</p>
              </div>
            </div>
          </Grid>
          <Grid className="hidden md:block" item sm={4} xs={12} xl={2} md={2} lg={2}>
            <div className="flex border items-center py-6 justify-center">
              <UTurnRightIcon
                style={{ width: "50px", height: "50px", color: "#fc3333" }}
              />
              <div className="mt-2">
                <p className="text-sm font-bold">10 Days</p>
                <p>free return</p>
              </div>
            </div>
          </Grid>
          <Grid className="hidden md:block" item sm={4} xs={12} xl={2} md={2} lg={2}>
            <div className="flex border items-center py-6 justify-center">
              <HeadsetMicIcon
                style={{ width: "50px", height: "50px", color: "#fc3333" }}
              />
              <div className="mt-2">
                <p className="text-sm font-bold">7/24 h</p>
                <p>online</p>
              </div>
            </div>
          </Grid>
          <Grid className="hidden md:block" item sm={4} xs={12} xl={2} md={2} lg={2}>
            <div className="flex border items-center py-6 justify-center">
              <AdUnitsIcon
                style={{ width: "50px", height: "50px", color: "#fc3333" }}
              />
              <div className="mt-2">
                <p className="text-sm font-bold">Order Product</p>
                <p>any time</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Services;
