import React from 'react'
import { Link } from 'react-router-dom';
import styles from './css/jobDescriptionPage.module.css';

import chartIcon from './images/icons/Chart.svg'
import chatIcon from './images/icons/Chat.svg'
import workIcon from './images/icons/Work.svg'
import users3 from './images/icons/users3.svg'
import addUserIcon from './images/icons/Add User.svg'
import profileIcon from './images/icons/Profile.svg'
import calendarIcon from './images/icons/Calendar.svg'
import notificationBtn from './images/icons/notification.svg'
import crossBtn1 from "./images/icons/cross1.svg"
import crossBtn from "./images/icons/cross.svg"
import searchIcon from "./images/icons/search.svg"
import threeDot from "./images/icons/threeDot.svg"
import settingBtn from './images/icons/setting-icon.svg'
import filterBtn from "./images/icons/filter-icon.svg"
import downArrow from "./images/icons/down-arrow.svg";
import f3 from './images/f3.jpg'
import f1 from './images/f1.jpg'
import f2 from './images/f2.jpg'
import f4 from './images/f4.jpg'
import f5 from './images/f5.jpg'
import f6 from './images/f6.jpg'
import attach from './images/icons/attach.svg'

function promotePage() {

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
                <Link style={{textDecoration : "none"}} to="/dashboard" className={styles.dashboard_selected}>
                    <div className={styles.main_menu_content}>
                        <img src={chartIcon} alt="icons" /><span> Dashboard</span>
                    </div>
                </Link>
                <Link style={{textDecoration : "none"}} to="/inbox" className={styles.inbox_selected}>
                    <div className={styles.main_menu_content}>
                        <img src={chatIcon} alt="icons" /><span> Inbox</span>
                    </div>
                </Link>
                <Link style={{textDecoration : "none"}} to="/job" className={styles.jobs_selected}>
                    <div className={styles.main_menu_content}>
                        <img src={workIcon} alt="icons" /><span> Jobs</span>
                    </div>
                </Link>
                <Link style={{textDecoration : "none"}} to="/connection" className={styles.connection_selected}>
                    <div className={styles.main_menu_content}>
                        <img src={users3} alt="icons" /><span> Connections</span>
                    </div>
                </Link>
                <Link style={{textDecoration : "none"}} to="/invite" className={styles.invite_selected}>
                    <div className={styles.main_menu_content}>
                        <img src={addUserIcon} alt="icons" /><span> Invite</span>
                    </div>
                </Link>
                <Link style={{textDecoration : "none"}} to="/profile" className={styles.profile_selected}>
                    <div className={styles.main_menu_content}>
                        <img src={profileIcon} alt="icons" /><span> Profile</span>
                    </div>
                </Link>
                <Link style={{textDecoration : "none"}} to="/interview" className={styles.schedule_selected}>
                    <div className={styles.main_menu_content}>
                        <img src={calendarIcon} alt="icons" /><span> Schedule
                            Interview</span>
                    </div>
                </Link>
            </div>
        </div>
    </div>
    <div className={styles.main_white}>
        <div className={styles.left}>
            <section className={styles.left_first}>
                <div className={styles.left_top}>
                    <img src={crossBtn} alt="cross" />
                    <button className={styles.edit_btn}>Edit</button>
                </div>
                <div className={styles.designation_div}>
                    <h2>Designation</h2>
                    <img src={threeDot} id={styles.three_dot} alt="three-dot" />
                </div>
                <div className={styles.shortlist_option} id={styles.shortlist_option}>
                    <span>Report</span>
                    <hr />
                    <span>Share</span>
                    <hr />
                </div>
                <div className={styles.left_studio_details}>
                    <img src={userData.profilePic} alt="profile-image" />
                    <div className={styles.left_studio_text}>
                        <span>{userData.fname}</span>
                        <span>{userData.location.length == 0 ? "" : userData.location}</span>
                    </div>
                </div>
                <div className={styles.posted_details}>
                    <span>Posted on 02-06-22</span>
                    <span>200 applicants</span>
                    <span>Expires on: 24-07-22</span>
                </div>
                <div className={styles.job_main_points}>
                    <ul>
                        <li><span>Job related main points</span></li>
                        <li><span>Job related main points</span></li>
                        <li><span>Job related main points</span></li>
                    </ul>
                </div>
            </section>
            <hr />
            <section className={styles.left_second}>
                <h3>Job Description</h3>
                <div className={styles.desc_details}>
                    <span>Role: Role of the Job</span>
                    <span>Required Skills: Skills</span>
                    <span>Location: Job Location</span>
                    <span>Experience: 2 year</span>
                </div>
                <div className={styles.job_desc_desc}>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, adipisci officiis dolores
                        voluptates eum ab ipsam quasi exercitationem fuga! Aperiam alias sint nulla excepturi! Odio
                        vitae reiciendis doloribus! Velit mollitia officia eius in. Sed ipsam voluptate minus iure fugit
                        esse, quaerat obcaecati maxime odit architecto dolore nostrum ipsa totam quisquam!Lorem ipsum
                        dolor sit, amet consectetur adipisicing elit. Aperiam, adipisci officiis dolores
                        voluptates eum ab ipsam quasi exercitationem fuga! Aperiam alias sint nulla excepturi! Odio
                        vitae reiciendis doloribus! Velit mollitia officia eius in. Sed ipsam voluptate minus iure fugit
                        esse, quaerat obcaecati maxime odit architecto dolore nostrum ipsa totam quisquam!
                    </span>
                </div>
            </section>
            <hr />
            <section className={styles.left_third}>
                <h3>Production Detail</h3>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit exercitationem minima consectetur
                    deserunt doloribus doloremque eveniet harum. Cupiditate eveniet debitis nam! Dolores perferendis
                    distinctio quo dolorum unde atque odit aspernatur?
                </span>
            </section>
        </div>
        <div className={styles.right}>
            <section className={styles.right_first}>
                <div className={styles.search_div}>
                    <img src={searchIcon} alt="search-icon" />
                    <input type="text" placeholder="Search here..." />
                    <img src={crossBtn1} alt="cross-icon" />
                </div>
            </section>
            <section className={styles.right_second}>
                <div className={styles.buttons_area}>
                    <button className={styles.notification_button}><img src={notificationBtn}
                            alt="notification-icon" /></button>
                    <button className={styles.setting_button}><img src={settingBtn}
                            alt="setting-icon" /></button>
                    <button className={styles.filter_button}><img src={filterBtn} alt="filter-icon" /></button>
                </div>
            </section>
            <section className={styles.right_third}>
                <div className={styles.box}>
                    <div className={styles.box_top}>
                        <span>Chirographer</span>
                        <img src="/images/f4.jpg" alt="profile-icon" />
                    </div>
                    <h3>$17,000-$22,000</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quia, cumque sapiente
                        voluptate unde saepe quis labore possimus inventore voluptatem tenetur repudiandae quidem?
                    </p>
                    <Link style={{textDecoration : "none"}} to="/job-description"><button className={styles.promote_btn}>Promote</button></Link>
                </div>
                <div className={styles.box}>
                    <div className={styles.box_top}>
                        <span>Chirographer</span>
                        <img src="/images/f4.jpg" alt="profile-icon" />
                    </div>
                    <h3>$17,000-$22,000</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quia, cumque sapiente
                        voluptate unde saepe quis labore possimus inventore voluptatem tenetur repudiandae quidem?
                    </p>
                    <Link style={{textDecoration : "none"}} to="/job-description"><button className={styles.promote_btn}>Promote</button></Link>
                </div>
                <div className={styles.box}>
                    <div className={styles.box_top}>
                        <span>Chirographer</span>
                        <img src="/images/f4.jpg" alt="profile-icon" />
                    </div>
                    <h3>$17,000-$22,000</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quia, cumque sapiente
                        voluptate unde saepe quis labore possimus inventore voluptatem tenetur repudiandae quidem?
                    </p>
                    <Link style={{textDecoration : "none"}} to="/job-description"><button className={styles.promote_btn}>Promote</button></Link>
                </div>
                <div className={styles.box}>
                    <div className={styles.box_top}>
                        <span>Chirographer</span>
                        <img src="/images/f4.jpg" alt="profile-icon" />
                    </div>
                    <h3>$17,000-$22,000</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quia, cumque sapiente
                        voluptate unde saepe quis labore possimus inventore voluptatem tenetur repudiandae quidem?
                    </p>
                    <Link style={{textDecoration : "none"}} to="/job-description"><button className={styles.promote_btn}>Promote</button></Link>
                </div>
                <div className={styles.box}>
                    <div className={styles.box_top}>
                        <span>Chirographer</span>
                        <img src="/images/f4.jpg" alt="profile-icon" />
                    </div>
                    <h3>$17,000-$22,000</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quia, cumque sapiente
                        voluptate unde saepe quis labore possimus inventore voluptatem tenetur repudiandae quidem?
                    </p>
                    <Link style={{textDecoration : "none"}} to="/job-description"><button className={styles.promote_btn}>Promote</button></Link>
                </div>
                <div className={styles.box}>
                    <div className={styles.box_top}>
                        <span>Chirographer</span>
                        <img src="/images/f4.jpg" alt="profile-icon" />
                    </div>
                    <h3>$17,000-$22,000</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quia, cumque sapiente
                        voluptate unde saepe quis labore possimus inventore voluptatem tenetur repudiandae quidem?
                    </p>
                    <Link style={{textDecoration : "none"}} to="/job-description"><button className={styles.promote_btn}>Promote</button></Link>
                </div>
            </section>
        </div>
    </div>

    </>
  )
}

export default promotePage