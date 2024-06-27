// 피플 페이지 컴포넌트 ///
import React from "react";
import SubPgIntro from "../modules/SubPgIntro";
import PeopleStory from "../modules/PeopleStory";

import "../../css/people_sub.scss";
import PeopleLifeSw from "../plugin/PeopleLifeSw";
import Tab from "../modules/Tab";



export default function People() {
    // 코드 리턴구역 ////
    return (
        <>
            <SubPgIntro catname="people" />
            <div className="pWrapper">
                <PeopleStory />

                <PeopleLifeSw />

                <Tab/>
            </div>
        </>
    );
} /////// People /////
