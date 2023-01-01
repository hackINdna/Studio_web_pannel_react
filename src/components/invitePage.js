import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { url } from '../constData'
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import styles from './css/invite.module.css';

import chartIcon from './images/icons/Chart.svg'
import chatIcon from './images/icons/Chat.svg'
import workIcon from './images/icons/Work.svg'
import users3 from './images/icons/users3.svg'
import addUserIcon from './images/icons/Add User.svg'
import profileIcon from './images/icons/Profile.svg'
import calendarIcon from './images/icons/Calendar.svg'
import notificationBtn from './images/icons/notification.svg'
import settingBtn from './images/icons/setting-icon.svg'
import filterBtn from "./images/icons/filter-icon.svg"
import tickIcon from "./images/icons/tick.svg"
import blackImage from './images/blackImage.jpg'
import downArrow from "./images/icons/down-arrow.svg";
import uploadIcon from "./images/Vector.svg";
import f3 from './images/f3.jpg'
import f1 from './images/f1.jpg'
import f2 from './images/f2.jpg'
import f4 from './images/f4.jpg'
import f5 from './images/f5.jpg'
import f6 from './images/f6.jpg'
import attach from './images/icons/attach.svg'

function invitePage() {

    const userData = JSON.parse(localStorage.getItem("userData"));
    console.log(userData);

    const search = "";


    const [newUserData, setnewUserData] = useState('')

    const [invited, setInvited] = useState(null)


    const [errorr, setErrorr] = useState(null);
    const [open, setOpen] = useState(false);

    // const handelToggle = () => {
        
    //     setInvited(!invited);
    // }

    async function fetchData() {
        setOpen(true);
        try {
            const response = await axios.get(`${url}/api/showFollowers`, {
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "x-studio-token": userData.token.toString(),
                }
            });
            // localStorage.setItem("x-studio-token", response.data.token);
            localStorage.setItem("allFollowers", JSON.stringify(response.data));
            setnewUserData(JSON.parse(localStorage.getItem("allFollowers")));
            setOpen(false);


        } catch (error) {
            setErrorr(error);
            console.log(`the Error is here ${errorr}`);
            setOpen(false);

        }
    }

    useEffect(() => {
        if (localStorage.getItem("x-studio-token") !== null && localStorage.getItem("x-studio-token") !== "") {

            fetchData();


        }
        else {
            console.log("not equals");
        }
    }, []);


    if (newUserData === '') {
        return (

            <>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
                <div className={styles.main_yellow}>
                    <div className={styles.left_side_menu}>
                        <div className={styles.studio_title}>
                            <img src={userData.profilePic} alt="profile-pic" />
                            <span className={styles.studio_name}>Studio</span>
                        </div>
                        <div className={styles.main_menu}>
                            <Link style={{ textDecoration: "none" }} to="/dashboard" className={styles.dashboard_selected}>
                                <div className={styles.main_menu_content}>
                                    <img src={chartIcon} alt="icons" /><span> Dashboard</span>
                                </div>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/inbox" className={styles.inbox_selected}>
                                <div className={styles.main_menu_content}>
                                    <img src={chatIcon} alt="icons" /><span> Inbox</span>
                                </div>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/job" className={styles.jobs_selected}>
                                <div className={styles.main_menu_content}>
                                    <img src={workIcon} alt="icons" /><span> Jobs</span>
                                </div>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/connection" className={styles.connection_selected}>
                                <div className={styles.main_menu_content}>
                                    <img src={users3} alt="icons" /><span> Connections</span>
                                </div>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/invite" className={styles.invite_selected}>
                                <div className={styles.main_menu_content}>
                                    <img src={addUserIcon} alt="icons" /><span> Invite</span>
                                </div>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/profile" className={styles.profile_selected}>
                                <div className={styles.main_menu_content}>
                                    <img src={profileIcon} alt="icons" /><span> Profile</span>
                                </div>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/interview" className={styles.schedule_selected}>
                                <div className={styles.main_menu_content}>
                                    <img src={calendarIcon} alt="icons" /><span> Schedule
                                        Interview</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.main_white}>
                    <div className={styles.top_div}>
                        <input type="text" placeholder="Search here..." />
                        <button className={styles.notification_button}><img src={notificationBtn} alt="notification" /></button>
                        <button className={styles.setting_button}><img src={settingBtn} alt="setting" /></button>
                        {/* <button className={styles.filter_button}><img src={filterBtn} alt="filter" /></button> */}
                    </div>

                    <section className={styles.bookmark}>
                        <h1>
                            Invite Friends
                        </h1>

                        <div className={styles.cards}>
                            {/* <div className={styles.card}>
                    <img src="/images/f3.jpg" className={styles.face_icon} alt="face-profile" />
                    <span>Annette Black</span>
                    <img src={tickIcon} alt="tick-icon" />

                </div>
                <div className={styles.card}>
                    <img src="/images/f2.jpg" className={styles.face_icon} alt="face-profile" />
                    <span>Christine Cole</span>
                    <img src={tickIcon} alt="tick-icon" />
                </div>
                <div className={styles.card}>
                    <img src="/images/f5.jpg" className={styles.face_icon} alt="face-profile" />
                    <span>Tami Thompson</span>
                    <img src={tickIcon} alt="tick-icon" />
                </div>
                <div className={styles.card}>
                    <img src="/images/f6.jpg" className={styles.face_icon} alt="face-profile" />
                    <span>Cory Lang</span>
                    <img src={tickIcon} alt="tick-icon" />
                </div>
                <div className={styles.card}>
                    <img src="/images/f1.jpg" className={styles.face_icon} alt="face-profile" />
                    <span>Annette Black</span>
                    <img src={tickIcon} alt="tick-icon" />
                </div>
                <div className={styles.card}>
                    <img src="/images/f3.jpg" className={styles.face_icon} alt="face-profile" />
                    <span>Miss Bert Labadie</span>
                    <img src={tickIcon} alt="tick-icon" />
                </div>
                <div className={styles.card}>
                    <img src="/images/f3.jpg" className={styles.face_icon} alt="face-profile" />
                    <span>Miss Bert Labadie</span>
                    <img src={tickIcon} alt="tick-icon" />
                </div>
                <div className={styles.card}>
                    <img src="/images/f3.jpg" className={styles.face_icon} alt="face-profile" />
                    <span>Miss Bert Labadie</span>
                    <img src={tickIcon} alt="tick-icon" />
                </div>
                <div className={styles.card}>
                    <img src="/images/f3.jpg" className={styles.face_icon} alt="face-profile" />
                    <span>Miss Bert Labadie</span>
                    <img src={tickIcon} alt="tick-icon" />
                </div> */}
                        </div>
                    </section>
                </div>

            </>
        );
    }

    else {
        console.log(newUserData);
        return (
            <>
                <div className={styles.main_yellow}>
                    <div className={styles.left_side_menu}>
                        <div className={styles.studio_title}>
                            <img src={userData.profilePic} alt="profile-pic" />
                            <span className={styles.studio_name}>Studio</span>
                        </div>
                        <div className={styles.main_menu}>
                            <Link style={{ textDecoration: "none" }} to="/dashboard" className={styles.dashboard_selected}>
                                <div className={styles.main_menu_content}>
                                    <img src={chartIcon} alt="icons" /><span> Dashboard</span>
                                </div>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/inbox" className={styles.inbox_selected}>
                                <div className={styles.main_menu_content}>
                                    <img src={chatIcon} alt="icons" /><span> Inbox</span>
                                </div>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/job" className={styles.jobs_selected}>
                                <div className={styles.main_menu_content}>
                                    <img src={workIcon} alt="icons" /><span> Jobs</span>
                                </div>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/connection" className={styles.connection_selected}>
                                <div className={styles.main_menu_content}>
                                    <img src={users3} alt="icons" /><span> Connections</span>
                                </div>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/invite" className={styles.invite_selected}>
                                <div className={styles.main_menu_content}>
                                    <img src={addUserIcon} alt="icons" /><span> Invite</span>
                                </div>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/profile" className={styles.profile_selected}>
                                <div className={styles.main_menu_content}>
                                    <img src={profileIcon} alt="icons" /><span> Profile</span>
                                </div>
                            </Link>
                            <Link style={{ textDecoration: "none" }} to="/interview" className={styles.schedule_selected}>
                                <div className={styles.main_menu_content}>
                                    <img src={calendarIcon} alt="icons" /><span> Schedule
                                        Interview</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.main_white}>
                    <div className={styles.top_div}>
                        <input type="text" placeholder="Search here..." />
                        <button className={styles.notification_button}><img src={notificationBtn} alt="notification" /></button>
                        <button className={styles.setting_button}><img src={settingBtn} alt="setting" /></button>
                        {/* <button className={styles.filter_button}><img src={filterBtn} alt="filter" /></button> */}
                    </div>

                    <section className={styles.bookmark}>
                        <h1>
                            Invite Friends
                        </h1>

                        <div className={styles.cards}>
                            {newUserData.followers.map((data, index) =>
                                <div className={styles.card} key={index} >
                                    <img src={data.profilePic.length === 0 ? blackImage : data.profilePic} className={styles.face_icon}  alt="face-profile" />
                                    <span >{data.fname}</span>
                                    {invited === index ? <img src={tickIcon}  style={{cursor: "pointer"}} onClick={() => setInvited(index)} alt="tick-icon" /> : <p style={{ color: "green", cursor : "pointer" }}  onClick={() => setInvited(index)}>Invite</p>}



                                </div>
                            )}
                            
                        </div>
                    </section>
                </div>

            </>
        )
    }
}

export default invitePage