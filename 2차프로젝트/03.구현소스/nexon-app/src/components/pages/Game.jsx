// 게임 페이지 컴포넌트 ///
import React from "react";
import GameList from "../modules/GameList";
import SubPgIntro from "../modules/SubPgIntro";




export default function Game(){

    // 코드 리턴구역 ////
    return(
        <div>
           <SubPgIntro catname="game" />
           <GameList/>
        </div>
    );
} /////// Game /////