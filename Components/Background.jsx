import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import styles from "../styles/Background.module.css";




 function Background() {
  return (
    <>
      <Swiper className ={styles.swiper}
        cssMode={true}
        direction={"vertical"}
        navigation={true}
        pagination={{
          clickable: true
        }}
        loop={true}
        modules={[Pagination, Navigation]}
       
     >
        <SwiperSlide className={styles.swiperslide}>
          <img
            src="https://fintractwebsite.s3.ap-south-1.amazonaws.com/mainpagebg.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img
            src="https://fintractwebsite.s3.ap-south-1.amazonaws.com/mainpagebg.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img
            src="https://fintractwebsite.s3.ap-south-1.amazonaws.com/mainpagebg.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img
            src="https://fintractwebsite.s3.ap-south-1.amazonaws.com/mainpagebg.png"
            alt=""
          />
        </SwiperSlide >
        <SwiperSlide className={styles.swiperslide}>
          <img
            src="https://fintractwebsite.s3.ap-south-1.amazonaws.com/mainpagebg.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Background;
