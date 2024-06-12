// 하단영역 컴포넌트 ///
import { Link } from "react-router-dom";
import { menu } from "../data/gnb";

// 하단 메뉴 데이터 불러오기
import { bmData } from "../data/bmenu";

// 하단영역 CSS 불러오기
import LogoFoot from "../modules/Logo_foot";

// 하단 영역 CSS
import "../../css/footer_area.scss";

export default function FooterArea(){
    // 코드 리턴구역 ////
    return(
        <footer className="info">
            <ul>
                {/* 하단로고 컴포넌트 */}
                <li></li>
                <li>
                    {/* 하단 링크 박스 */}
                    <ol className="bmenu">

                    </ol>
                </li>
                <li>© NEXON Korea Corporation All Rights Reserved</li>
            </ul>
        </footer>
    );
} /////// FooterArea /////