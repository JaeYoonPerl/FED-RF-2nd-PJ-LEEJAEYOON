// 날씨 지역 변경하기
// 1-1. 이벤트 대상
// 날씨 지역 
// const ww = document.querySelectorAll('.weather-wrap dl');
// const dbtn =document.querySelector('.button-wrap down');

// console.log(dbtn,ww);

// DKB PJ 메인 JS - main.js ////////////

// 모듈로 호출된 JS에서는 다른 외부 JS를 import로 호출가능
// import 하려는 파일에서 반드시 함수, 변수 등을 export해야함!

import slideFn from "./slide.js";

// console.log('모듈로 메인JS호출',document.querySelector('.top-menu'));

// slideFn 슬라이드 기능함수 호출!

slideFn();