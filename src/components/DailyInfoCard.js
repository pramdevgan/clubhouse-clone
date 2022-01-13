import React from 'react';
import style from "../style/dailyInfoCard.module.css";
import data from "../data/dailyCard.json";

export default function DailyInfoCard(){
    console.log(data[0].title);
    return(
        <div className={style.dailyCard}>
            {data.map((item)=> {
                return(
                    <div>
                        <span className="">{item.time}</span>
                        <div>
                            <span>{item.title}</span>
                            <p>{item.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}