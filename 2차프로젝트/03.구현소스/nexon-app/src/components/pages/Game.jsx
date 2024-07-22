// 게임 페이지 컴포넌트 ///
import React, { useEffect, useLayoutEffect, useState } from "react";
import GameList from "../modules/GameList";
import SubPgIntro from "../modules/SubPgIntro";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
// 자동 휠 함수 불러오기
// import * as wFn from "../func/auto_wheel";

import "../../css/game_info.scss";



export default function Game(){

    

    
   
    // 코드 리턴구역 ////
    return(
        <>
        <div>
           <SubPgIntro catname="game" />
           <GameList/>
        </div>


        {/* 클릭 팝업창 */}
        <div className="game-bx">
           <div className="ginfo-inbox">

            <h2 className="game-tit"></h2>

            <a href="" target="_blank" className="ghomebtn">
                <FontAwesomeIcon icon={faHouse} className="ghicon" />
            </a>

            <iframe src="" allow="autoplay"></iframe>
            

            {/* 닫기버튼 */}
            <button className="cbtn">×</button>
           </div>
        </div>

        </>
    );
} /////// Game /////