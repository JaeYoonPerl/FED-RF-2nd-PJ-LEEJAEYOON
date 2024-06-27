import React from "react";
import { poepleStoryData,nexonTag } from "../data/people_story_data";


function PeopleStory(props) {
    return (
        <div className="pStory">
            <h2>넥슨인 이야기</h2>
            <ul className="psContain">
                {poepleStoryData.map((v, i) => (
                    <li key={i} className="psCard">
                        <a href={v.slink} target="_blank">
                            <ol className="psInbox">
                                <li className="psimgBox">
                                    <img src={v.simg} alt={v.stit} />
                                </li>
                                <li className="pstitBox">
                                    <p>{v.stit}</p>
                                </li>
                            </ol>
                        </a>
                    </li>
                ))}
            </ul>
            <div className="ntBtn">
                <a href="https://blog.nexon.com/" target="_blank">
                    <button><img src={process.env.PUBLIC_URL+nexonTag.nTimg} alt="넥슨태그" /></button>
                </a>
            </div>
        </div>
    );
}

export default PeopleStory;

{
    /* <ul className="psConatin">
                <li className="psCard">
                    <ol>
                        <li className="psimgBox">
                            <img src="" alt="" />
                        </li>
                        <li className="pstxtBox">
                            <p></p>
                        </li>
                    </ol>
                </li>
            </ul> */
}
