// 뉴스 페이지 컴포넌트 ///

import React, { useEffect } from "react";
import SubPgIntro from "../modules/SubPgIntro";
import NewsList from "../modules/NewsList";
// 제이쿼리
import $ from "jquery";


export default function News(){
    // 화면 랜더링 구역
    useEffect(() => {
        // 전체 스크롤바 살리기
        $("html,body").css({ overflow: "visible" });
    }, []);
   

    // 코드 리턴구역 ////
    return(
        <div>
           
           <SubPgIntro catname="news" />
           <NewsList/>
        </div>
    );
} /////// News /////