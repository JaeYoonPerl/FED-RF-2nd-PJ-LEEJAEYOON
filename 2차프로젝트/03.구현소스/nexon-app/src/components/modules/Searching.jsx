import React, { useRef, useState } from "react";
// 폰트어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// CSS불러오기
import "../../css/searching.scss";

// 게임데이터 불러오기
import { gameData } from "../data/game_list_data";

import SearchingGame from "./SearchingGame";

function Searching({ kword }) {
    // kword 전달 받은 키워드
    console.log("kword:", kword);
    console.log("data:", gameData);

    // [1] 검색어 상태 관리 변수
    const [kw, setKw] = useState(kword);
    // [2] 정렬기준 상태관리 변수
    const [sort, setSort] = useState("asc");
    // asc: 오름차순, desc: 내림차순
    // [3] 체크박스 여부
    const [chk, setChk] = useState([true, true, true]);

    /// 상단메뉴 검색창에서 다시 검색할 경우
    // 검색 가능하도록 검색어 비교를 위한 검색어를 저장한다.
    // 리랜더링 없이 값만 저장하는 후크는? useRef 참조변수사용
    const beforeKword = useRef(kword);

    // 직전 검색어 지금 검색어 다를시 검색어 상태변수 업데이트
    if (beforeKword.current != kword) {
        // 1. 컴포넌트 리랜더링(검색결과 변경)
        setKw(kword);
        // 2. 다음검색을 위해 다시 현재 검색어를 참조변수에 저장
        beforeKword.current = kword;
        // 3. 상단 검색어를 현재 검색창에 넣기
        document.querySelector("#schin").value = kword;
    } // if

    const newList = gameData.filter((v)=>{
        let newVal = v.게임명;
        let key =kw.toLocaleLowerCase();
        if(
            newVal.indexOf(key) !== -1 &&
            ((chk[0] ? v.alignment == "rpg" : false) || (chk[1] ? v.alignment == "comp" : false) || (chk[2] ? v.alignment == "스포츠" : false))
        )
        return true;
    });

    // [ 정렬기능 추가하기 ] /////////
    // (1) 오름차순일 경우
    if (sort == "asc") {
        newList.sort((a, b) => (a.cname > b.cname ? 1 : a.cname < b.cname ? -1 : 0));
    } /// if ///////////////////////
    // (2) 내림차순일 경우
    else if (sort == "desc") {
        newList.sort((a, b) => (a.cname > b.cname ? -1 : a.cname < b.cname ? 1 : 0));
    } /// else if ///////////////////

    return (
        <>
            {/* 전체 검색 모듈 코트 */}
            <section className="schbx">
                {/* 1. 옵션 선택 박스 */}
                <div className="schopt">
                    {/* 1-1. 검색박스 */}
                    <div className="searching">
                        {/* 검색버튼 돋보기 아이콘 */}
                        <FontAwesomeIcon icon={faSearch} className="schbtn" title="Open search" />
                        {/* 입력창 */}
                        <input
                            id="schin"
                            type="text"
                            placeholder="검색"
                            defaultValue={kword}
                            // 엔터 검색
                            onKeyUp={(e) => {
                                if (e.key == "Enter") {
                                    // 1. 검색어 상태값 변경
                                    setKw(e.target.value);
                                    // 2. 처음검색시 정렬은 기본정렬 오름차순(asc)
                                    setSort("asc");
                                    // 3. 처음검색시 모두체크
                                    setChk([true, true, true]);
                                    // 정렬선택박스 선택값변경(DOM에서 보이기변경)
                                    document.querySelector("#sel").value = "asc";
                                } //// if
                            }}
                        />
                        {/* 1-2. 체크박스구역 */}
                        <div className="chkbk">
                            <ul>
                                <li>
                                    <h2>
                                        카테고리
                                        <span className="spbtn">＋</span>
                                    </h2>
                                    {/* 체크박스 리스트 */}
                                    <ol>
                                        <li>
                                            RPG
                                            {/* 숨긴 체크박스 */}
                                            <input
                                                type="checkbox"
                                                id="rpg"
                                                className="chkhdn"
                                                // 체크박스 체크속성값을 훅연결!
                                                checked={chk[0]}
                                                // 체크변경시 change이벤트발생
                                                onChange={(e) => {
                                                    // 체크박스의 checked속성은
                                                    // 체크시 true, 불체크시 false리턴
                                                    console.log(e.target.checked);
                                                    // 훅값 업데이트
                                                    setChk([e.target.checked, chk[1], chk[2]]);
                                                }}
                                            />
                                            {/* 디자인노출 라벨 */}
                                            <label htmlFor="rpg" className="chklb"></label>
                                        </li>
                                        <li>
                                            FPS
                                            {/* 숨긴 체크박스 */}
                                            <input
                                                type="checkbox"
                                                id="fps"
                                                className="chkhdn"
                                                // 체크박스 체크속성값을 훅연결!
                                                checked={chk[1]}
                                                // 체크변경시 change이벤트발생
                                                onChange={(e) => {
                                                    // 체크박스의 checked속성은
                                                    // 체크시 true, 불체크시 false리턴
                                                    console.log(e.target.checked);
                                                    // 훅값 업데이트
                                                    setChk([chk[0], e.target.checked, chk[2]]);
                                                }}
                                            />
                                            {/* 디자인노출 라벨 */}
                                            <label htmlFor="fps" className="chklb"></label>
                                        </li>
                                        <li>
                                            스포츠
                                            {/* 숨긴 체크박스 */}
                                            <input
                                                type="checkbox"
                                                id="스포츠"
                                                className="chkhdn"
                                                // 체크박스 체크속성값을 훅연결!
                                                checked={chk[2]}
                                                // 체크변경시 change이벤트발생
                                                onChange={(e) => {
                                                    // 체크박스의 checked속성은
                                                    // 체크시 true, 불체크시 false리턴
                                                    console.log(e.target.checked);
                                                    // 훅값 업데이트
                                                    setChk([chk[0], chk[1], e.target.checked]);
                                                }}
                                            />
                                            {/* 디자인노출 라벨 */}
                                            <label htmlFor="스포츠" className="chklb"></label>
                                        </li>
                                    </ol>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                {/* 2. 결과리스트박스 */}
                <div className="listbx">
                    {/* 2-1. 결과 타이틀 */}
                    <h2 className="restit">
                      BROWSE CHARACTERS ({newList.length})
                      </h2>
                    {/* 2-2. 정렬선택박스 */}
                    <aside className="sortbx">
                        <select
                            name="sel"
                            id="sel"
                            className="sel"
                            // 값을 변경할때 이벤트발생
                            onChange={(e) => {
                                console.log(e.target.value);
                                // 정렬기준 상태변수 업데이트
                                setSort(e.target.value);
                            }}
                        >
                            <option value="asc">ㄱ-ㅎ</option>
                            <option value="desc">ㅎ-ㄱ</option>
                        </select>
                    </aside>
                    {/* 2-3. 캐릭터 리스트 컴포넌트 : 
            데이터 상태변수 중 첫번째값만 보냄 */}
                    <SearchingGame dt={newList} />
                </div>
            </section>
        </>
    );
}

export default Searching;
