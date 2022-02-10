import React, {Component} from 'react';
import logo from '../img/Logoalta.png';
import avatar from '../img/avatar.png';
import camera from '../img/camera.png';
import circle from '../img/circle.png';
// import './css/dashboard-style.css';
import dashboard from '../img/element-4.png';
import monitor from '../img/monitor.png';
import service from '../img/service.png';
import level from '../img/level.png';
import report from '../img/report.png';
import setting from '../img/setting.png';
import account from '../img/image-account.png';
import info from './css/info-style.module.css';
import { BrowserRouter as Router, Route, Routes,Switch, Link } from 'react-router-dom';
import Menu from '../menu/menu';

class Info extends Component {
render(){
    return (
        <div className={info.app}>
            <div className={info.Infocontainer}>
                {/* <div className={info.Infocontainerleft}>
                    <div className={info.logo}><img src={logo} alt='logo'></img></div>
                    <div className={info.menuBar}>
                        <div><img src={dashboard} alt='dashboard'></img><a href='#'>Dashboard</a></div>
                        <div><img src={monitor} alt='monitor'></img><a href='#'>Thiết bị</a></div>
                        <div><img src={service} alt='service'></img><a href='#'>Dịch vụ</a></div>
                        <div><img src={level} alt='level'></img><a href='#'>Cấp số</a></div>
                        <div><img src={report} alt='report'></img><a href='#'>Báo cáo</a></div>
                        <div><img src={setting} alt='setting'></img><a href='#' >Cài đặt hệ thống <i class="fas fa-ellipsis-v"></i></a></div>
                    </div>
                    <div className={info.logout}><i class="fas fa-sign-out-alt"></i><a><Link to='/login'>Đăng xuất</Link></a></div>
                </div> */}
                <Menu />
                <div className={info.InfocontainerRight}>
                    <div className={info.containerRightcontent}>
                    <div className={info.content}><label>Thông tin cá nhân</label></div>
                        <div className={info.Infoaccount}>
                            <div className={info.nameAccount}>
                                <div className={info.hello}><p>Xin chào</p></div>
                                <div className={info.name}><p>Lê Quỳnh Ái Vân</p></div>
                            </div>
                            <img src={account} alt='image-account'></img>
                            <div className={info.icon}>
                            <i class="fas fa-bell" ></i>
                            <div className={info.dropdown_content}>
                                <span className={info.title}>Thông báo</span>
                                <a href='#'>
                                    <span className={info.name}>Người dùng: Nguyễn Thị Thùy Dung</span><br />
                                    <span className={info.time}>Thời gian nhận số: 12h20 ngày 30/11/2021</span>
                                </a>
                                <a href='#'>
                                    <span className={info.name}>Người dùng: Nguyễn Thiên Chinh</span><br />
                                    <span className={info.time}>Thời gian nhận số: 12h20 ngày 30/11/2021</span>
                                </a>
                                <a href='#'>
                                    <span className={info.name}>Người dùng: Võ Thị Kim Liên</span><br />
                                    <span className={info.time}>Thời gian nhận số: 12h20 ngày 30/11/2021</span>
                                </a>
                                <a href='#'>
                                    <span className={info.name}>Người dùng: Hoàng Nguyễn Quốc Huy</span><br />
                                    <span className={info.time}>Thời gian nhận số: 12h20 ngày 30/11/2021</span>
                                </a>
                                <a href='#'>
                                    <span className={info.name}>Người dùng: Võ Ngọc Lan Anh</span><br />
                                    <span className={info.time}>Thời gian nhận số: 12h20 ngày 30/11/2021</span>
                                </a>
                                <a href='#'>
                                    <span className={info.name}>Người dùng: Nguyễn Thị Trúc Anh</span><br />
                                    <span className={info.time}>Thời gian nhận số: 12h20 ngày 30/11/2021</span>
                                </a>
                                <a href='#'>
                                    <span className={info.name}>Người dùng: Nguyễn Trung Toàn</span><br />
                                    <span className={info.time}>Thời gian nhận số: 12h20 ngày 30/11/2021</span>
                                </a>
                                <a href='#'>
                                    <span className={info.name}>Người dùng: Phạm Hồng Ngọc</span><br />
                                    <span className={info.time}>Thời gian nhận số: 12h20 ngày 30/11/2021</span>
                                </a>
                                <a href='#'>
                                    <span className={info.name}>Người dùng: Hồ Trung Hiếu</span><br />
                                    <span className={info.time}>Thời gian nhận số: 12h20 ngày 30/11/2021</span>
                                </a>
                                <a href='#'>
                                    <span className={info.name}>Người dùng: Hoàng Duy Phước</span><br />
                                    <span className={info.time}>Thời gian nhận số: 12h20 ngày 30/11/2021</span>
                                </a>
                                <a href='#'>
                                    <span className={info.name}>Người dùng: Trương Ngọc Nguyên</span><br />
                                    <span className={info.time}>Thời gian nhận số: 12h20 ngày 30/11/2021</span>
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                        <div className={info.containerRightFrom}>
                            <div>
                                <div className={info.logo}><img src={avatar} alt='logo'></img></div>
                                <div className={info.avatarName}><label>Lê Quỳnh Ái Vân</label></div>
                                <div className={info.circle}>
                                    <img src={circle} alt='circle'></img>
                                </div>
                                <div className={info.camera}>
                                    <img src={camera} alt='camera'></img>
                                </div>
                            </div>
                            <div className={info.infomation}>
                                <div className={info.personalInfoLeft}>
                                    <div className={info.usename}>
                                        <div><label>Tên người dùng</label></div>
                                        <div><input placeholder='Lê Quỳnh Ái Vân'></input></div>
                                    </div>
                                    <div className={info.phone}>
                                        <div><label>Số điện thoại</label></div>
                                        <div><input placeholder='0767375921'></input></div>
                                    </div>
                                    <div className={info.email}>
                                        <div><label>Email</label></div>
                                        <div><input placeholder='adminSSO1@domain.com'></input></div>
                                    </div>
                                </div>
                                <div className={info.personalInfoRight}>
                                    <div className={info.usename}>
                                        <div><label>Tên đăng nhập</label></div>
                                        <div><input placeholder='lequynhaivan01'></input></div>
                                    </div>
                                    <div className={info.phone}>
                                        <div><label>Mật khẩu</label></div>
                                        <div><input placeholder='311940211'></input></div>
                                    </div>
                                    <div className={info.email}>
                                        <div><label>Vai trò</label></div>
                                        <div><input placeholder='Kế toán'></input></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Info;