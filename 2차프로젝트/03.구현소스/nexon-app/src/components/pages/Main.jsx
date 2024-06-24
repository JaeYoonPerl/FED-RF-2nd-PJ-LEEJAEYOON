import React, { useEffect } from "react";
import { ivideo } from "../data/intro_video";
import MainIntro from "../modules/MainIntro";
import MainNews from "../modules/MainNews";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// 자동 휠 함수 불러오기
import * as wFn from "../func/auto_wheel";
import MainPeople from "../modules/MainPeople";
// 메인 페이지 컴포넌트 ///

export default function Main(){
    // 화면 랜더링 실행구역
    useEffect(()=>{
        // 1. 자동 휠
        window.addEventListener("wheel",wFn.wheelFn);

        // 등장요소 CSS초기화 함수 호출
        wFn.initSet();

        wFn.zeroPno();
        return(()=>{
            window.removeEventListener("wheel",wFn.wheelFn);
        })  
    },[]);
    // useLayoutEffect(()=>{
    //   console.log("useLayoutEffect");
    //  
    // },[]);


    // 코드 리턴구역 ////
    return(
        <>
        <section className="page">
        <div className ="firstitnro">
           {/* 1. 인트로 구역 */}
           <video className="mainV" autoPlay loop muted>
                <source src={ivideo.mainv} type='video/mp4' />
            </video>
            <div className="scroll-down-box">
            <h3 className="scroll-down-txt">SCROLL DOWN</h3>
            <div className="scroll-icon">
            <FontAwesomeIcon icon={faChevronDown} />
            <FontAwesomeIcon icon={faChevronDown} />
            <FontAwesomeIcon icon={faChevronDown} />
            </div>
            </div>
        </div>
        </section>
            {/* 2. COMPANY 인트로 구역 */}
            <section className="page">
            <MainIntro catname="company" clsName="off" />
            </section>

            {/* 3. GAME 인트로 구역 */}
            <section className="page">

            <MainIntro catname="game" clsName="secIntro" />
            </section>
            {/* 4. PEoPle 인트로 구역 */}
            {/* <section className="page">
                <MainPeople />
            </section> */}

            {/* 5. news 인트로 구역 */}
            <section className="page">
            <MainNews catName="news" />
            </section>
        </>
    );
} /////// Main /////