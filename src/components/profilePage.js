import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { url } from '../constData'
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import styles from './css/profile.module.css';

import chartIcon from './images/icons/Chart.svg'
import chatIcon from './images/icons/Chat.svg'
import workIcon from './images/icons/Work.svg'
import users3 from './images/icons/users3.svg'
import addUserIcon from './images/icons/Add User.svg'
import profileIcon from './images/icons/Profile.svg'
import calendarIcon from './images/icons/Calendar.svg'
import editIcon from "./images/icons/edit.svg"
import verifyIcon from "./images/icons/verify.svg"
import blackImage from './images/blackImage.jpg'
import notificationBtn from './images/icons/notification.svg'
import settingBtn from './images/icons/setting-icon.svg'
import filterBtn from "./images/icons/filter-icon.svg"
import downArrow from "./images/icons/down-arrow.svg";
import uploadIcon from "./images/Vector.svg";
import f3 from './images/f3.jpg'
import f1 from './images/f1.jpg'
import f2 from './images/f2.jpg'
import f4 from './images/f4.jpg'
import f5 from './images/f5.jpg'
import f6 from './images/f6.jpg'
import attach from './images/icons/attach.svg'

function profilePage() {

    const userData = JSON.parse(localStorage.getItem("userData"));
    console.log(userData);

    const search = "";


    const [newUserData, setnewUserData] = useState('')


    const [errorr, setErrorr] = useState(null);
    const [open, setOpen] = useState(false);



    async function fetchData() {
        setOpen(true);
        try {
            const response = await axios.get(`${url}/api/getStudioData`, {
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "x-studio-token": userData.token.toString(),
                }
            });
            // localStorage.setItem("x-studio-token", response.data.token);
            localStorage.setItem("allUserData", JSON.stringify(response.data));
            setnewUserData(JSON.parse(localStorage.getItem("allUserData")));
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


    if (newUserData === "") {
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
                            <img src={blackImage} alt="profile-pic" />
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
                    <div className={styles.profile_details}>

                    </div>
                    <section className={styles.project_detail}>
                        <h2>
                            Projects
                        </h2>
                        
                    </section>
                </div>

            </>
        );
    }
    else {

        return (
            <>
                <div className={styles.main_yellow}>
                    <div className={styles.left_side_menu}>
                        <div className={styles.studio_title}>
                            <img src={newUserData.profilePic} alt="profile-pic" />
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
                    <div className={styles.profile_details}>
                        <div className={styles.image_div}>
                            <img src={newUserData.profilePic} alt="face-icon" />
                        </div>
                        <div className={styles.studio_detail_div}>
                            <div className={styles.studio_name_main}>
                                <div className={styles.name}>
                                    <h1>{newUserData.fname}</h1>
                                    <img src={verifyIcon} alt="verify-icon" />
                                </div>
                                <img src={editIcon} alt="edit-icon" />
                            </div>
                            <h3>{newUserData.location.length === 0 ? "Empty" : newUserData.location}</h3>
                            <div className={styles.follow}>
                                <div className={styles.followers}>
                                    <h4>Followers</h4>
                                    <h3>{newUserData.followers.length}</h3>
                                </div>
                                <div className={styles.views}>
                                    <h4>Views</h4>
                                    <h3>0</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className={styles.project_detail}>
                        <h2>
                            Projects
                        </h2>
                        <pre>
                            {newUserData.projectDesc.length === 0 ? "Empty" : newUserData.projectDesc}

                        </pre>
                    </section>
                </div>

            </>
        )
    }
}

export default profilePage