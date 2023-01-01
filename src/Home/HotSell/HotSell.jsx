import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import HotSellCard from "./HotSellCard";
import { Link } from "react-router-dom";

const HotSell = () => {
  const [books, setBooks] = useState([]);

  const bookData = (keyword) => {
    fetch(`http://localhost:5000/${keyword}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  };
  // best sell data load

  useEffect(() => {
    fetch("http://localhost:5000/trendsell")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);
  // trending sell data load default

  return (
    <>
      <div className="mb-8 mx-6 mt-5">
        <div className=" max-w-screen-xl  m-auto border p-2">
          <ul className="flex justify-center md:justify-end lg:justify-end offer-ul no-underline">
            <li>
              <Link
                onClick={() => bookData("trendsell")}
                className="text-gray-60"
              >
                Trending Sell
              </Link>
            </li>
            <li className="ml-5">
              <Link
                onClick={() => bookData("hotsell")}
                className=" text-gray-600"
              >
                Hot Sell
              </Link>
            </li>
            <li className="ml-5">
              <Link
                onClick={() => bookData("bestsell")}
                className=" text-gray-600"
              >
                Best Sell
              </Link>
            </li>
          </ul>
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
                slidesPerView: 2,
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
              980: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1025: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
            className="mySwiper mt-5"
          >
            {books.map((book, index) => (
              <SwiperSlide key={index}>
                <HotSellCard book={book} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HotSell;
