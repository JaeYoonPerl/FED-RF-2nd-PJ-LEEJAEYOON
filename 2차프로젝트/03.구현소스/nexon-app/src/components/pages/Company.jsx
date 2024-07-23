// 회사 페이지 컴포넌트 ///
import React, { useEffect } from "react";
import { familyData } from '../data/family_data';

import * as wFn from "../func/auto_wheel";
import AboutUs from "../modules/AboutUs";
import Family from "../modules/Family";
import scrollShowFn from "../func/scroll_show";
// 제이쿼리
import $ from "jquery";

export default function Company(){
    // const selData = familyData[catname];

    // useEffect(() => {
    //     // 1. 자동 휠
    //     window.addEventListener("wheel", wFn.wheelFn);
    //     scrollShowFn();
    //     return () => {
    //         window.removeEventListener("wheel", wFn.wheelFn);
    //         window.scrollTo(0, 0);
    //     };
    // }, []);
    // 화면 랜더링 구역
    useEffect(() => {
        // 전체 스크롤바 살리기
        $("html,body").css({ overflow: "visible" });
    }, []);
   

    // 코드 리턴구역 ////
    return(
        <>
            
            {/* About us */}
            

            <AboutUs/>
            

            {/* 계열사 목록 */}
            {/* <section className="page"> */}

            <Family catname="domestic"/>

            
            <Family catname="foreign"/>
            {/* </section> */}
            
        </>
    );
} /////// Company /////