// 넥슨 메인 페이지 카테고리 인트로 소개 모듈 type1
import React from "react";
import { Link } from "react-router-dom";

// 인트로 데이터 가져오기
import { mainIntroData } from "../data/intro_data";
// 인트로 비디오 데이터 가져오기
// import { ivideo } from "../data/intro_video";

// 인트로 모듈 CSS 불러오기
import "../../css/main_intro.scss";

function MainIntro({ catname, clsName }) {
    // catName - 카테고리명
    // clsName - 클래스명

    // 선택 데이터 변수 할당하기
    const selData = mainIntroData[catname];

    return (
        <section className={"mintrobox " + clsName}>
            <div>
                {/* 배경 동영상 */}
                <video className="mintrov" autoPlay loop muted>
                    <source src={selData.video} type="video/mp4" />
                </video>
                {/* 제목 */}
                <div className="txtbox">
                    <h2 className="introtit">{selData.tit}</h2>
                    <div className=""></div>
                    {/* 설명 */}
                    <p className="introtxt">{selData.txt}</p>
                    {/* 더보기 링크 */}
                    <Link to={selData.link} className="linktxt">더보기</Link>
                </div>
            </div>
        </section>
    );
}

export default MainIntro;
