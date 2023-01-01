import React from 'react'
import { Link } from 'react-router-dom';
import styles from './css/interview.module.css';

import chartIcon from './images/icons/Chart.svg'
import chatIcon from './images/icons/Chat.svg'
import workIcon from './images/icons/Work.svg'
import users3 from './images/icons/users3.svg'
import addUserIcon from './images/icons/Add User.svg'
import profileIcon from './images/icons/Profile.svg'
import calendarIcon from './images/icons/Calendar.svg'
import editIcon from "./images/icons/edit.svg"
import verifyIcon from "./images/icons/verify.svg"
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

function interviewPage() {

    const userData = JSON.parse(localStorage.getItem("userData"));
    console.log(userData);
  return (
    <>
    <div className={styles.main_yellow}>
        <div className={styles.left_side_menu}>
            <div className={styles.studio_title}>
                <img src={userData.profilePic} alt="profile-pic" />
                <span className={styles.studio_name}>Studio</span>
            </div>
            <div className={styles.main_menu}>
                <Link style={{textDecoration: "none"}} to="/dashboard" className={styles.dashboard_selected}>
                    <div className={styles.main_menu_content}>
                        <img src={chartIcon} alt="icons" /><span> Dashboard</span>
                    </div>
                </Link>
                <Link style={{textDecoration: "none"}} to="/inbox" className={styles.inbox_selected}>
                    <div className={styles.main_menu_content}>
                        <img src={chatIcon} alt="icons" /><span> Inbox</span>
                    </div>
                </Link>
                <Link style={{textDecoration: "none"}} to="/job" className={styles.jobs_selected}>
                    <div className={styles.main_menu_content}>
                        <img src={workIcon} alt="icons" /><span> Jobs</span>
                    </div>
                </Link>
                <Link style={{textDecoration: "none"}} to="/connection" className={styles.connection_selected}>
                    <div className={styles.main_menu_content}>
                        <img src={users3} alt="icons" /><span> Connections</span>
                    </div>
                </Link>
                <Link style={{textDecoration: "none"}} to="/invite" className={styles.invite_selected}>
                    <div className={styles.main_menu_content}>
                        <img src={addUserIcon} alt="icons" /><span> Invite</span>
                    </div>
                </Link>
                <Link style={{textDecoration: "none"}} to="/profile" className={styles.profile_selected}>
                    <div className={styles.main_menu_content}>
                        <img src={profileIcon} alt="icons" /><span> Profile</span>
                    </div>
                </Link>
                <Link style={{textDecoration: "none"}} to="/interview" className={styles.schedule_selected}>
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
        <div className={styles.bottom_div}>
            <div className={styles.interview_detail}>
                <img src="/images/f5.jpg" alt="face-icon" />
                <span className={styles.main_text}>Mi volutpat cursus porttitor mollis mollis in et ultricies. Id quis id
                    quis</span>
                <span className={styles.time_date}>10:00</span>
                <span className={styles.time_date}>Fri, Sep 12, 2022</span>
            </div>
            <div className={styles.interview_detail}>
                <img src="/images/f3.jpg" alt="face-icon" />
                <span className={styles.main_text}>Mi volutpat cursus porttitor mollis mollis in et ultricies. Id quis id
                    quis</span>
                <span className={styles.time_date}>15:00</span>
                <span className={styles.time_date}>Fri, Sep 12, 2022</span>
            </div>
            <div className={styles.interview_detail}>
                <img src="/images/f6.jpg" alt="face-icon" />
                <span className={styles.main_text}>Mi volutpat cursus porttitor mollis mollis in et ultricies. Id quis id
                    quis</span>
                <span className={styles.time_date}>10:00</span>
                <span className={styles.time_date}>Fri, Sep 12, 2022</span>
            </div>
            <div className={styles.interview_detail}>
                <img src="/images/f1.jpg" alt="face-icon" />
                <span className={styles.main_text}>Mi volutpat cursus porttitor mollis mollis in et ultricies. Id quis id
                    quis</span>
                <span className={styles.time_date}>11:00</span>
                <span className={styles.time_date}>Fri, Sep 12, 2022</span>
            </div>
            <div className={styles.interview_detail}>
                <img src="/images/f2.jpg" alt="face-icon" />
                <span className={styles.main_text}>Mi volutpat cursus porttitor mollis mollis in et ultricies. Id quis id
                    quis</span>
                <span className={styles.time_date}>10:00</span>
                <span className={styles.time_date}>Fri, Sep 12, 2022</span>
            </div>

        </div>
    </div>
    </>
  )
}

export default interviewPage