// 상단영역 컴포넌트 ///

// GNB 데이터 불러오기
import { Link, useNavigate } from "react-router-dom";
import { menu } from "../data/gnb";

// 상단영역 CSS 불러오기
import "../../css/top_area.scss";
import Logo from "../modules/Logo";

export default function TopArea() {
    // 이동 함수 ///
    const goNav = useNavigate();

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
                    <ul>
                        {/* 2. GNB메뉴 데이터 배열로 만들기 */}
                        {menu.map((v, i) => (
                            <li key={i}>
                                <Link to={v.link}>{v.txt}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                {/* 서브 메뉴 */}
                <nav className="smenu"></nav>
            </header>
        </>
    );
} /////// TopArea /////
