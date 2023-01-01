import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { url } from '../constData'
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import styles from './css/jobsShort.module.css';

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
import downArrow from "./images/icons/down-arrow.svg";
import innovationImage from "./images/innovation.svg";
import f3 from './images/f3.jpg'
import f1 from './images/f1.jpg'
import f2 from './images/f2.jpg'
import f4 from './images/f4.jpg'
import f5 from './images/f5.jpg'
import f6 from './images/f6.jpg'
import attach from './images/icons/attach.svg'


function jobsShortlistedPage() {

    const userData = JSON.parse(localStorage.getItem("userData"));
    console.log(userData);

    const search = "";


    const [newUserData, setnewUserData] = useState('')


    const [errorr, setErrorr] = useState(null);
    const [open, setOpen] = useState(false);



    async function fetchData() {
        setOpen(true);
        try {
            const response = await axios.get(`${url}/api/studio/showWorkingJobs?working=shortlisted&search=${search}`, {
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "x-studio-token": userData.token.toString(),
                }
            });
            // localStorage.setItem("x-studio-token", response.data.token);
            localStorage.setItem("allJobData", JSON.stringify(response.data));
            setnewUserData(JSON.parse(localStorage.getItem("allJobData")));
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
                        <div className={styles.top_one_div}>
                            <input type="text" placeholder="Search here..." />
                            <button className={styles.notification_button}><img src={notificationBtn}
                                alt="notification-icon" /></button>
                            <button className={styles.setting_button}><img src={settingBtn} alt="setting-icon" /></button>
                            <button className={styles.filter_button}><img src={filterBtn} alt="filter-icon" /></button>
                        </div>
                        <Link style={{ textDecoration: "none" }} to="/post-job"><button className={styles.post_job}>Post Job</button></Link>
                    </div>

                    <div className={styles.main_job_section}>
                        <div className={styles.job_section_title}>

                            <div className={styles.job_option}><Link style={{ textDecoration: "none" }} to="/job"><button className={styles.job_option_btn} id={styles.all_jobs}>All
                                Jobs</button></Link></div>

                            <div className={styles.job_option}><Link style={{ textDecoration: "none" }} to="/job-applied"><button className={styles.job_option_btn}
                                id={styles.applied}>Applied</button></Link>
                            </div>

                            <div className={styles.job_option}><Link style={{ textDecoration: "none" }} to="/job-accepted"><button className={styles.job_option_btn}
                                id={styles.accepted}>Accepted</button></Link>
                            </div>

                            <div className={styles.job_option}><Link style={{ textDecoration: "none" }} to="/job-short"><button className={styles.job_option_btn} id={styles.shortlisted}>
                                Shortlisted</button></Link></div>
                        </div>

                        <div className={styles.main_content}>
                            <div className={styles.main_content_top}>
                                <span>Category</span>
                                <img src={downArrow} alt="down-arrow" />
                            </div>
                            <hr />
                            <div className={styles.job_listed}>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    else {
        console.log(newUserData[0]);
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
                        <div className={styles.top_one_div}>
                            <input type="text" placeholder="Search here..." />
                            <button className={styles.notification_button}><img src={notificationBtn}
                                alt="notification-icon" /></button>
                            <button className={styles.setting_button}><img src={settingBtn} alt="setting-icon" /></button>
                            <button className={styles.filter_button}><img src={filterBtn} alt="filter-icon" /></button>
                        </div>
                        <Link style={{ textDecoration: "none" }} to="/post-job"><button className={styles.post_job}>Post Job</button></Link>
                    </div>

                    <div className={styles.main_job_section}>
                        <div className={styles.job_section_title}>

                            <div className={styles.job_option}><Link style={{ textDecoration: "none" }} to="/job"><button className={styles.job_option_btn} id={styles.all_jobs}>All
                                Jobs</button></Link></div>

                            <div className={styles.job_option}><Link style={{ textDecoration: "none" }} to="/job-applied"><button className={styles.job_option_btn}
                                id={styles.applied}>Applied</button></Link>
                            </div>

                            <div className={styles.job_option}><Link style={{ textDecoration: "none" }} to="/job-accepted"><button className={styles.job_option_btn}
                                id={styles.accepted}>Accepted</button></Link>
                            </div>

                            <div className={styles.job_option}><Link style={{ textDecoration: "none" }} to="/job-short"><button className={styles.job_option_btn} id={styles.shortlisted}>
                                Shortlisted</button></Link></div>
                        </div>


                        {newUserData.length === 0 ? <div className={styles.main_image}>
                            <img src={innovationImage} alt="main-image" />
                            <span className={styles.text1}>No one Applied to your Jobs</span>
                            <span>Please wait till anyone apply</span>
                            {/* <Link style={{ textDecoration: "none" }} to="/post-job"><button className={styles.post_job_2}>Post Job</button></Link> */}
                        </div> : <div className={styles.main_content}>
                            <div className={styles.main_content_top}>
                                <span>Category</span>
                                <img src={downArrow} alt="down-arrow" />
                            </div>
                            <hr />
                            <div className={styles.job_listed}>
                                {newUserData.map((data) =>
                                    <div className={styles.boxes}>
                                        <div className={styles.box_top}>
                                            <span>{data.jobType}</span>
                                            <img src={data.images[0]} alt="profile-icon" />
                                        </div>
                                        {/* <h3>$14,000-$20,000</h3> */}
                                        <p>{data.description.length > 180 ? data.description.substring(0, 180) : data.description}
                                        </p>
                                        <Link style={{ textDecoration: "none" }} to="/job-description"><button className={styles.promote_btn}>Promote</button></Link>
                                    </div>
                                )}

                            </div>
                        </div>}

                    </div>
                </div>
            </>
        )
    }
}

export default jobsShortlistedPage