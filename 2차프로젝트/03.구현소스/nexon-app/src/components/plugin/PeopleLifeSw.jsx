import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./css/swiper_people.scss";

import { peopleLifeSw } from '../data/people_life_sw';
import {motion} from "framer-motion";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function PeopleLifeSw() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
            ease: "easeInOut",
            duration: 1,
            y: { duration: 1 },
        }}>
    <div className="pStory">

        <h2>넥슨인 생활</h2>
    </div>
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
        {
            peopleLifeSw.map((v,i)=>
            <SwiperSlide key={i}>
                <img src={v.isrc} alt={v.tit} />
                <p>{v.tit}</p>
            </SwiperSlide>)
        }  
      </Swiper>
      <div className="nLBtn">
                <a href="https://career.nexon.com/common/main" target="_blank">
                    <button><p>NEXON 지원하기 →</p></button>
                </a>
            </div>

    </motion.div>
  );
}
