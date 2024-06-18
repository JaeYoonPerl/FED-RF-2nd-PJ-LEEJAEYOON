import React from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

import { gameData } from "../data/game_list_data";

import "../../css/game_list.scss";

function GameList(props) {
    return (
        <ul className="gArea">
            {gameData.map((v, i) => (
                <li key={i} className="gBox">
                    <Link to="/" className="gListLink">
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
                            <li></li>
                            </div>
                        </ol>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default GameList;
