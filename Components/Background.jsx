import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import styles from "../styles/Background.module.css";

import { Pagination } from "swiper";

function Background() {
  return (
    <>
      <Swiper
        className={styles.swiper}
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
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
        </SwiperSlide>
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
