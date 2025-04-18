import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import '../css/crocsbanner.css'

const Crocsbanner = () => {
  return (
    <div className="crocs-banner">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://www.crocs.in/media/wysiwyg/Upsell_2_Crush_Desktop_3.png?auto=webp&format=png&quality=85"
            alt=""  className="banner-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.crocs.in/media/wysiwyg/PR1-APR-30-60-V4-WEB.jpg?auto=webp&format=pjpg&quality=85" alt="" className="banner-image" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Crocsbanner;
