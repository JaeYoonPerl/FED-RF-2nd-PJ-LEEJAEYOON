// 넥슨 게임 검색 결과 리스트 컴포넌트
import React from "react";
import { Link } from "react-router-dom";
// CSS 불러오기
import "../../css/searching_cat.scss";

function SearchingGame({ dt }) {
    // dt 검색된 배열 데이터

    // total 검색된 배열 데이터 개수
    const total = dt.length;
    console.log("데이터수",total);
    return (
        <>
            {total > 0 && (
                <ul className="clist">
                    {dt.map((v, i) => (
                        <li key={i}>
                            <img src={v.gsrc} alt={v.게임명}/>
                            <h3>{v.게임명}</h3>
                        </li>
                    ))}
                </ul>
            )}
            {
                // 선택데이터가 0개이면 아래 출력
                total == 0 && 
                <h2 style={{textAlign:'center'}}>
                게임을 찾을 수 없습니다.
                </h2>
            }
        </>
    );
}

export default SearchingGame;
