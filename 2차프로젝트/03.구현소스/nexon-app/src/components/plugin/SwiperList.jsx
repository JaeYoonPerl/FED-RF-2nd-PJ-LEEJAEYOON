// 메인 페이지 스와이퍼 플러그인 컴포넌트

import React, { useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
// 제이쿼리 불러오기
import $ from "jquery";

// Import Swiper styles : 모듈용 기본 CSS 파일 로딩
import "swiper/css";
import "swiper/css/pagination";

// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

// CSS 불러오기
import "./css/swiper_list.scss";

// 데이터 불러오기
import { swData } from "../data/swiper_data";

// import required modules
// 사용할 스와이퍼 모듈을 불러온다
// (여기서는 네비게이션 - 양쪽 이동 버튼)
// import { Navigation } from "swiper/modules";

export function SwiperList({ catName }) {
    // 선택데이터 변수할당
    const selData = swData[catName];

    return (
        <>
            <Swiper
                // slidesPerView={4.5}
                spaceBetween={20}
                navigation={true}
                /* 사용할 모듈을 여기에 적용시킨다 */
                // modules={[Navigation]}
                breakpoints={{
                    200: {
                        slidesPerView: 1,
                    },
                    500: {
                        slidesPerView: 2,
                    },
                    1000: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4.5,
                    },
                }}
                className="mySwiper"
            >
                {selData.map(
                    (v, i) =>
                        Number(v.idx) <= 10 && (
                            <SwiperSlide key={i}>
                                <Link
                                  to="/detail" style={{ textDecoration: "none"}}
                                  // state로 데이터 넘기기

                                  >
                                    <section className="sw-inbox">
                                        {/* 타이틀 박스 */}
                                        <div className="mnews-tit">
                                            <h4>{v.date}</h4>
                                            <h3>{v.tit}</h3>
                                        </div>
                                        {/* 이미지박스 */}
                                        <div className="mnews-img">
                                            <img src={v.isrc} alt={v.tit} />
                                        </div>
                                    </section>
                                </Link>
                            </SwiperSlide>
                        )
                )}
                <SlidePrevButton />
                <SlideNextButton />
            </Swiper>
        </>
    );
}

function SlideNextButton() {
    const swiper = useSwiper();

    return (
        <button
            className="swiper-button-next"
            onClick={(e) => {
                swiper.slideNext();
                // console.log(swiper.activeIndex);
                if (swiper.activeIndex == 6) e.currentTarget.disabled = true;
                else e.currentTarget.previousElementSibling.disabled = false;
            }}
        >
            <FontAwesomeIcon icon={faChevronRight} />
        </button>
    );
}
function SlidePrevButton() {
    const swiper = useSwiper();

    return (
        <button
            className="swiper-button-prev"
            onClick={(e) => {
                swiper.slidePrev();

                // console.log(swiper.activeIndex);
                if (swiper.activeIndex == 0) e.currentTarget.disabled = true;
                else e.currentTarget.nextElementSibling.disabled = false;
            }}
        >
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
    );
}
