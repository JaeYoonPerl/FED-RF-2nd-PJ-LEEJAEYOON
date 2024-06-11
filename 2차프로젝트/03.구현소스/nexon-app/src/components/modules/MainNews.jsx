import React from 'react';
// 데이터 불러오기
import { mainNews } from '../data/mnews_data';
// 스와이퍼 컴포넌트 불러오기
import { SwiperList } from '../plugin/SwiperList';
// CSS 불러오기
import "../../css/intro_news.scss";

function MainNews({catName}) {
    
    return (
        
        <>
            <section className="news-swbox">
            {/* 1. 타이틀 */}
            <h2 className="tit">{mainNews.tit}</h2>
            {/* 2. 스와이퍼 컴포넌트 */}
            <SwiperList catName="news"/>
            </section>
        </>
    );
}

export default MainNews;