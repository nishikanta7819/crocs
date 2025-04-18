import React from "react";
import "../css/newarrivals.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const NewArrivals = () => {
  return (
    <div className="new-arrivals">
      <div className="new-arrivals-title">
        <p>New arrivals</p>
      </div>
      <div className="new-arrivals-cards">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://www.crocs.in/media/catalog/product/2/0/209587_410_alt100.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=400&width=500&auto=webp&format=pjpg"
              alt=""
              className="product-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.crocs.in/media/catalog/product/2/0/207937_108_alt100.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=400&width=500&auto=webp&format=pjpg"
              alt=""
              className="product-image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.crocs.in/media/catalog/product/2/0/208454_6ws_alt100.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=400&width=500&auto=webp&format=pjpg"
              alt=""
              className="product-image"
            />
          </SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrivals;
