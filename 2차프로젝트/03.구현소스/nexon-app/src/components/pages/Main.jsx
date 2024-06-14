import React, { useEffect } from "react";
import { ivideo } from "../data/intro_video";
import MainIntro from "../modules/MainIntro";
import MainNews from "../modules/MainNews";

// 자동 휠 함수 불러오기
import * as wFn from "../func/auto_wheel";
// 메인 페이지 컴포넌트 ///

export default function Main(){
    // 화면 랜더링 실행구역
    useEffect(()=>{
        window.addEventListener("wheel",wFn.wheelFn);
    },[]);


    // 코드 리턴구역 ////
    return(
        <>
        <div className ="firstitnro">
           {/* 1. 인트로 구역 */}
           <video className="mainV" autoPlay loop muted>
                <source src={ivideo.mainv} type='video/mp4' />
            </video>
        </div>
            {/* 2. COMPANY 인트로 구역 */}
            <MainIntro catname="company" clsName="off"/>

            {/* 3. GAME 인트로 구역 */}
            <MainIntro catname="game" clsName="off"/>

            {/* 5. news 인트로 구역 */}
            <MainNews catName="news"/>
        </>
    );
} /////// Main /////