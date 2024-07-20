import React, { memo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faDesktop, faMobileScreen, faGamepad } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import { gameData } from "../data/game_list_data";
import "../../css/game_list.scss";

export const GameList = memo(() => {
    const [searchTerm, setSearchTerm] = useState("");

    const showGame = (게임명, gsrc, 홈페이지) => {
        const gb = $(".game-bx");
        const gtit = $(".game-tit");
        const ghome = $(".game-bx a");
        const ifr = $(".game-bx iframe");
        const cbtn = $(".cbtn");

        gtit.text(게임명);
        ifr.attr("src", gsrc + "?autoplay=1");
        ghome.attr("href", 홈페이지);
        gb.fadeIn(300);

        cbtn.on("click", () => {
            gb.fadeOut(300);
            ifr.attr("src", "");
            ghome.attr("href", "");
        });
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredGames = gameData.filter((game) =>
        game.게임명.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="gListSec">
            <h2>전체 게임</h2>
            <input
                type="text"
                placeholder="게임 검색"
                value={searchTerm}
                onChange={handleSearchChange}
                className="searchInput"
            />
            
            <ul className="gArea">
                {filteredGames.map((v, i) => (
                    <li key={i} className="gBox" onClick={() => showGame(v.게임명, v.gsrc, v.홈페이지)}>
                        <div className="g-inbox">
                            <ol className="gList">
                                <li className="gImg">
                                    <img src={v.대표이미지} alt={v.게임명} />
                                </li>
                                <div className="gtxtBox">
                                    <li className="gName">{v.게임명}</li>
                                    <li className="genre">{v.cate}</li>
                                    <li className="platform">
                                        {v.플랫폼.includes("PC") && <FontAwesomeIcon icon={faDesktop} />}
                                        {v.플랫폼.includes("모바일") && <FontAwesomeIcon icon={faMobileScreen} />}
                                        {v.플랫폼.includes("콘솔") && <FontAwesomeIcon icon={faGamepad} />}
                                    </li>
                                </div>
                            </ol>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
});
