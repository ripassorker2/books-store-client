import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./Offer.css";
import { Grid } from "@mui/material";
import img from "../../../asete/asset 17.png";
import TimeCount from "../TimeCount/TimeCount";
import OfferCard from "../OfferCard/OfferCard";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Offer = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/offer/${30}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  const handelOffer = (offer) => {
    fetch(`http://localhost:5000/offer/${offer}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  };

  return (
    <Container className="offer mt-10 mb-5" maxWidth="xl">
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid
            item
            sx={12}
            sm={4}
            xl={4}
            className="md:flex hidden items-center justify-center mega-slider "
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper mt-5 "
            >
              {books?.map((book) => (
                <SwiperSlide>
                  <Box className="mega-offer md:px-2 flex flex-col justify-around items-center py-4">
                    <div>
                      <h2 className="text-2xl md:text-1xl md:p-0 lg:text-2xl xl:text-5xl text-[#fc3333] font-semibold">
                        Time Limited Mega Offer
                      </h2>
                      <div>
                        <img className="w-40 md:w-60 m-auto" src={img} alt="" />
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
                          className="flex justify-between text-[12px] lg:px-10  
                  md:text-[13px] md:px-2 font-semibold"
                        >
                          <p>Already Sold:01</p>
                          <p>Available:20</p>
                        </div>
                        <div className="flex justify-center">
                          <button className="w-[60%] h-10 mt-2text-gray-100 bg-red-600  hover:bg-purple-600 text-sm font-semibold rounded-md duration-300 ">
                            Details
                          </button>
                        </div>
                        <h1 className="text-xl  md:text-[19px] font-semibold my-6 lg:text-xl">
                          <span className="text-[#fc3333]">Hurry up!</span>{" "}
                          offer end in:
                        </h1>
                        <TimeCount></TimeCount>
                      </div>
                    </div>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>

          <Grid item xs={12} sm={8} xl={8}>
            <ul className="flex justify-center md:justify-end lg:justify-end offer-ul no-underline">
              <li>
                <Link onClick={() => handelOffer(30)} className="text-gray-60">
                  30%Offer
                </Link>
              </li>
              <li className="ml-5">
                <Link
                  onClick={() => handelOffer(40)}
                  className=" text-gray-600"
                >
                  45%Offer
                </Link>
              </li>
              <li className="ml-5">
                <Link
                  onClick={() => handelOffer(60)}
                  className=" text-gray-600"
                >
                  60%Offer
                </Link>
              </li>
            </ul>
            {books.length !== 0 ? (
              <Box
                className="flex justify-center md:justify-between 
              lg:justify-between mt-5"
              >
                <Grid className="card-img" container spacing={2}>
                  {books?.map((book, i) => (
                    <Grid key={i} item xs={12} sm={6} md={6} lg={4} xl={4}>
                      <OfferCard book={book} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ) : (
              <div className="flex justify-center items-center h-full">
                <p className="text-2xl font-bold">No Data To Show</p>
              </div>
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Offer;
