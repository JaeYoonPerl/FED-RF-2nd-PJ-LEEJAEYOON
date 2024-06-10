import React from "react";
import { ivideo } from "../data/intro_video";
import MainIntro from "../modules/MainIntro";

// 메인 페이지 컴포넌트 ///

export default function Main(){
    // 코드 리턴구역 ////
    return(
        <>
        <div className ="firstinro">
           {/* 1. 인트로 구역 */}
           <video className="mainV" autoPlay loop muted>
                <source src={ivideo.mainv} type='video/mp4' />
            </video>
        </div>
            {/* 2. COMPANY 인트로 구역 */}
            <MainIntro catname="company" clsName="off"/>

            {/* 3. GAME 인트로 구역 */}
            <MainIntro catname="game" clsName="off"/>
            
        </>
    );
} /////// Main /////