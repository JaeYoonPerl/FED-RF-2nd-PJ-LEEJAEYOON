// 회사 페이지 컴포넌트 ///
import React, { useEffect } from "react";
import { familyData } from '../data/family_data';

import * as wFn from "../func/auto_wheel";
import AboutUs from "../modules/AboutUs";
import Family from "../modules/Family";
import scrollShowFn from "../func/scroll_show";

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