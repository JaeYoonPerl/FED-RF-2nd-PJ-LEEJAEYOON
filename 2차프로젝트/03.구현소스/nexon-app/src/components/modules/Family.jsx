import React, { useEffect } from "react";
import { famTit } from "../data/fam_tit";
import { familyData } from "../data/family_data";

import "../../css/family.scss";
import scrollShowFn from "../func/scroll_show";

function Family({ catname }) {
    // 선택 데이터 변수 할당하기
    const titData = famTit[catname];
    const selData = familyData[catname];
    useEffect(() => {
       
        scrollShowFn(

        );
        // return () => {
        
        // };
    }, []);
   

    return (
        <div className="combox">
            <div className="tit-box obj">
                <h2>{titData.tit}</h2>
                <p>{titData.txt}</p>
            </div>

            <div className="com-box">
                <ul className="cArea">
                    {selData.map((v, i) => (
                        <li key={i} className="cBox">
                            <div className="cinbox">
                                    <li className="cImg">
                                        <img src={process.env.PUBLIC_URL+v.src} alt={v.ctit} />
                                    </li>
                            </div>
                                <ol className="cList">
                                    <div className="ctxtBox">
                                        <li className="ctit">{v.ctit}</li>
                                        <li className="ctxt">{v.ctxt}</li>
                                    </div>
                                </ol>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Family;
