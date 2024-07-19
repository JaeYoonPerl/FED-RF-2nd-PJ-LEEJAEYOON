import React, { useEffect } from "react";
// 자동 휠 함수 불러오기
import * as wFn from "../func/auto_wheel";
import { aboutusData } from "../data/about_us_data";
import "../../css/aboutus.scss";
import scrollShowFn from "../func/scroll_show";

function AboutUs() {
    const selData = aboutusData.com;

    useEffect(() => {
        // 자동 휠
        // window.addEventListener("wheel", wFn.wheelFn);
        scrollShowFn();
        // return () => {
            // window.removeEventListener("wheel", wFn.wheelFn);
            window.scrollTo(0, 0);
        // };
    }, []);
    return (
        <>
            <section id="pg1" className="page compg">
                <div className="com1">
                    <h2>COMPANY</h2>
                    <div className="imgbox">
                        <img src="https://company.nexon.com/images/company-background-tablet-small.png" alt="aa" />
                    </div>
                </div>
            </section>

            <section id="pg2" className="page compg">
                <div className="com2 obj">
                    <div className="com-box">
                        <div className="com-logo ">
                            <img src="https://company.nexon.com/images/nexon_logo.png" alt="logo" />
                            <h3>ABOUT US</h3>
                            <p>
                                1994년 설립된 넥슨은 우수한 IP와 탄탄한 개발력,
                                <br />
                                20년 이상의 온라인게임 서비스 경험을 바탕으로
                                <br />
                                글로벌 종합 엔터테인먼트 기업으로 거듭나고 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="pg3" className="page compg">
                <div className="com3 obj">
                    <div className="lBox">
                        <img src="https://company.nexon.com/images/nexon_logo.png" alt="logo" className="clogo" />
                    </div>
                    <div className="com-box">
                        <h2>
                            <span>45+</span>
                            {selData.tit[0]}
                        </h2>
                        <div className="intro">
                            <img src={selData.src[0]} alt="aa" />
                            <p>{selData.txt[0]}</p>
                        </div>
                        <h2>
                            <span>190</span>
                            {selData.tit[1]}
                        </h2>
                        <h2>
                            <span>19.B</span>
                            {selData.tit[2]}
                        </h2>
                        <div className="intro">
                            <p>{selData.txt[1]}</p>
                            <img src={selData.src[1]} alt="aa" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutUs;
