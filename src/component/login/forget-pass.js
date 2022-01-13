import React, {Component} from 'react';
import './css/forget-pass.css';
import logo from './component/image/Logoalta.png';
import frame from './component/image/Frame.png';

class ForgetPass extends Component {
render(){
    return (
        <div className="forget-pwd">
            <div className='container-left'>
                <div><img src={logo} alt='Logo'></img></div>
                <form className='email-form'>
                    <div className='container-text'>
                        <div className='text'>
                            <div className='title'><p>Đặt lại mật khẩu</p></div><br />
                            <div><p>Vui lòng nhập lại mật email đặt lại mật khẩu của bạn*</p></div>
                            <input className='email' type="text"/>
                        </div>
                        <div>
                            <button className='cancel'><p>Hủy</p></button>
                            <button className='continue'><p>Tiếp tục</p></button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='container-right'>
                <img src={frame} alt='background'></img>
            </div>                
        </div>
    );
    }
}

export default ForgetPass;
