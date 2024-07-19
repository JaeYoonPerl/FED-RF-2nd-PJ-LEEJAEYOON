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
                                    <div className="cImg">
                                        <img src={process.env.PUBLIC_URL+v.src} alt={v.ctit} />
                                    </div>
                            </div>
                                <ol className="cList">
                                    <div className="ctxtBox">
                                        <h3 className="ctit">{v.ctit}</h3>
                                        <p className="ctxt">{v.ctxt} <br/>
                                        </p>
                                    </div>
                                </ol>
                                       <a href="#" className="crl" onClick={(e)=>{e.preventDefault();}}>
                                        사이트 이동하기↗</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Family;
