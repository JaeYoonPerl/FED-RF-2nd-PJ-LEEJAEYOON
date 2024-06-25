// 상단영역 컴포넌트 ///

// GNB 데이터 불러오기
import { Link, useNavigate } from "react-router-dom";
import { menu } from "../data/gnb";

// 상단영역 CSS 불러오기
import "../../css/top_area.scss";
import Logo from "../modules/Logo";

// 제이쿼리
import $ from "jquery";

export default function TopArea() {
    // 이동 함수 ///
    const goNav = useNavigate();

    // 햄버거 버튼 열기 닫기
    const showHideMenu = (e) => {
        $(".mbox").fadeToggle(300);
        $(e.currentTarget).toggleClass("on");
    };
    // 클릭시 메뉴 닫기

    const exitMenu =(e) =>{
        $(".mbox").fadeToggle(300);

        $(e.currentTarget).toggleClass("on");
        $(".ham").toggleClass("on");
    }

    // 코드 리턴구역 ////
    return (
        <>
            {/* 1.상단영역 */}
            <header className="top-area">
                {/* 로그인 환영메시지 박스 */}

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
                                    <Link to={v.link} className="mHamA" onClick={exitMenu}>{v.txt}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* 서브 메뉴 */}
                <nav className="smenu"></nav>
            </header>
        </>
    );
} /////// TopArea /////
