import React from 'react';
import Searching from "../modules/Searching";

// 라우터 전달변수값을 받기위해 useLocation
import { useLocation } from "react-router-dom";


function SearchingPage(props) {
    // 라우터 전달값 받기 객체 생성
    const loc = useLocation();
    // 넘어온 키워드 받기
    let keyword = loc.state.keyword;
     // 코드 리턴구역 ///
     return (
        <>
            <h1 className="tit">Search Result</h1>
            <Searching kword={keyword} />
        </>
    );
}

export default SearchingPage;