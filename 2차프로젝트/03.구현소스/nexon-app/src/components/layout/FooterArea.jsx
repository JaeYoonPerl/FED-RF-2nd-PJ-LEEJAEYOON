// 하단영역 컴포넌트 ///
import { Link } from "react-router-dom";
import { menu } from "../data/gnb";

// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


// 하단 메뉴 데이터 불러오기
import { bmData } from "../data/bmenu";

// 콤보박스 데이터 불러오기
import { comboDataA } from "../data/combo_data_a.js";
// 제이쿼리
import $ from "jquery";


// 하단영역 CSS 불러오기
import LogoFoot from "../modules/Logo_foot";

// 하단 영역 CSS
import "../../css/footer_area.scss";

export default function FooterArea() {
    const showHideCombo = ()=>{
        $(".combo-box").toggleClass("on");
        $(".comboIcon").toggleClass("on");
    }

    // 코드 리턴구역 ////
    return (
        <footer className="info">
            <ul>
                <li>
                    {/* 하단 링크 박스 */}
                    <ol className="bmenu">
                        {bmData.map((v, i) => (
                            <li key={i}>
                                <a href={v.link} target="_blank">
                                    {v.txt.toUpperCase()}
                                </a>
                            </li>
                        ))}
                    </ol>
                </li>
                <li className="copyright">© NEXON Korea Corporation All Rights Reserved</li>
                {/* 하단로고 컴포넌트 */}
                <li>
                    <LogoFoot logoStyle="bottom" />
                </li>
            </ul>
            {/* 콤보박스 */}
            <div className="combo-box">
                <ul>
                    <li>
                        <ol className="comboBox">
                            {comboDataA.map((v, i) => (
                                <li key={i}>
                                    <a href={v.brandLink} target="_blank">
                                        {v.brand}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </li>
                </ul>
            </div>
                    <div className="comboBtn" onClick={showHideCombo}>
                        <h3>Family Site</h3>
                        <FontAwesomeIcon icon={faPlus} className="comboIcon" 
                        style={{color:"white", fontSize:"16px"}} />
                    </div>
        </footer>
    );
} /////// FooterArea /////
