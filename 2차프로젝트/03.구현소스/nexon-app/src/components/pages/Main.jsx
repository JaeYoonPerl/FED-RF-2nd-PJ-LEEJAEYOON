import React from "react";
import { ivideo } from "../data/intro_video";

// 메인 페이지 컴포넌트 ///

export default function Main(){
    // 코드 리턴구역 ////
    return(
        <div className ="firstinro">
           {/* 1. 인트로 구역 */}
           <video className="mainV" autoPlay loop muted>
                <source src={ivideo.mainv} type='video/mp4' />
            </video>
           
        </div>
    );
} /////// Main /////