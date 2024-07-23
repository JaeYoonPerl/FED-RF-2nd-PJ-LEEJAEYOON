import React, { useEffect, useLayoutEffect } from "react";

import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import { SwiperList } from "../plugin/SwiperList";
import MainNews from "../modules/MainNews";

import "../../css/main_news_detail.scss";
// 제이쿼리
import $ from "jquery";

function MNewsDetail() {
    // 화면 랜더링 구역
    useEffect(() => {
        // 전체 스크롤바 살리기
        $("html,body").css({ overflow: "visible" });
    }, []);
    const loc = useLocation();
    const isrc = loc.state.isrc;
    const date = loc.state.date;
    const tit = loc.state.tit;
    const cate = loc.state.cate;
    const isum = loc.state.isum;
    const txt = loc.state.txt;
    console.log(isrc, date, tit, cate, isum);
    // const dt=isum.length;

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return (
        <>
            {/* 전체박스 */}
            <div className="detail">
                <div className="head-box">
                    <div className="cate-box">
                        <p>{cate}</p>
                    </div>
                    <div className="mtit-box">
                        <h2>{tit}</h2>
                    </div>
                    <div className="date">
                        <p>{date}</p>
                    </div>
                </div>
                {/* 구분선 */}
                <div className="line"></div>
                {/* 설명박스 */}
                <div className="intro-box">
                    <div className="sum-box">

                    <ul>
                        {isum.map((v, i) => (
                            <li key={i} className="sum">{isum[i]}</li>
                            ))}
                    </ul>
                    </div>
                    {/* 이미지 */}
                    <img src={isrc} alt={tit} />
                    {/* 설명 */}
                    <div className="txt-box">
                        {
                            txt.split("^").map((v,i)=>(
                                <p key={i}>{v}</p>
                            ))
                        }
                    </div>
                </div>
                {/* 목록으로가기 */}
                <div className="goBack">
                    <Link to="/news" className="gobackBtn">
                        목록보기
                    </Link>
                </div>
            </div>
        </>
    );
}

export default MNewsDetail;
