import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import {Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper";
import { Link } from "@mui/material";

const HotSell = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  return (
    <div className="my-8 w-[90%] mx-auto">
      <div className="flex md:justify-end justify-center px-4 ">
        <ul className="offer-ul flex no-underline mb-3">
          <li>
            <Link>Trending</Link>
          </li>
          <li className="ml-4">
            <Link>Hot Sell</Link>
          </li>
          <li className="ml-4">
            <Link>Best Sell</Link>
          </li>
        </ul>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        breakpoints={{
          390: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {books.map((book, index) => (
          <SwiperSlide key={index}>
            <div class="flex  md:h-64 h-56 w-full hover:border- hover:shadow-xl  duration-300  border  relative">
              <div class="  bg-white ">
                <div className="flex justify-center w-full ">
                  <img
                    class=" h-32 w-full inline-block object-fill  cover-full"
                    src={book?.photo}
                    alt=""
                  />
                </div>
                <div class="p-4 text-start">
                  <h5 class="text-gray-700 md:text-lg font-semibold mb-2">
                    {book?.title}
                  </h5>
                  <div className="flex justify-end">
                    <p className="text-end md:text-lg text-red-600 absolute  bottom-3 right-4">
                      ${book?.price}.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HotSell;
