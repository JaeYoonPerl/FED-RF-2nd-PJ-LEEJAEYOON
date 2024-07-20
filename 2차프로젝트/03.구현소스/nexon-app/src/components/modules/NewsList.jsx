import React, { useState } from 'react';
import { newsListData } from '../data/news_list_data';
import { Link } from 'react-router-dom';
import "../../css/news_list.scss";

function NewsList(props) {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredNewsList = selectedCategory === 'All'
        ? newsListData
        : newsListData.filter(news => news.cate === selectedCategory);

    const categories = ['All', ...new Set(newsListData.map(news => news.cate))];

    const handleImageError = (e) => {
        e.target.src = 'path/to/placeholder/image.jpg';
    };

    return (
        <section className='nListSec'>
            <div className='categoryButtons'>
                {categories.map((category, index) => (
                    <button 
                        key={index} 
                        onClick={() => handleCategoryClick(category)}
                        className={selectedCategory === category ? 'active' : ''}
                    >
                        <p>{category}</p>
                    </button>
                ))}
            </div>

            <ul className='nArea'>
                {filteredNewsList.map((v, i) => (
                    <li key={i} className='nBox'>
                        <div className="news-inbox">
                            <Link to="/detail"
                                state={{
                                    isrc: v.isrc, // 이미지
                                    date: v.date, // date
                                    tit: v.tit, // 제목
                                    cate: v.cate, // 카테고리
                                    isum: v.isum, // 요약
                                    txt: v.txt, // 본문
                                }} className='nListLink'>
                                <ol className='nList'>
                                    <li className='nImg'>
                                        <img src={v.isrc} alt={v.tit} onError={handleImageError} />
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
