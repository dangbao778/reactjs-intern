import React, { useEffect, useState } from "react";
// import './css/reset-pwd.css';
import logo from '../img/Logoalta.png';
import background from '../img/Frame.png';
import reset from './css/reset-pwd.module.css';
import { BrowserRouter as Router, Route, Routes,Switch, Link } from 'react-router-dom';

export default function ResetPass() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
    };
    return (
        <div className={reset.resetPwd}>
            <div className={reset.containerLeft}>
                    <div><img src={logo} alt='Logo'></img></div>
                <form className={reset.resetForm}>
                    <div><p>Đặt lại mật khẩu mới</p></div>
                    <div>
                        <label>Mật khẩu</label><br />
                        <input type={passwordShown ? "text" : "password"}
                            placeholder='Password'
                            name='password'/>
                            <div className={reset.icon}><i onClick={togglePasswordVisiblity} class="far fa-eye-slash"></i></div><br />
                    </div>
                    <div>
                        <label>Nhập lại mật khẩu</label><br />
                        <input type={passwordShown ? "text" : "password"}
                            placeholder='Password'
                            name='password' />
                            <div className={reset.icon}><i onClick={togglePasswordVisiblity} class="far fa-eye-slash"></i></div>
                    </div>
                    <div>
                    <Link to='/login'><button>Xác nhận</button></Link>
                    </div>
                </form>
            </div>
            <div className={reset.containerRight}>
                <img src={background} alt='bacground'></img>
            </div>                
        </div>
    );
}