import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
// 제이쿼리 불러오기
import $ from "jquery";
import { mainPeople } from "../data/mpeople_data";

import { flowList } from "../func/flowlist";

import "../../css/main_people.scss";

function MainPeople(props) {
    const lpos = useRef(0);
    const callSts = useRef(1);

    useLayoutEffect(()=>{
        lpos.current=0;
        callSts.current=1;
    },[]);


    const makeList = () => {
        let temp = [];
        for (let x = 1; x <= 6; x++) {
            temp[x] = (
                <li
                className={"m" + x}
                key={x}
                >
                    <img src={"./images/m_people/member_" + x + ".jpg"} alt="people" />
                </li>
            );
        } // for
        return temp;
    };

    return (
        <div className="mPeopleBox">
            <div className="mptitbox">
            <h2>
                {mainPeople.tit}
                {/* 더보기 링크 */}
                <Link to={mainPeople.link} className="mplinktxtn">
                    더보기 →
                </Link>
            </h2>
            <p>{mainPeople.txt}</p>
            </div>

            <div className="flowbx"
            onMouseEnter={()=>{
                callSts.current=0;
            }}
            onMouseLeave={()=>{
                callSts.current=1;
                flowList($(".flist"), lpos, callSts);
            }}>
                <ul className="flist">{makeList()}</ul>
            </div>
        </div>
    );
}

export default MainPeople;
