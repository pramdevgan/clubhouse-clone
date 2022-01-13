import React, {useState}from 'react';
import style from "../style/upcoming.module.css";
import {Link} from "react-router-dom";
import { AiOutlineBell, AiOutlineCalendar, AiOutlineUpload, AiOutlineTwitter, AiOutlineCopy, AiOutlineFileAdd } from 'react-icons/ai';
import data from "../data/upcomingCard.json";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet/lib/SwipeableBottomSheet";
// import exploreStyle from "../style/explore.module.css";

export default function Upcoming() {
    const [sheetVisible ,setSheetVisible] = useState (false);
    const [timeVisible ,setTimeVisible] = useState ("");
    const [titleVisible ,setTitleVisible] = useState ("");
    const [descriptionVisible ,setDescriptionVisible] = useState ("")

    return (
        <div className={style.upcomingContainer}>
            <div className={style.header}>
                <Link to ="/home">
                    <img src="/images/arrow.png" alt="arrow"/>
                </Link>
                <h6>UPCOMING FOR YOU</h6>
                <AiOutlineCalendar/>
            </div>
            <h5>TODAY</h5>
            {data.map((item) =>(
                <div className={style.upcomingMain}
                    onClick={() => {
                        setSheetVisible(true);
                        setTimeVisible(item.time);
                        setTitleVisible (item.title);
                        setDescriptionVisible(item.description);
                    }}
                >
                    <div className={style.timeAndIconContainer}>
                        <p>
                            {item.time}
                        </p>
                        <AiOutlineBell/>
                    </div>
                    <h6>
                        {item.title}
                    </h6>
                    <div className={style.upcomingImages}>
                        <img src="/images/user-img.jpg" alt="1st user-img"/>
                        <img src="/images/user-img2.jpg" alt="2nd user-img"/>
                        <img src="/images/user-img.jpg" alt="1st user-img"/>
                        <img src="/images/user-img2.jpg" alt="2nd user-img"/>
                    </div>
                    <p>{item.description}</p>
                </div>
            ))}
            <SwipeableBottomSheet
                open={sheetVisible}
                onChange={() =>{
                    setSheetVisible(!sheetVisible)
                }}
            >
                <div className={style.upcomingBottomSheet}>
                    <div className={style.closeLine}
                        onClick={() => setSheetVisible(true)}
                    >
                    </div>  
                        <div className={style.DayTimeIcon}>
                            <div>
                                <p>
                                    Today
                                </p>
                                <p>
                                    {timeVisible}
                                </p>
                            </div>
                            <AiOutlineBell/>
                        </div>
                        <div className={style.bottomSheetTitle}>
                            <h6>
                                {titleVisible}
                            </h6>
                            <div className={style.bottomSheetImages}>
                                <img src="/images/user-img.jpg" alt="1st user-img"/>
                                <img src="/images/user-img2.jpg" alt="2nd user-img"/>
                                <img src="/images/user-img.jpg" alt="1st user-img"/>
                                <img src="/images/user-img2.jpg" alt="2nd user-img"/>
                            </div>

                            <p>
                                {descriptionVisible}
                            </p>
                        </div>
                        <div className={style.svgIcons}>
                            <button><AiOutlineUpload/><span>Share</span></button>
                            <button><AiOutlineTwitter/><span>Tweet</span></button>
                            <button><AiOutlineCopy/><span>Copy Link</span></button>
                            <button><AiOutlineFileAdd/><span>Add to call</span></button>
                        </div>
                        <button>
                            Join the Room in Progress
                        </button>
                </div>
            </SwipeableBottomSheet>
        </div>
    )
}


