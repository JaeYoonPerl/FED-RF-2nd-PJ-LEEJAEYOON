// 게임 페이지 컴포넌트 ///
import React, { useEffect } from "react";
import GameList from "../modules/GameList";
import SubPgIntro from "../modules/SubPgIntro";


// 자동 휠 함수 불러오기
import * as wFn from "../func/auto_wheel";


export default function Game(){

    // 화면 랜더링 실행구역
    useEffect(()=>{
        window.removeEventListener("wheel",wFn.wheelFn);

        return(()=>{
            
        })
    },[]);
    // 코드 리턴구역 ////
    return(
        <div>
           <SubPgIntro catname="game" />
           <GameList/>
        </div>
    );
} /////// Game /////