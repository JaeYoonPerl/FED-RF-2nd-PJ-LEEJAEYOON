import React, { memo, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faDesktop, faMobileScreen, faGamepad, faBookmark, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import $ from "jquery";
import { gameData } from "../data/game_list_data";
import "../../css/game_list.scss";

function GameList(props) {
    // 검색 필터 상태관리변수
    const [searchGame, setSearchGame] = useState("");
    // 카테고리 필터 상태관리변수
    const [selectedCategory, setSelectedCategory] = useState('All');

    const [selectedGame, setSelectedGame] = useState(null);
    const [bookmarks, setBookmarks] = useState([]);
    // 북마크 리스트 페이지 
    const [showBookmarks, setShowBookmarks] = useState(false);

    useEffect(() => {
        const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
        setBookmarks(savedBookmarks);
    }, []);

    useEffect(() => {
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }, [bookmarks]);


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
        setSearchGame(e.target.value);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleCloseGame = () => {
        setSelectedGame(null);
    };

   // 북마크
    const toggleBookmark = (game) => {
        if (bookmarks.some((bookmark) => bookmark.게임명 === game.게임명)) {
            setBookmarks(bookmarks.filter((bookmark) => bookmark.게임명 !== game.게임명));
        } else {
            setBookmarks([...bookmarks, game]);
        }
    };

    const toggleShowBookmarks = () => {
        setShowBookmarks(!showBookmarks);
    };

     // 필터링
    const filteredGames = gameData.filter((game) => {
        const matchesSearch = game.게임명.toLowerCase().includes(searchGame.toLowerCase());
        const matchesCategory = selectedCategory === "All" || game.cate === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const categories = ["All", ...new Set(gameData.map((game) => game.cate))];

    const isBookmarked = (game) => bookmarks.some((bookmark) => bookmark.게임명 === game.게임명);

    return (
        <section className="gListSec">
            <h2>넥슨 게임</h2>
            <div className="filter-box">
                <div className="categoryButtons">
                    {categories.map((category, i) => (
                        <button
                            key={i}
                            onClick={() => handleCategoryClick(category)}
                            className={selectedCategory === category ? "active" : ""}
                        >
                            <p>{category}</p>
                        </button>
                    ))}
                </div>
                <div className="searchingBox">
            <FontAwesomeIcon icon={faSearch} className="schbtn" title="Open search" />
            <input
                type="text"
                placeholder="게임 검색"
                value={searchGame}게임목록
                onChange={handleSearchChange}
                className="searchInput"
            />
            </div>
            {/* 북마크 페이지  */}
                <button onClick={toggleShowBookmarks} className="bookmarkToggleBtn">
                    {showBookmarks ? "Close" : "My Game"}
                </button>
            </div>
            <div className={`bookmarkSection ${showBookmarks ? "show" : ""}`}>
                <h3>My Game</h3>
                <ul className="gArea">
                    {bookmarks.map((v, i) => (
                        <li key={i} className="gBox" >
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
                                        <button onClick={() => toggleBookmark(v)} className="bookmarkbtn">
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </button>
                                    </div>
                                </ol>
                            </div>
                        </li>
                    ))}
                </ul>
                <button onClick={toggleShowBookmarks} className="bookmarkCloseBtn">
                    Close
                </button>
            </div>
           
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
                                    <button onClick={(e) => {
                                        e.stopPropagation();
                                        toggleBookmark(v);
                                    }} className="bookmarkbtn">
                                        <FontAwesomeIcon icon={isBookmarked(v) ? faTrashAlt : faBookmark} /> 
                                    </button>
                                </div>
                            </ol>
                        </div>
                    </li>
                ))}
            </ul>
           
        </section>
    );
}

export default GameList;
