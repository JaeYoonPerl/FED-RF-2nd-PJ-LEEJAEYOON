import React from 'react';

import { subPgIntro } from '../data/subpage_intro_data';


import "../../css/sub_pg_intro.scss";


function SubPgIntro({ catname, clsName }) {

    const selData =subPgIntro[catname];

    return (
        <section className={'subTopBanner' + clsName}>
            <div className='bannerBox'>
                <img src={selData.isrc} alt={selData.tit} />
                <div className="titbox">
                    <h2>{selData.tit}</h2>
                </div>
            </div>
        </section>
    );
}

export default SubPgIntro;