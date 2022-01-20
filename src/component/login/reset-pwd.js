import React, {Component} from 'react';
// import './css/reset-pwd.css';
import logo from '../img/Logoalta.png';
import background from '../img/Frame.png';
import reset from './css/reset-pwd.module.css';
import { BrowserRouter as Router, Route, Routes,Switch, Link } from 'react-router-dom';

class ResetPass extends Component {
render(){
    return (
        <div className={reset.resetPwd}>
            <div className={reset.containerLeft}>
                    <div><img src={logo} alt='Logo'></img></div>
                <form className={reset.resetForm}>
                    <div><p>Đặt lại mật khẩu mới</p></div>
                    <div>
                        <label>Mật khẩu</label><br /><div className={reset.icon}><i class="far fa-eye-slash"></i></div>
                        <input className='password' type="password"/><br />
                    </div>
                    <div>
                        <label>Nhập lại mật khẩu</label><br /><div className={reset.icon}><i class="far fa-eye-slash"></i></div>
                        <input className='rest-pwd' type="password"></input>
                    </div>
                    <div>
                    <button><Link to='/login'>Xác nhận</Link></button>
                    </div>
                </form>
            </div>
            <div className={reset.containerRight}>
                <img src={background} alt='bacground'></img>
            </div>                
        </div>
    );
    }
}

export default ResetPass;
