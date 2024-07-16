import React from "react";

// 이미지 경로 데이터 불러오기
import {isrc} from "../data/img_src";

export default function LogoFoot({logoStyle}){

    // 객체형 스타일 적용
    const myStyle = {
        bottom:{
            height: "40px"
            
        },
        login:{
            height: "30px"
        }
    };

    // 로고 이미지 스타일 객체
    const imgStyle = {
        top: {maxWidth:"104px"},
        bottom: {width:"90px"},
        login: {width:"30px"},
    };


    // 코드 리턴 구역 ////////
    return (        
        <h1 style={myStyle[logoStyle]}>
            <img
            style={imgStyle[logoStyle]}
            src={isrc.footlogo} alt="Nexon Logo" />
        </h1>
    );

}//// Logo