import React, {Component} from 'react';
import logo from '../img/Logoalta.png';
// import './css/dashboard-style.css';
import dashboard from '../img/element-4.png';
import monitor from '../img/monitor.png';
import service from '../img/service.png';
import level from '../img/level.png';
import report from '../img/report.png';
import setting from '../img/setting.png';
import menu from './menu-style.module.css';
import { BrowserRouter as Router, Route, Routes,Switch, Link } from 'react-router-dom';
import account from '../img/image-account.png'

class Menu extends Component {
render(){
    return (
        <div className={menu.app}>
            <div className={menu.Infocontainer}>
                <div className={menu.Infocontainerleft}>
                    <div className={menu.logo}><img src={logo} alt='logo'></img></div>
                    <div className={menu.menuBar}>
                        <Link to='/dashboard'><div className={menu.dashboard_title}><img src={dashboard} alt='dashboard'></img><span>Dashboard</span></div></Link>
                        
                        <Link to='/device'><div className={menu.monitor}><img src={monitor} alt='monitor'></img><span>Thiết bị</span></div></Link>
                        <Link to='/service'><div className={menu.service}><img src={service} alt='service'></img><span>Dịch vụ</span></div></Link>
                        <div><img src={level} alt='level'></img><span>Cấp số</span></div>
                        <div><img src={report} alt='report'></img><span>Báo cáo</span></div>
                        <div><img src={setting} alt='setting'></img><span>Cài đặt hệ thống <i class="fas fa-ellipsis-v"></i></span></div>
                    </div>
                    <div className={menu.dashboard_logout}>
                        <Link to='/login' className={menu.logout}><i class="fas fa-sign-out-alt"></i>Đăng xuất</Link>
                    </div>
                </div>
            </div>
            {/* <div className={menu.InfocontainerRight}>
                <div className={menu.containerRightcontent}>
                <div className={menu.content}><label>Thông tin cá nhân</label></div>
                    <div className={menu.Infoaccount}>
                        <div className={menu.nameAccount}>
                            <div className={menu.hello}><p>Xin chào</p></div>
                            <div className={menu.name}><p>Lê Quỳnh Ái Vân</p></div>
                        </div>
                        <img src={account} alt='image-account'></img>
                        <div className={menu.icon}><i class="fas fa-bell"></i></div>
                    </div>
                </div>
            </div> */}
        </div>
        );
    }
}

export default Menu;