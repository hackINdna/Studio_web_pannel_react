import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom';
import styles from './css/postJob.module.css';

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
import uploadIcon from "./images/Vector.svg";
import f3 from './images/f3.jpg'
import f1 from './images/f1.jpg'
import f2 from './images/f2.jpg'
import f4 from './images/f4.jpg'
import f5 from './images/f5.jpg'
import f6 from './images/f6.jpg'
import attach from './images/icons/attach.svg'

function postJobPage() {

    // const handelImage = (event)=>{
    //     event.target.
    //     inputImg.click();
    //     console.log("helloooo");

    // }

    

    // function doSomething(){
    //     let input_image = document.getElementsByClassName("upload-button");
    //     console.log(input_image);
    //     input_image[0].addEventListener("click", function uploadPhoto() {
    //         let inputImg = document.getElementById("files");
    //         inputImg.click();
    //     });
    //     input_image[1].addEventListener("click", function uploadPhoto() {
    //         let inputImg = document.getElementById("files1");
    //         inputImg.click();
    //     });
    //     console.log("hi");
    // }

    const inputFile = useRef(null);
    const inputFile1 = useRef(null);

    const handelClick = ()=> {
        inputFile.current.click();
    }
    const handelClick1 = ()=> {
        inputFile1.current.click();
    }



    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);


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
                <Link to="/dashboard" className={styles.dashboard_selected}>
                    <div className={styles.main_menu_content}>
                        <img src={chartIcon} alt="icons" /><span> Dashboard</span>
                    </div>
                </Link>
                <Link to="/inbox" className={styles.inbox_selected}>
                    <div className={styles.main_menu_content}>
                        <img src={chatIcon} alt="icons" /><span> Inbox</span>
                    </div>
                </Link>
                <Link to="/job" className={styles.jobs_selected}>
                    <div className={styles.main_menu_content}>
                        <img src={workIcon} alt="icons" /><span> Jobs</span>
                    </div>
                </Link>
                <Link to="/connection" className={styles.connection_selected}>
                    <div className={styles.main_menu_content}>
                        <img src={users3} alt="icons" /><span> Connections</span>
                    </div>
                </Link>
                <Link to="/invite" className={styles.invite_selected}>
                    <div className={styles.main_menu_content}>
                        <img src={addUserIcon} alt="icons" /><span> Invite</span>
                    </div>
                </Link>
                <Link to="/profile" className={styles.profile_selected}>
                    <div className={styles.main_menu_content}>
                        <img src={profileIcon} alt="icons" /><span> Profile</span>
                    </div>
                </Link>
                <Link to="/interview" className={styles.schedule_selected}>
                    <div className={styles.main_menu_content}>
                        <img src={calendarIcon} alt="icons" /><span> Schedule
                            Interview</span>
                    </div>
                </Link>
            </div>
        </div>
    </div>
    <div className={styles.main_white}>
        <header>
            <div className={styles.add_details}>
                <span>Add Details</span>
            </div>
            <div className={styles.head_icons}>
                <button className={styles.notification_button}><img src={notificationBtn}
                        alt="notification" /></button>
                <button className={styles.setting_button}><img src={settingBtn} alt="setting" /></button>
            </div>
        </header>
        <hr />

        <div className={styles.input_divs}>
            <div className={styles.section_1}>
                <div id={styles.section_1_1}>
                    <label>Studio Name</label>
                    <input type="text" placeholder="Enter studio name" />
                </div>
                <div id={styles.section_1_1}>
                    <label>Job Type</label>
                    <input type="text" placeholder="Enter Job Type" />
                </div>
                <div id={styles.section_1_1}>
                    <label>Social Media Link</label>
                    <input type="text" placeholder="Add any social media link" />
                </div>
            </div>
            <div className={styles.section_2}>
                <div id={styles.section_2_1}>
                    <label>Description</label>
                    <input type="text" placeholder="Add Description" />
                    <span>*Maximum word limit is 1200-1500</span>
                </div>
                <div id={styles.section_2_1}>
                    <label>Production Detail</label>
                    <input type="text" placeholder="Add production detail" />
                    <span>*Maximum word limit is 1200-1500</span>
                </div>
            </div>
            <div className={styles.section_3}>
                <div id={styles.section_3_1}>
                    <label>Date</label>
                    <input type="text" placeholder="Enter Date" />

                </div>
                <div id={styles.section_3_1}>
                    <label>Location</label>
                    <input type="text" placeholder="Enter Location" />
                </div>
                <div id={styles.section_3_1}>
                    <label>Contact no.</label>
                    <input type="text" placeholder="Enter Contact no." />
                </div>
                <div id={styles.section_3_1_key}>
                    <label>Key Details</label>
                    <input type="text" placeholder="Enter Key Detail" />
                    <span>*Maximum word limit is 200-500</span>
                </div>
            </div>

        </div>
        <hr />

        <div className={styles.upload_section}>
            <div className={styles.banner_upload}>
                <span>Banner/Photos(1)</span>
                <div className={styles.upload_button} onClick={handelClick}  id={styles.upload}>
                    <input type="file" ref={inputFile} style={{display: "none"}}  id={styles.files} />
                    <img src={uploadIcon} alt="picture upload" />
                    <span>Upload banner/photo</span>
                </div>
            </div>
            <div className={styles.banner_upload}>
                <span>Banner/Photos(2)</span>
                <div className={styles.upload_button} onClick={handelClick1} id={styles.upload}>
                    <input type="file" ref={inputFile1} style={{display: "none"}}  id={styles.files1} />
                    <img src={uploadIcon} alt="picture upload" />
                    <span>Upload banner/photo</span>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default postJobPage