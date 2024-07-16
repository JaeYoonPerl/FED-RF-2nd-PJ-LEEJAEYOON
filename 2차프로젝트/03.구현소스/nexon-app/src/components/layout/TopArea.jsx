// 상단영역 컴포넌트 ///

// GNB 데이터 불러오기
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { menu } from "../data/gnb";

// 상단영역 CSS 불러오기
import "../../css/top_area.scss";
import Logo from "../modules/Logo";

// 제이쿼리
import $ from "jquery";
import { memo, useContext } from "react";
import { dCon } from "../modules/dCon";

export const TopArea = memo(({  goPage }) => {
    // 검색 관련 함수들 ////
    // 1. 검색창 보이기 함수
    const showSearch = (e) => {
        // 기본기능막기
        e.preventDefault();
        // 1. 검색창 보이기
        $(".searchingGnb").show();
        // show() display를 보이게함
        // 2. 입력창에 포커스 보내기
        $("#schinGnb").focus();
    }; /// showSearch함수 ////

    // 2. 검색창에 엔터키 누르면 검색함수 호출
    const enterKey = (e) => {
        // e.keyCode는 숫자, e.key문자로 리턴함
        console.log(e.key, e.keyCode);
        if (e.key == "Enter") {
            // 입력창의 입력값 읽어오기 : val()사용
            let txt = $(e.target).val().trim();
            console.log(txt);
            // 빈값이 아니면 검색함수 호출(검색어 전달)
            if (txt != "") {
                // 입력창 비우고 부모박스 닫기
                $(e.target).val("").parent().hide();
                // 검색 보내기
                goSearch(txt);
            } // if
        } /// if ///
    }; //// enterkey

    // 3. 검색 페이지로 검색어와 함께 이동하기함수
    const goSearch = (txt) => {
        console.log("나는 검색하러 간다");
        // 라우터 이동함수로 이동하기
        // 네비게이트메서드(라우터주소,{state:{보낼객체}})
        goPage("/search", { state: { keyword: txt } });
    }; /////// goSearch

    // 컨텍스트 사용하기
    const myCon = useContext(dCon);

    // 이동 함수 ///
    const goNav = useNavigate();

    // 햄버거 버튼 열기 닫기
    const showHideMenu = (e) => {
        $(".mbox").fadeToggle(300);
        $(e.currentTarget).toggleClass("on");
    };
    // 클릭시 메뉴 닫기

    const exitMenu = (e) => {
        $(".mbox").fadeToggle(300);

        $(e.currentTarget).toggleClass("on");
        $(".ham").toggleClass("on");
    };

    // 코드 리턴구역 ////
    return (
        <>
            {/* 1.상단영역 */}
            <header className="top-area">
                {/* 1. 로고 컴포넌트 */}
                <li className="logoTop">
                    <a
                        href="#"
                        onClick={(e) => {
                            // 기본이동막기
                            e.preventDefault();
                            // 라우터 이동 메서드 호출
                            goNav("/");
                        }}
                    >
                        <Logo logoStyle="top" />
                    </a>
                </li>
                {/* 네비게이션 GNB파트 */}
                <nav className="gnb">
                    <ul className="gnbul">
                        {/* 2. GNB메뉴 데이터 배열로 만들기 */}
                        {menu.map((v, i) => (
                            <li key={i} className="gnbli">
                                <Link to={v.link}>{v.txt}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                {/* 햄버거 버튼 */}
                <div className="ham" onClick={showHideMenu}>
                    <span></span> <span></span> <span></span>
                </div>
                {/* 모바일 GNB */}
                <div className="mbox">
                    <nav className="mlist">
                        <ul className="ham_ul">
                            {menu.map((v, i) => (
                                <li key={i} className="ham_li">
                                    <Link to={v.link} className="mHamA" onClick={exitMenu}>
                                        {v.txt}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* 서브 메뉴 */}
                <nav className="smenu">
                    <li
                        style={{
                            marginLeft: "auto",
                            marginRight: "25px",
                        }}
                    >
                        {/* 검색입력박스 */}
                        <div className="searchingGnb">
                            {/* 검색버튼 돋보기 아이콘 */}
                            <FontAwesomeIcon
                                icon={faSearch}
                                className="scbtnGnb"
                                title="Open search"
                                onClick={(e) => {
                                    // 검색어 읽기
                                    let stxt = e.currentTarget.nextElementSibling.value;
                                    if (stxt.trim() != "") {
                                        // 검색하기
                                        goSearch(stxt);
                                    } else {
                                        // 검색어 비었을때 메시지
                                        alert("Please enter a search term!");
                                    }
                                }}
                            />
                            {/* 입력창 */}
                            <input type="text" name="schinGnb" id="schinGnb" placeholder="Filter by keyword" onKeyUp={enterKey} />
                        </div>
                        {/* 검색기능링크 - 클릭시 검색창보이기 */}
                        <a href="#" onClick={showSearch}>
                            <FontAwesomeIcon icon={faSearch} />
                        </a>
                    </li>
                    {
                        /* 회원가입, 로그인 버튼은
                            로그인 상태가 null일때 나옴 */
                        myCon.loginSts === null && (
                            <>
                                <li>
                                    <Link to="/member">회원가입</Link>
                                </li>
                                <li>
                                    <Link to="/login">로그인</Link>
                                </li>
                            </>
                        )
                    }
                    {
                        /* 로그인 상태이면 로그아웃 버튼 보임 */
                        myCon.loginSts !== null && (
                            <>
                                <li className="logmsg">
                                    {/* 로그인 확인 */}
                                    <Logo logoStyle="login" className="logLogo" /> {myCon.loginMsg}
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            // 기본이동 막기
                                            e.preventDefault();
                                            // 로그아웃 처리함수 호출
                                            myCon.logoutFn();
                                        }}
                                    >
                                        LOGOUT
                                    </a>
                                </li>
                            </>
                        )
                    }
                </nav>
            </header>
        </>
    );
}); /////// TopArea /////
