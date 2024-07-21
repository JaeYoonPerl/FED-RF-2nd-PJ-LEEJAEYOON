import React, { memo, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faDesktop, faMobileScreen, faGamepad, faBookmark, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { gameData } from "../data/game_list_data";
import "../../css/game_list.scss";

export const GameList = memo(() => {
    const [searchGame, setSearchGame] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedGame, setSelectedGame] = useState(null);
    const [bookmarks, setBookmarks] = useState([]);
    const [showBookmarks, setShowBookmarks] = useState(false);

    useEffect(() => {
        const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
        setBookmarks(savedBookmarks);
    }, []);

    useEffect(() => {
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }, [bookmarks]);

    const handleSearchChange = (e) => {
        setSearchGame(e.target.value);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleCloseGame = () => {
        setSelectedGame(null);
    };

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

    const filteredGames = gameData.filter((game) => {
        const matchesSearch = game.게임명.toLowerCase().includes(searchGame.toLowerCase());
        const matchesCategory = selectedCategory === "All" || game.cate === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const categories = ["All", ...new Set(gameData.map((game) => game.cate))];

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
                <input
                    type="text"
                    placeholder="게임 검색"
                    value={searchGame}
                    onChange={handleSearchChange}
                    className="searchInput"
                />
                <button onClick={toggleShowBookmarks} className="bookmarkToggleBtn">
                    {showBookmarks ? "북마크 숨기기" : "북마크 보기"}
                </button>
            </div>
            <div className={`bookmarkSection ${showBookmarks ? "show" : ""}`}>
                <h3>북마크</h3>
                <ul className="gArea">
                    {bookmarks.map((v, i) => (
                        <li key={i} className="gBox">
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
                                        <button onClick={() => toggleBookmark(v)}>
                                            <FontAwesomeIcon icon={faTrashAlt} /> 북마크 삭제
                                        </button>
                                    </div>
                                </ol>
                            </div>
                        </li>
                    ))}
                </ul>
                <button onClick={toggleShowBookmarks} className="bookmarkCloseBtn">
                    북마크 닫기
                </button>
            </div>
            <h3>게임 목록</h3>
            <ul className="gArea">
                {filteredGames.map((v, i) => (
                    <li key={i} className="gBox" onClick={() => setSelectedGame(v)}>
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
                                    }}>
                                        <FontAwesomeIcon icon={faBookmark} /> 북마크 추가
                                    </button>
                                </div>
                            </ol>
                        </div>
                    </li>
                ))}
            </ul>
            {selectedGame && (
                <div className="game-bx">
                    <div className="game-tit">{selectedGame.게임명}</div>
                    <iframe src={selectedGame.gsrc + "?autoplay=1"} title={selectedGame.게임명}></iframe>
                    <a href={selectedGame.홈페이지} target="_blank" rel="noopener noreferrer">
                        홈페이지
                    </a>
                    <button className="cbtn" onClick={handleCloseGame}>닫기</button>
                </div>
            )}
        </section>
    );
});
