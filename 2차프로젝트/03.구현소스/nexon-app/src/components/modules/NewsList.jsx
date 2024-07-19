import React, { useRef, useState } from 'react';

import { newsListData } from '../data/news_list_data';
// 제이쿼리 불러오기
import $ from "jquery";
import { Link } from 'react-router-dom';

import "../../css/news_list.scss";

function NewsList(props) {
    
    return (
        <section className='nListSec'>
            <div className="filter-area">
               
            </div>

            <ul className='nArea'>
                {newsListData.map((v,i)=>(
                    <li key={i} className='nBox'>
                        <div className="news-inbox">
                            <Link to="/detail" 
                                  // state로 데이터 넘기기
                                    state={{
                                        isrc:v.isrc, // 이미지
                                        date:v.date, // date
                                        tit:v.tit, // 제목
                                        cate:v.cate, // 카테고리
                                        isum:v.isum, // 요약
                                        txt:v.txt, // 본문
                                    }} className='nListLink'>
                                <ol className='nList'>
                                    <li className='nImg'>
                                        <img src={v.isrc} alt={v.tit} />
                                    </li>
                                    <div className="ntxtBox">
                                        <li className='nName'>{v.tit}</li>
                                        <li className='nCate'>{v.cate}</li>
                                        <li className='nDate'>{v.date}</li>
                                    </div>
                                </ol>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default NewsList;