import React, {Component} from 'react';
import './css/login.css';
import logo from './image/Logoalta.png';
import background from './image/background.png';

class Login extends Component {
    handleClick = (e) =>{
        e.preventDefault();
        window.location = './forget-pass.js'
    }
render(){
    return (
        <div className="login">
            <div className='container-left'>
                    <div><img src={logo} alt='Logo'></img></div>
                    <form className='login-form'>
                    <div>
                        <label>Tên đăng nhập*</label><br />
                        <input className='username' type="text" placeholder='Username' /><br />
                    </div>
                    <div>
                        <label>Mật khẩu* </label><br /><div className='icon'><i class="far fa-eye-slash"></i></div>
                        <input className='password' type="password" placeholder='Password'></input>
                    </div>
                    <div>
                        <label className='fg-pass' onClick={this.handleClick}>Quên mật khẩu</label>
                    </div>
                    <div>
                        <button>Đăng nhập</button>
                    </div>
                </form>
            </div>
            <div className='container-right'>
                <img src={background} alt='bacground'></img>
                <div className='container-text'>
                    <p>Hệ thống</p><br />
                    <div className='text'>QUẢN LÝ XẾP HÀNG</div>
                </div>
            </div>                
        </div>
    );
    }
}

export default Login;
