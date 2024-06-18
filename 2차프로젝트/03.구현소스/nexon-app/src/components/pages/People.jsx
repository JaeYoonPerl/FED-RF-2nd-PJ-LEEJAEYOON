// 피플 페이지 컴포넌트 ///
import React, { useEffect } from "react";
import SubPgIntro from "../modules/SubPgIntro";
// 자동 휠 함수 불러오기
import * as wFn from "../func/auto_wheel";


export default function People(){
    // 화면 랜더링 실행구역
    useEffect(()=>{
        window.removeEventListener("wheel",wFn.wheelFn);

        return(()=>{
            
        })
    },[]);

    // 코드 리턴구역 ////
    return(
        <div>
           <SubPgIntro catname="people"/>
           
        </div>
    );
} /////// People /////