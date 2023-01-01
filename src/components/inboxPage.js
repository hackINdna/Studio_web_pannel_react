import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import axios from 'axios';
import styles from './css/inboxStyle.module.css'
// import './css/inbox-resp.css'

import { db } from './firebaseSetup';
import { collection, doc, getDoc, getDocs, where, query, addDoc, orderBy } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useCollectionData } from 'react-firebase-hooks/firestore';

import blackImage from './images/blackImage.jpg'

import chartIcon from './images/icons/Chart.svg'
import chatIcon from './images/icons/Chat.svg'
import workIcon from './images/icons/Work.svg'
import users3 from './images/icons/users3.svg'
import addUserIcon from './images/icons/Add User.svg'
import profileIcon from './images/icons/Profile.svg'
import calendarIcon from './images/icons/Calendar.svg'
import f3 from './images/f3.jpg'
import f1 from './images/f1.jpg'
import f2 from './images/f2.jpg'
import f4 from './images/f4.jpg'
import f5 from './images/f5.jpg'
import f6 from './images/f6.jpg'
import attach from './images/icons/attach.svg'

function inboxPage() {



    const auth = getAuth();


    const [fuser, setFuser] = useState([]);
    const [message, setMessage] = useState([]);
    let msgArray = [];

    const [inputValue, setInputValue] = useState('')
    const [chatUser, setChatUser] = useState(null);
    let allUserProfilePic = [];
    const [allGroupData, setAllGroupData] = useState([]);
    const [newUserDetails, setNewUserDetails] = useState([]);
    let aGroupData = [];
    let nUserDetails = [];

    const ddd = useRef();

    const userCollectionRef = collection(db, "users",)
    const groupCollectionRef = collection(db, "groups")

    const [open, setOpen] = useState(false);

    const userData = JSON.parse(localStorage.getItem("userData"));
    console.log(userData);


    const getFuserData = async () => {
        setOpen(true);
        const userDataQuery = query(userCollectionRef, where("uid", "==", userData._id));
        const data = await getDocs(userDataQuery);

        console.log("here is data");
        console.log(data.docs[0].data());

        Promise.all(
            data.docs[0].data().groups.map(async (group) => {
                const groupId = group.split("_")[0];
                const groupDataQuery = query(groupCollectionRef, where("groupId", "==", groupId));
                const groupData = await getDocs((groupDataQuery));
                console.log("group data docs");
                console.log(groupData.docs[0].data());
                aGroupData.push(groupData.docs[0].data())
                console.log("inside");

            })
        ).then((result) => {
            Promise.all(
                aGroupData.map(async (group) => {
                    const newUserId = group.members[1].split("_")[0];
                    const userQuery = query(userCollectionRef, where("uid", "==", newUserId));
                    const userData = await getDocs(userQuery);
                    console.log("new user data");
                    console.log(userData.docs[0].data());
                    nUserDetails.push(userData.docs[0].data());
                })
            ).then((result) => {
                setNewUserDetails(nUserDetails);

                setAllGroupData(aGroupData);
                setFuser(data.docs[0].data());
                setOpen(false);
            }).catch((err) => {
                console.log(err);
            });


        }).catch((err) => {
            console.log(`error is ${err}`);
        });




    };


    const getMessages = async (groupId, indexx) => {
        setOpen(true);
        setChatUser(indexx);
        sessionStorage.setItem("gId", groupId);
        // event.preventDefault();

        // console.log(`event is ${event.target.}`);

        console.log(`groupId is ${groupId}`);

        const q = collection(db, "groups", groupId, "messages");
        const qq = query(q, orderBy("time"));
        const msgData = await getDocs(qq);
        console.log('msg data');
        // console.log(msgData.docs);

        Promise.all(
            msgData.docs.map((data) => {
                msgArray.push(data.data());
            })

        ).then((result) => {
            console.log("msg Array");
            console.log(msgArray);
            setMessage(msgArray);
            setOpen(false);


        }).catch((err) => {
            console.log(err);
        });
    }

    const handelSubmit = async (event) => {
        event.preventDefault();
        console.log("pressed enter");
        console.log(sessionStorage.getItem("gId"));

        const d = new Date();
        const da = d.getTime();

        const q = collection(db, "groups", sessionStorage.getItem("gId"), "messages");


        const text = inputValue.trim();

        if (text.length > 0) {
            msgArray = [];

            await addDoc(q, { sender: fuser.fullName, message: text, time: d.getTime() });
            const msgData = await getDocs(query(q, orderBy("time")));
            Promise.all(
                msgData.docs.map((data) => {
                    msgArray.push(data.data());
                })

            ).then((result) => {
                console.log("msg Array");
                console.log(msgArray);
                setMessage(msgArray);
                setInputValue("")


            }).catch((err) => {
                console.log(err);
            });

        }
    }

    const handelInput = (event) => {
        setInputValue(event.target.value);
    }


    const reloadMessage = message.map((msg) =>
        msg.sender !== fuser.fullName ? <div className={styles.chat1}>
            <img src={f3} alt="face3" />
            <div className={styles.yellow_color_msg}>
                <span>{msg.message}</span>
            </div>
        </div> : <div className={styles.chat2}>

            <div className={styles.yellow_color_msg}>
                <span>{msg.message}</span>
            </div>
            <img src={userData.profilePic} alt="face" />
        </div>

    )

    useEffect(() => {
        if (message.length > 0) {

            ddd.current.scrollIntoView({ behavior: 'auto' });
        }

        //   return () => {
        //     second
        //   }
    }, [message])





    useEffect(() => {
        if (localStorage.getItem("x-studio-token") !== null && localStorage.getItem("x-studio-token") !== "") {

            getFuserData();




        }
        else {
            console.log("not equals");
        }
    }, []);



    if (allGroupData.length === 0 || fuser.length === 0) {
        console.log(allGroupData.length === 0);
        console.log(fuser.length === 0);
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

                </div>
            </>
        );
    }

    else {

        // console.log(fuser.notification);
        console.log(allGroupData.length === 0);
        console.log(fuser.length === 0);

        console.log("all group data");
        console.log(allGroupData);
        console.log(newUserDetails);


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

                    <div className={styles.main_white_left}>
                        <div className={styles.title_section}>
                            <img src={chatUser === null ? blackImage : newUserDetails[chatUser].profilePic.length === 0 ? blackImage : newUserDetails[chatUser].profilePic} alt="profile-pic" />
                            <span>{chatUser === null ? "" : newUserDetails[chatUser].fullName}</span>
                        </div>
                        <div className={styles.chat_section}>

                            <div style={{ width: "100%", height: "88%", overflow: "auto", }}>

                                {message.length === 0 ? <></> : reloadMessage}
                                <div ref={ddd}></div>

                            </div>







                            <div className={styles.chat_input}>
                                <form onSubmit={handelSubmit} style={{ width: "100%", height: "100%", margin: 0, padding: 0 }}>
                                    <input type="text" value={inputValue} onChange={handelInput} onSubmit={handelSubmit} placeholder="Type your message here" />
                                    {/* <img src={attach} alt="attach" /> */}

                                </form>

                            </div>
                        </div>
                    </div>
                    <div className={styles.main_white_right}>

                        <div className={styles.main_white_right_bottom}>
                            {allGroupData.map((group, i) =>


                                <div className={styles.people_list} onClick={() => getMessages(group.groupId, i)} key={group.groupId}>
                                    <img src={newUserDetails[i].profilePic.length === 0 ? blackImage : newUserDetails[i].profilePic} alt="pictures" />
                                    <span>{group.members[1].split("_")[1]}</span>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default inboxPage