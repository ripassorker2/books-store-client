import React from "react";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import UTurnRightIcon from '@mui/icons-material/UTurnRight';
import PaidIcon from '@mui/icons-material/Paid';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import { Box, Container, Grid } from "@mui/material";

const Services = () => {
  return (
    //className="flex mt-10 align-center gap-x-2"

    <Container>
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item sm={4} xs={12} xl={2} md={4} lg={2}>
            <div className="flex border items-center py-6 justify-center">
              <DirectionsCarIcon
                style={{ width: "60px", height: "60px", color: "#fc3333" }}
              />
              <div className="mt-2">
                <p className="text-sm font-bold">Free Delivery</p>
                <p>from $50</p>
              </div>
            </div>
          </Grid>
          <Grid item sm={4} xs={12} xl={2} md={4} lg={2}>
            <div className="flex border items-center py-6 justify-center">
              <PeopleAltIcon
                style={{ width: "60px", height: "60px", color: "#fc3333" }}
              />
              <div className="mt-2">
                <p className="text-sm font-bold">99%Customer</p>
                <p>feedbacks</p>
              </div>
            </div>
          </Grid>
          <Grid item sm={4} xs={12} xl={2} md={4} lg={2}>
            <div className="flex border items-center py-6 justify-center">
              <UTurnRightIcon
                style={{ width: "60px", height: "60px", color: "#fc3333" }}
              />
              <div className="mt-5">
                <p className="text-lg font-bold">Free Delivery</p>
                <p>from $50</p>
              </div>
            </div>
          </Grid>
          <Grid item sm={4} xs={12} xl={2} md={4} lg={2}>
            <div className="flex border items-center py-6 justify-center">
              <PaidIcon
                style={{ width: "60px", height: "60px", color: "#fc3333" }}
              />
              <div className="mt-5">
                <p className="text-lg font-bold">Free Delivery</p>
                <p>from $50</p>
              </div>
            </div>
          </Grid>
          <Grid item sm={4} xs={12} xl={2} md={4} lg={2}>
            <div className="flex border items-center py-6 justify-center">
              <HeadsetMicIcon
                style={{ width: "60px", height: "60px", color: "#fc3333" }}
              />
              <div className="mt-5">
                <p className="text-lg font-bold">Free Delivery</p>
                <p>from $50</p>
              </div>
            </div>
          </Grid>
          <Grid item sm={4} xs={12} xl={2} md={4} lg={2}>
            <div className="flex border items-center py-6 justify-center">
              <DirectionsCarIcon
                style={{ width: "60px", height: "60px", color: "#fc3333" }}
              />
              <div className="mt-5">
                <p className="text-lg font-bold">Free Delivery</p>
                <p>from $50</p>
              </div>
            </div>
          </Grid>
        </Grid>
        {/* <div className="flex w-72 border  p-10">
          <PeopleAltIcon
            style={{ width: "80px", height: "80px", color: "red" }}
          />
          <div className="mt-5">
            <p className="text-lg font-bold">99%Customer</p>
            <p>feedbacks</p>
          </div>
        </div>
        <div className="flex w-72 border  p-10">
          <UTurnRightIcon
            style={{ width: "80px", height: "80px", color: "red" }}
          />
          <div className="mt-5 ">
            <p className="text-lg font-bold">10 Days</p>
            <p>for free return</p>
          </div>
        </div>
        <div className="flex w-72 border  p-10">
          <PaidIcon style={{ width: "80px", height: "80px", color: "red" }} />
          <div className="mt-5">
            <p className="text-lg font-bold">Payment</p>
            <p>secure system</p>
          </div>
        </div>
        <div className="flex w-72 border p-10">
          <HeadsetMicIcon
            style={{ width: "80px", height: "80px", color: "red" }}
          />
          <div className="mt-5 ">
            <p className="text-lg font-bold">24/7</p>
            <p>online supports</p>
          </div>
        </div> */}
      </Box>
    </Container>
  );
};

export default Services;
