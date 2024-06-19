import React from "react";
import  ReactDOM  from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/func/ScrollToTop";

import Main from "./components/pages/Main";
import Game from "./components/pages/Game";
import Company from "./components/pages/Company";
import People from "./components/pages/People";
import News from "./components/pages/News";

// 전체 공통 CSS 불러오기
import "../src/css/index.scss";



export default function MainComponent() {
    return (
        <BrowserRouter>
        <ScrollToTop>
            <Routes>
            <Route path="/" element={<Layout/>}>
                {/* 하위 라우트 셋팅 */}
                <Route index element={<Main/>}/>
                <Route path="company" element={<Company/>}/>
                <Route path="game" element={<Game/>}/>
                <Route path="people" element={<People/>}/>
                <Route path="news" element={<News/>}/>
            </Route>
            </Routes>
            </ScrollToTop>
        </BrowserRouter>
    );
}

// 컴포넌트 출력
// 먼저 root 객체 만들기
const root = ReactDOM.createRoot(document.querySelector("#root"));
// 출력하기
root.render(<MainComponent />);