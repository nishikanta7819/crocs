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
            src="https://www.crocs.in/media/wysiwyg/home2025/3-JIBB-FREE-2-WEB-BANNER.jpg"
            alt=""  className="banner-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.crocs.in/media/wysiwyg/home2025/KIDS-WEB-BANNER.jpg?auto=webp&format=pjpg&quality=85" alt="" className="banner-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.crocs.in/media/wysiwyg/home2025/BOGO-JIBB2-WEB-BANNER.jpg" alt="" className="banner-image" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Crocsbanner;
