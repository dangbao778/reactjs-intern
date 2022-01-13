import React, {Component} from 'react';
import './css/reset-pwd.css';
import logo from './image/Logoalta.png';
import background from './image/Frame.png';

class ResetPass extends Component {
render(){
    return (
        <div className="reset-pwd">
            <div className='container-left'>
                    <div><img src={logo} alt='Logo'></img></div>
                <form className='reset-form'>
                    <div><p>Đặt lại mật khẩu mới</p></div>
                    <div>
                        <label>Mật khẩu</label><br /><div className='icon'><i class="far fa-eye-slash"></i></div>
                        <input className='password' type="text"/><br />
                    </div>
                    <div>
                        <label>Nhập lại mật khẩu</label><br /><div className='icon'><i class="far fa-eye-slash"></i></div>
                        <input className='rest-pwd' type="password"></input>
                    </div>
                    <div>
                        <button>Xác nhận</button>
                    </div>
                </form>
            </div>
            <div className='container-right'>
                <img src={background} alt='bacground'></img>
            </div>                
        </div>
    );
    }
}

export default ResetPass;
