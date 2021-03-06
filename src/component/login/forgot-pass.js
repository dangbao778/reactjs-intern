import React, {Component} from 'react';
// import './css/forgetPass.css';
import logo from '../img/Logoalta.png';
import frame from '../img/Frame.png';
import fgp from './css/forgetPass.module.css';
import { BrowserRouter as Router, Route, Routes,Switch, Link } from 'react-router-dom';
import ResetPass from './reset-pwd';

class ForgetPass extends Component {
render(){
    return (
        <div className={fgp.forgetPw}>
            <div className={fgp.containerLeft}>
                <div><img src={logo} alt='Logo'></img></div>
                <form className={fgp.emailForm}>
                    <div className={fgp.containerText}>
                        <div className={fgp.text}>
                            <div className={fgp.title}><p>Đặt lại mật khẩu</p></div><br />
                            <div><p>Vui lòng nhập lại mật email đặt lại mật khẩu của bạn*</p></div>
                            <input className={fgp.email} type="text" />
                        </div>
                        <div>
                            <Router>
                            <button className={fgp.cancel}><p><Link to='/login'>Hủy</Link></p></button></Router>
                            <button className={fgp.continue}><p><Link to='/reset_pw'>Tiếp tục</Link></p></button>
                            
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </form>
            </div>
            <div className={fgp.containerRight}>
                <img src={frame} alt=''></img>
            </div>             
        </div>
    );
    }
}

export default ForgetPass;
