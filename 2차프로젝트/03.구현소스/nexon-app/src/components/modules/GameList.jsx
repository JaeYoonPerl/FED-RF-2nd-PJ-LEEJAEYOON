import React, { memo, useCallback } from "react";

import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
// 제이쿼리 불러오기
import $ from "jquery";
import { gameData } from "../data/game_list_data";

import "../../css/game_list.scss";


export const GameList = memo(() => {
    

    // 게임 정보 창
    const showGame = (게임명, gsrc, 홈페이지) => {
        console.log(gsrc);

        // 전체 게임 박스
        const gb = $(".game-bx");
        // 타이틀 박스
        const gtit = $(".game-tit");
        // 홈페이지 링크
        const ghome = $(".game-bx a");
        // 동영상 박스
        const ifr = $(".game-bx iframe");

        // 닫기 버튼
        const cbtn = $(".cbtn");

        // 경로
        gtit.text(게임명);
        ifr.attr("src", gsrc + "?autoplay=1");
        ghome.attr("href", 홈페이지);
        gb.fadeIn(300);

        cbtn.on("click", () => {
            // 전체박스 사라지기
            gb.fadeOut(300);
            // 기존 동영상 플레이 멈추기(src값 삭제)
            ifr.attr("src", "");
            ghome.attr("href", "");
        }); ////click
    };

   

    return (
        <section className="gListSec">
            <h2>전체게임</h2>
            <div className="filter">
                
            </div>
            <ul className="gArea">
                {gameData.map((v, i) => (
                    <li key={i} className="gBox" onClick={() => showGame(v.게임명, v.gsrc, v.홈페이지)}>
                        <div className="g-inbox">
                            {/* <Link to="/" className="gListLink"> */}
                            <ol className="gList">
                                <li className="gImg">
                                    <img src={v.대표이미지} alt={v.게임명} />
                                </li>
                                <div className="gtxtBox">
                                    <li className="gName">{v.게임명}</li>
                                    <li className="genre">{v.장르}</li>
                                    <li className="platform">
                                        {v.플랫폼[0] == "PC" ? <FontAwesomeIcon icon={faDesktop} /> : ""}
                                        {v.플랫폼[1] == "모바일" ? <FontAwesomeIcon icon={faMobileScreen} /> : ""}
                                        {v.플랫폼[2] == "콘솔" ? <FontAwesomeIcon icon={faGamepad} /> : ""}
                                    </li>
                                </div>
                            </ol>
                        </div>
                        {/* </Link> */}
                    </li>
                ))}
            </ul>
        </section>
    );
});
