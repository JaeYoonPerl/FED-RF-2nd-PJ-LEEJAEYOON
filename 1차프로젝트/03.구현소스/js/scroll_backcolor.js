// 배경색
export default function changeBack(){
const myFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),

    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
    // 바운딩함수
    getBCR: (ele) => ele.getBoundingClientRect().top,

    // 옵셋탑값 반환함수
    getOT: (ele) => ele.offsetTop,
}; /////// myFn 객체 /////////////


// 대상설정
const bG = myFn.qs("#intro-pic-area");

const obj = myFn.qsa('.intro2');
const obj2 = myFn.qsa('.intro3');

// 스크롤 색변화 이벤트 설정하기
myFn.addEvt(window, "scroll", changeIt);

function changeIt(){
    for (let x of obj) addOn(x);

}
    
    
const CRITERIA = (window.innerHeight / 3) * 2;
console.log(CRITERIA);

function addOn(ele) {
    // ele - 대상요소
    // 바운딩값 구하기
    let bcrVal = myFn.getBCR(ele);
    
    
console.log('바운딩',bcrVal);
    // 기준값보다 작을때 등장
    if (bcrVal < CRITERIA) bG.style.backgroundColor ="blue";
    // 기준값보다 크면 원상복귀(숨김-on빼기)
    else bG.style.backgroundColor ="white";
} ////// addOn 함수
}