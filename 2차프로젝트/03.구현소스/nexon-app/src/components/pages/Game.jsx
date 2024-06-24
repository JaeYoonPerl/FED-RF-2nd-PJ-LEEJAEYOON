// 게임 페이지 컴포넌트 ///
import React from "react";
import GameList from "../modules/GameList";
import SubPgIntro from "../modules/SubPgIntro";


import "../../css/game_info.scss";

export default function Game(){

    // 코드 리턴구역 ////
    return(
        <>
        <div>
           <SubPgIntro catname="game" />
           <GameList/>
        </div>

        <div className="game-bx">
           <div className="ginfo-inbox">

            <h2 className="game-tit"></h2>
            <img className="game-img" src="" alt="대표이미지" />
            <p className="game-txt"></p>

            {/* 닫기버튼 */}
            <button className="cbtn">×</button>
           </div>
        </div>

        </>
    );
} /////// Game /////