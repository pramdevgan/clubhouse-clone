import React from 'react'
import style from "../style/activity.module.css";
import data from "../data/activity.json"
import {Link} from "react-router-dom";

export default function Activity() {
    return(
        <div className={style.activityContainer}>
            <div className={style.activityHeader}>
                <Link to="/home">
                    <img style={{width: "12px"}} src="/images/arrow.png" alt="" />
                </Link>
                <h6>Activity</h6>
            </div>
            <div className={style.mainActivity}>
                {data.map((item) => (
                    <div className={style.activity}>
                        <div className={style.ImgageDescription}>
                            <img src="/images/user-img.jpg" alt="" />
                            <p>{item.title} {' '}{item.description}</p>
                        </div>
                        <div className={style.lastActive}>
                            <p>{item.time}</p>
                        </div>
                    </div>
                ))} 
            </div>
        </div>
    )
}

