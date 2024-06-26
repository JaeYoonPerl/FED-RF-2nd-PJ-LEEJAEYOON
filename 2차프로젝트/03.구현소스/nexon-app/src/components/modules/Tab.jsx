import React from "react";
import { useState } from "react";

import { ptabData } from "../data/people_tab_data";

import "../../css/tab_box.scss";

function Tab() {
    const [currentTab, clickTab] = useState(0);
    const selectMenu = (i) => {
        clickTab(i);
    };

    return (
        <>
            <div className="tabsec">
                <ul className="TabMenu">
                    {ptabData.map((v, i) => (
                        <li key={i} className={i === currentTab ? "submenu focused" : "submenu"} onClick={() => selectMenu(i)}>
                            {v.name}
                        </li>
                    ))}
                </ul>

                <div className="Desc">
                    {ptabData[currentTab].tit.map((v, i) => (
                        <li key={i} className="dbox">
                            <div>
                            <img src={ptabData[currentTab].src[i]} alt={ptabData[currentTab].tit[i]} />
                            <h3>{ptabData[currentTab].tit[i]}</h3>
                            <p>{ptabData[currentTab].txt[i]}</p>
                            </div>
                        </li>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Tab;
