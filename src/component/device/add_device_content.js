import React from 'react';
import { useHistory } from 'react-router-dom';
import Menu from '../menu/menu';
import style from './css/add_device_content.module.css';
import img_user_account from "../img/image-account.png"
import Device_content from './device_content';
import { BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';
import star from '../img/star.png'

export default function DeviceAdd_Content() {
    const history = useHistory();
    return (
        <div className={style.container}>
            {/* <div className={style.left_container}>
                <Menu />
            </div> */}
            {/* <div className={style.top_content}>
                <p><a className={style.content}>Thiết bị > </a><Link to='/device'>Danh sách thiết bị > </Link>Thêm thiết bị</p>
            </div> */}
            <div className={style.box_container}>  
                <div className={style.top_box_container}>
                    <div className={style.top_box_content}>
                        <div>
                            <div className={style.box_title}>Thông tin thiết bị</div>
                        </div>
                        <div>
                            <div className={style.box_container_element}>
                                <div className={style.left_element}>
                                    <div className={style.id_device}>
                                        <div><span>Mã Thiết bị: <img src={star}></img></span></div>
                                        <div>
                                            <input className={style.input_id_device} placeholder="Nhập mã thiết bị" />
                                        </div>
                                    </div>
                                    <div className={style.name_device}>
                                        <div><span>Tên thiết bị: <img src={star}></img></span></div>
                                        <div>
                                            <input className={style.input_name_device} placeholder="Nhập tên thiết bị" />
                                        </div>
                                    </div>
                                    <div className={style.ip_device}>
                                        <div><span>Địa chỉ IP: <img src={star}></img></span></div>
                                        <div>
                                            <input className={style.input_Ip_device} placeholder="Nhập địa chỉ IP" />
                                        </div>
                                    </div>
                                </div>
                                <div className={style.right_element}>
                                    <div className={style.type_device}>
                                        <div><span>Loại Thiết bị: <img src={star}></img></span></div>
                                        <div>
                                            <form>
                                                <select className={style.type_device_select}>
                                                    <option value="" disabled selected hidden>Chọn loại thiết bị</option>
                                                    <option className={style.type_device_option}>Kiosk</option>
                                                    <option className={style.type_device_option}>Display counter</option>
                                                </select>
                                            </form>
                                        </div>
                                    </div>
                                    <div className={style.username}>
                                        <div><span>Tên đăng nhập: <img src={star}></img></span></div>
                                        <div>
                                            <input className={style.input_username} placeholder="Nhập tài khoản" />
                                        </div>
                                    </div>
                                    <div className={style.password}>
                                        <div><span>Mật khẩu <img src={star}></img></span></div>
                                        <div>
                                            <input className={style.input_password} placeholder="Nhập mật khẩu" />
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className={style.use_service}>
                                    <div><span>Dịch vụ sử dụng: <img src={star}></img></span></div>
                                    <div>
                                        <input className={style.input_use_service} placeholder='Nhập dịch vụ sử dụng' />
                                    </div>
                                    <div className={style.note}><img src={star}></img>Là trường thông tin bắt buộc</div>
                                </div>
                                
                                <div className={style.button}>
                                    <Link to='/device'>
                                        <button className={style.cancel}><p>Hủy bỏ</p></button>
                                    </Link>
                                    <Link to='/device'>
                                        <button className={style.add}><p>Thêm thiết bị</p></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}