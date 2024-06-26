import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { peopleLifeSw } from '../data/people_life_sw';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function PeopleLifeSw() {
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
        {
            peopleLifeSw.map((v,i)=>
            <SwiperSlide key={i}>
                <img src={v.isrc} alt={v.tit} />
            </SwiperSlide>)
        }  
      </Swiper>
    </>
  );
}
