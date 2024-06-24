import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
// 제이쿼리 불러오기
import $ from "jquery";
import { mainPeople } from '../data/mpeople_data';

import "../../css/main_people.scss";

function MainPeople(props) {
    const makeList = () =>{
        let temp=[];
        for(let x =1; x<=6;x++){
            temp[x]=(
                <li>
                    <img src={"./images/m_people/member_"+ x +".jpg"} alt="people" />
                </li>
            );
        }// for
        return temp;
    };


    return (
        <div className="mPeopleBox">
        <h2>{mainPeople.tit}
        {/* 더보기 링크 */}
        <Link to={mainPeople.link} className="linktxtn">더보기 →</Link>
        </h2>
        <p>{mainPeople.txt}</p>

        <div className="flowbx">
            <ul>{makeList()}</ul>
        </div>


        </div>
    );
}

export default MainPeople;