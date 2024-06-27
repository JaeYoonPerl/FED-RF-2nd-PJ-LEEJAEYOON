import React from "react";
import  ReactDOM  from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/func/ScrollToTop";

import Main from "./components/pages/Main";
import Game from "./components/pages/Game";
import Company from "./components/pages/Company";
import People from "./components/pages/People";
import News from "./components/pages/News";
import MNewsDetail from "./components/pages/MNewsDetail";

// 전체 공통 CSS 불러오기
import "../src/css/index.scss";



export default function MainComponent() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
       < ScrollGoTop/>
        <ScrollToTop>
            <Routes>
            <Route path="/" element={<Layout/>}>
                {/* 하위 라우트 셋팅 */}
                <Route index element={<Main/>}/>
                <Route path="company" element={<Company/>}/>
                <Route path="game" element={<Game/>}/>
                <Route path="people" element={<People/>}/>
                <Route path="news" element={<News/>}/>
                <Route path="detail" element={<MNewsDetail/>}/>
            </Route>
            </Routes>
            </ScrollToTop>
        </BrowserRouter>
    );
}
const ScrollGoTop = ()=>{

    // 라우터 경로 변경시 path값 읽어오기
    // pathname 객체 속성에 담긴다.

    
    const {pathname} = useLocation();
    
    // 화면랜더링 구역에 스크롤 상단이동 코드넣기
    useEffect(()=>{
        // 스크롤 최상단 이동
        window.scrollTo(0,0);
        // 변경된 라우터 경로값 확인
        console.log("라우터 경로",pathname);

    },[pathname]);
    // 의존성을 라우터 경로 변수로 설정한다.

    // 컴포넌트 리턴이 필요하나 
    // 소스 리턴이 아니므로 null을 쓴다.
    return null;
}; /////////// ScrollTop컴포넌트

// 컴포넌트 출력
// 먼저 root 객체 만들기
const root = ReactDOM.createRoot(document.querySelector("#root"));
// 출력하기
root.render(<MainComponent />);