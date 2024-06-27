// 뉴스 페이지 컴포넌트 ///

import React from "react";
import SubPgIntro from "../modules/SubPgIntro";
import NewsList from "../modules/NewsList";



export default function News(){

   

    // 코드 리턴구역 ////
    return(
        <div>
           
           <SubPgIntro catname="news" />
           <NewsList/>
        </div>
    );
} /////// News /////