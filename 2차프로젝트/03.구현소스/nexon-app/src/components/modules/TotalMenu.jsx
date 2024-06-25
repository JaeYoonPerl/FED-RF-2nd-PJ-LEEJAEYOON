// Pilot PJ 전체메뉴 컴포넌트

// 컨텍스트 API호출
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { menu } from "../data/gnb";
import { pCon } from "./pCon";

export function TotalMenu() {
    // 컨텍스트 사용하기
    const myCon = useContext(pCon);

    // 서브페이지 이동함수
    const goSub = (e) => {
      // 기본이동막기
      e.preventDefault();
    //   // 이동할 서브페이지명 : a요소의 글자를 소문자로
    //   let pgName = e.target.innerText.toLowerCase();
    //   console.log("이동할 페이지:",pgName);
    //   // 서브페이지 이동위해 상태변수업데이트
    //   myCon.setPgName(pgName);
      // 햄버거버튼 클릭이벤트 발생하여 전체메뉴 닫기
      document.querySelector(".ham").click();
    }; ///// goSub

    // 코드 리턴 //////////////////////
    return (
        <>
        <div className="mbox">
                    <nav className="mlist">
                        <ul className="ham_ul">
                            {menu.map((v, i) => (
                                <li key={i} className="ham_li">
                                    <Link to={v.link} className="mHamA" onClick={goSub}>{v.txt}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
        </>
    );
  } ///////// TotalMenu 컴포넌트 //////////
  