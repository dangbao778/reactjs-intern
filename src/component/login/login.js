import React, {Component} from 'react';
// import './css/login.css';
import logo from './image/Logoalta.png';
import Loginbackground from './image/Login.png';
import { BrowserRouter as Router, Route, Routes,Switch, Link } from 'react-router-dom';
import styles from './css/login.module.css';
import ForgetPass from './forgot-pass';

class Login extends Component {
render(){
    return (
        <div className={styles.login}>
            <div className={styles.containerLeft}>
                    <div className={styles.Logo}><img src={logo} alt='Logo'></img></div>
                    <form className={styles.loginForm}>
                    <div>
                        <label>Tên đăng nhập*</label><br />
                        <input type="text" placeholder='Username' /><br />
                    </div>
                    <div>
                        <label>Mật khẩu* </label><br /><div className={styles.icon}><i class="far fa-eye-slash"></i></div>
                        <input type="password" placeholder='Password'></input>
                    </div>
                        <div className={styles.fgPass}>
                            <div><Link to='/forgot_pw'>Quên mật khẩu</Link></div>
                            {/* <a>Quên mật khẩu</a> */}
                        </div>
                    
                    <div>
                        <button><Link to='/info'>Đăng nhập</Link></button>
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
    }
}

export default Login;
