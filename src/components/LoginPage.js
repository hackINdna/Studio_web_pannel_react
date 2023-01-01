import React, {useState, useEffect} from 'react'
import styles from './css/loginPage.module.css'
import passwordGif from './images/stPassword.png'
import { Link, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import axios from 'axios';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


import {url} from '../constData';




function LoginPage() {

  const auth = getAuth();



  const [userValue, setUserValue] = useState('');
  const [passValue, setPassValue] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);


  const [errorr, setErrorr] = useState(null);
  console.log(url);


  async function fetchData(){
    setOpen(true);
    try {
      const response = await axios.post(`${url}/api/studio/login`, {
      email: userValue,
      password: passValue,
    }, {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      }
    });
    setToken(response.data.token);
    localStorage.setItem("x-studio-token", response.data.token);
    localStorage.setItem("userData", JSON.stringify(response.data));
    setOpen(false);
    
    } catch (error) {
      setErrorr(error);
      console.log(`the Error is here ${errorr}`);
      setOpen(false);
      
      
    }
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    
    
      fetchData().then((result) => {

        signInWithEmailAndPassword(auth, userValue.trim(), `${userValue.trim()}password` ).then((newResult) => {
          console.log(`this is firebase results ${JSON.stringify(newResult)}`);
          
        }).catch((errs) => {
          console.log(errs);
        });
        
      }).catch((err) => {
        console.log(err);
      });
  };

  useEffect(()=>{
    if(localStorage.getItem("x-studio-token") !== null && localStorage.getItem("x-studio-token") !== ""){
      console.log("equals");
      console.log(`token is ${token.toString()}`);
      console.log(localStorage.getItem("x-studio-token"));
      navigate("/dashboard");
    }
    else{
      console.log("not equals");
    }
  }, [token]);

  




  return (
    <>
      <div className={styles.white_div}>
      </div>
      <div className={styles.yellow_div}>
        <h1 className={styles.login_text}>LOGIN</h1>
        <div className={styles.username_div}>
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <br />
            <input type="text" name='fname' value={userValue} onChange={(event) => setUserValue(event.target.value)} placeholder="Enter your name" />
            <br />
            <label>Password</label>
            <br />
            <input type="password" name='password' value={passValue} onChange={(event) => setPassValue(event.target.value)} placeholder="Enter password" />
          <p className={styles.forgotpassword}>Forgot Password?</p>
          <div className={styles.login_button_area}>
          <button className={styles.login_button} type='submit' >Log in</button>
          <Backdrop
        // sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 0 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
          </div>
          </form>
          <div className={styles.account_text}>
            <h4>Don't have an account yet?</h4>
            <h4 className={styles.signup}><Link to="/signup">Sign up</Link></h4>
          </div>

        </div>
      </div>
      <div>
        <img className={styles.login_gif} src={passwordGif} alt="password-gif" />
      </div>
    </>
  )
}

export default LoginPage