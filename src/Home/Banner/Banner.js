import React, { useEffect, useState } from 'react';
import './Banner.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import BannerItem from './BannerItem';

const Banner = () => {
  const [product, setProduct] = useState([]);
  

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
    return (
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {product.map((products) => (
            <SwiperSlide>
              <BannerItem key={products._id} products={products}></BannerItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
};
export default Banner;