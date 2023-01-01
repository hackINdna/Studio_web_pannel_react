import React, { useState, useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import axios from 'axios';
import styles from '../components/css/dashboard.module.css'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';

import { db } from './firebaseSetup';
import { collection, doc, getDocs, where, query } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import notificationBtn from './images/icons/notification.svg'
import settingBtn from './images/icons/setting-icon.svg'
import chartIcon from './images/icons/Chart.svg'
import chatIcon from './images/icons/Chat.svg'
import workIcon from './images/icons/Work.svg'
import users3 from './images/icons/users3.svg'
import addUserIcon from './images/icons/Add User.svg'
import profileIcon from './images/icons/Profile.svg'
import calendarIcon from './images/icons/Calendar.svg'
import blackImage from './images/blackImage.jpg'
import graphImage from './images/graph_image.png'
import circleImage from './images/circle.svg'

import { url } from '../constData'

import { Link } from 'react-router-dom';

function DashboardPage() {

    const auth = getAuth();


    const [fuser, setFuser] = useState([]);
    const userCollectionRef = collection(db, "users")



    console.log(url);
    const userData = JSON.parse(localStorage.getItem("userData"));


    //   const navigate = useNavigate();

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
            localStorage.setItem("x-studio-token", response.data.token);
            localStorage.setItem("userDataNew", JSON.stringify(response.data));
            console.log(JSON.parse(localStorage.getItem("userDataNew"))._id);
            await getFuserData();
            setnewUserData(JSON.parse(localStorage.getItem("userDataNew")));
            setOpen(false);


        } catch (error) {
            setErrorr(error);
            console.log(`the Error is here ${errorr}`);
            setOpen(false);
        }
    }

    const getFuserData = async () => {
        const userDataQuery = query(userCollectionRef, where("uid", "==", JSON.parse(localStorage.getItem("userDataNew"))._id))
        const data = await getDocs(userDataQuery);
        console.log(data);
        setFuser(data.docs[0].data());
    };



    useEffect(() => {
        if (localStorage.getItem("x-studio-token") !== null && localStorage.getItem("x-studio-token") !== "") {

            fetchData();

        }
        else {
            console.log("not equals");
        }
    }, []);





    if (newUserData.length === 0) {
        console.log(`fuser is empty -> ${fuser.length}`);
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
                            <Link to="/dashboard" className={styles.dashboard_selected} >
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
                            <Link to="/profile" className="profile-selected">
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
                    <div className={styles.main_white_left}>
                        <div className={styles.top_div}>
                            <input type="text" placeholder="Search here..." />
                            <button className={styles.notification_button}><img src={notificationBtn}
                                alt="notification" /></button>
                            <button className={styles.setting_button}><img src={settingBtn} alt="setting" /></button>
                        </div>


                    </div>

                </div>
            </>
        );
    }
    else {
        console.log(newUserData);
        console.log(fuser.notification);
        const data = [
            { name: 'Total Applicants', students: newUserData.totalApplicants },
            { name: 'Total Jobs', students: newUserData.post.length },
            // { name: 'Geek-i-knack', students: 200 },
            // { name: 'Geek-o-mania', students: 1000 }
        ];
        return (
            <>
                <div className={styles.main_yellow}>
                    <div className={styles.left_side_menu}>
                        <div className={styles.studio_title}>
                            <img src={newUserData.profilePic} alt="profile-pic" />
                            <span className={styles.studio_name}>Studio</span>
                        </div>
                        <div className={styles.main_menu}>
                            <Link to="/dashboard" className={styles.dashboard_selected} >
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
                            <Link to="/profile" className="profile-selected">
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
                    <div className={styles.main_white_left}>
                        <div className={styles.top_div}>
                            <input type="text" placeholder="Search here..." />
                            <button className={styles.notification_button}><img src={notificationBtn}
                                alt="notification" /></button>
                            <button className={styles.setting_button}><img src={settingBtn} alt="setting" /></button>
                        </div>

                        <div className={styles.graph_area}>
                            {/* <img src={graphImage} alt="" className={styles.graph_image} /> */}
                            <BarChart width={800} height={400} data={data}>
                                <Bar dataKey="students" fill="black" />
                                <CartesianGrid stroke="#ccc" />
                                <XAxis dataKey="name" />
                                <YAxis />
                            </BarChart>
                        </div>
                        <div className={styles.bottom_left_div}>
                            <div className={styles.gridd}>
                                <div className={styles.gridd_sub_div}>
                                    <span>Posted Jobs</span>
                                    <p>{newUserData.post.length}</p>
                                </div>
                                <div className={styles.gridd_sub_div}>
                                    <span>Total Applicants</span>
                                    <p>{newUserData.totalApplicants}</p>
                                </div>
                                <div className={styles.gridd_sub_div}>
                                    <span>Shortlisted Applicants</span>
                                    <p>{newUserData.totalShortlisted}</p>
                                </div>
                                <div className={styles.gridd_sub_div}>
                                    <span>Followers</span>
                                    <p>{newUserData.followers.length}</p>
                                </div>
                                <div className={styles.gridd_sub_div}>
                                    <span>Page View</span>
                                    <p>0</p>
                                </div>
                                <div className={styles.gridd_sub_div}>
                                    <span>Accepted Applicants</span>
                                    <p>{newUserData.totalAccepted}</p>
                                </div>
                            </div>
                            <div className={styles.percent_div}>
                                <span className={styles.percent_span_resp}>Application in progress</span>

                                {/* //TODO: add a circular progress indicator  */}
                                <div className={styles.circleImage}>
                                    {/* <img src={circleImage} alt="percent-circle" /> */}
                                    <span className={styles.eighty}>{((parseInt(newUserData.totalApplicants) - parseInt(newUserData.totalShortlisted) - parseInt(newUserData.totalAccepted)) / parseInt(newUserData.totalApplicants)) * 100}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.main_white_right}>
                        <div className={styles.dropdown_image}>
                            <div className={styles.content}>
                                <img src={newUserData.profilePic} alt="profile-pic" />
                                <span>{newUserData.fname}</span>
                            </div>
                        </div>
                        <div className={styles.studio_details}>
                            <div className={styles.studio_details_divs}>
                                <span>Studio</span>
                                <p>{newUserData.fname}</p>
                            </div>
                            <div className={styles.studio_details_divs}>
                                <span>Location</span>
                                <p>{newUserData.location.length === 0 ? "Empty" : newUserData.location}</p>
                            </div>
                            <div className={styles.studio_details_divs}>
                                <span>Features</span>
                                <p>{newUserData.projectDesc.length === 0 ? "Empty" : newUserData.projectDesc.substring(0, 95)}</p>
                            </div>
                        </div>
                        {/* //TODO: Add notification with firebase at last */}
                        <h3 className={styles.hClass}>Notification</h3>
                        {fuser.notification.length === 0 ? <></> : <><div className={styles.notification_section}>
                            <span>{fuser.notification[0].split("_")[0]}</span>
                        </div>
                            <div className={styles.notification_section}>
                                <span>{fuser.notification[1].split("_")[0]}</span>
                            </div>
                            <div className={styles.notification_section}>
                                <span>{fuser.notification[2].split("_")[0]}</span>
                            </div></>}
                    </div>

                </div>
            </>
        )
    }

}

export default DashboardPage