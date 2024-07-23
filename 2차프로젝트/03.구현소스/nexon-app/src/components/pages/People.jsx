// 피플 페이지 컴포넌트 ///
import React, { useEffect } from "react";
import SubPgIntro from "../modules/SubPgIntro";
import PeopleStory from "../modules/PeopleStory";

import "../../css/people_sub.scss";
import PeopleLifeSw from "../plugin/PeopleLifeSw";
import Tab from "../modules/Tab";
import ScrollAni from "../modules/ScrollAni";
// 제이쿼리
import $ from "jquery";

export default function People() {
    // 화면 랜더링 구역
    useEffect(() => {
        // 전체 스크롤바 살리기
        $("html,body").css({ overflow: "visible" });
    }, []);
    // 코드 리턴구역 ////
    return (
        <>
            <SubPgIntro catname="people" />
            <div className="pWrapper">
                <PeopleStory />

                <PeopleLifeSw />

                <ScrollAni/>
            </div>
        </>
    );
} /////// People /////
