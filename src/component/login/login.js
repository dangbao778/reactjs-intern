import React, { useEffect, useState } from "react";
// import './css/login.css';
import logo from '../img/Logoalta.png';
import Loginbackground from '../img/Login.png';
import { BrowserRouter as Router, Route, Routes,Switch, Link } from 'react-router-dom';
import styles from './css/login.module.css';
import ForgetPass from './forgot-pass';

export default function Login() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
    };
    return (
        <div className={styles.login}>
            <div className={styles.containerLeft}>
                    <div className={styles.Logo}><img src={logo} alt='Logo'></img></div>
                    <form className={styles.loginForm}>
                    <div className={styles.usename}>
                        <label>Tên đăng nhập*</label><br />
                        <input type="text" placeholder='Username' /><br />
                    </div>
                    <div className={styles.password}>
                        <label>Mật khẩu* </label><br />
                        <input 
                            type={passwordShown ? "text" : "password"}
                            placeholder='Password'
                            name='password'
                        /><div className={styles.icon}><i onClick={togglePasswordVisiblity} class="far fa-eye-slash"></i></div>
                    </div>
                        <div className={styles.fgPass}>
                        <Link to='/forgot_pw'><div><p>Quên mật khẩu</p></div></Link>
                        </div>
                    <div>
                    <Link to='/info'><button>Đăng nhập</button></Link>
                    </div>
                </form>
            </div>
            <div className={styles.containerRight}>
                <div><img src={Loginbackground} alt='background'></img></div>
                <div className={styles.containerText}>
                    <p>Hệ thống</p><br />
                    <div className={styles.text}><p>QUẢN LÝ XẾP HÀNG</p></div>
                </div>
            </div>                
        </div>
    );
};
