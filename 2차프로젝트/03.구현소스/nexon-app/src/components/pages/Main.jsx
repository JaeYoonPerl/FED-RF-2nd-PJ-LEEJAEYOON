import React, { useEffect } from "react";
import { ivideo } from "../data/intro_video";
import MainIntro from "../modules/MainIntro";
import MainNews from "../modules/MainNews";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import $ from "jquery";

// 자동 휠 함수 불러오기
import * as wFn from "../func/auto_wheel";
import MainPeople from "../modules/MainPeople";
// 메인 페이지 컴포넌트 ///

import "../../css/indic.scss";

export default function Main() {
    // 화면 랜더링 실행구역
    useEffect(() => {
        // 1. 자동 휠
        window.addEventListener("wheel", wFn.wheelFn,{passive: false});
        
        // 등장요소 CSS
        wFn.initSet();
        
        
        wFn.evtFn();
        wFn.zeroPno();

        window.scrollTo(0, 0);
        return () => {
            console.log("메인모듈 소멸자!");
            window.removeEventListener("wheel", wFn.wheelFn,{passive: false});    
            window.scrollTo(0, 0);
        };

    }, []);
    

    // 코드 리턴구역 ////
    return (
        <>
            <section id="pg1" className="page">
                <div className="firstitnro">
                    {/* 1. 인트로 구역 */}
                    <video className="mainV" autoPlay loop muted>
                        <source src={process.env.PUBLIC_URL + ivideo.mainv} type="video/mp4" />
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
            <section id="pg2" className="page">
                <MainIntro catname="company" clsName="off" />
            </section>

            {/* 3. GAME 인트로 구역 */}
            <section id="pg3" className="page">
                <MainIntro catname="game" clsName="off" />
            </section>
            {/* 4. PEoPle 인트로 구역 */}
            <section id="pg4" className="page">
                <MainPeople />
            </section>

            {/* 5. news 인트로 구역 */}
            <section id="pg5" className="page">
                <MainNews catName="news" />
            </section>

            {/* 사이드 인디케이터 */}
            <nav className="indic">
                <ul>
                    <li className="on" style={{display:"none"}}>
                        <a href="#pg1">
                            <span>인트로</span>
                        </a>
                    </li>
                    <li>
                        <a href="#pg2">
                            <span>컴퍼니</span>
                        </a>
                    </li>
                    <li>
                        <a href="#pg3">
                            <span>게임</span>
                        </a>
                    </li>
                    <li>
                        <a href="#pg4">
                            <span>피플</span>
                        </a>
                    </li>
                    <li>
                        <a href="#pg5">
                            <span>뉴스</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
} /////// Main /////
