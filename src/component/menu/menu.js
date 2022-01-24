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
                        <div><img src={dashboard} alt='dashboard'></img><a href='#'>Dashboard</a></div>
                        <div><img src={monitor} alt='monitor'></img><a href='#'>Thiết bị</a></div>
                        <div><img src={service} alt='service'></img><a href='#'>Dịch vụ</a></div>
                        <div><img src={level} alt='level'></img><a href='#'>Cấp số</a></div>
                        <div><img src={report} alt='report'></img><a href='#'>Báo cáo</a></div>
                        <div><img src={setting} alt='setting'></img><a href='#' >Cài đặt hệ thống <i class="fas fa-ellipsis-v"></i></a></div>
                    </div>
                    <div className={menu.logout}><i class="fas fa-sign-out-alt"></i><a><Link to='/login'>Đăng xuất</Link></a></div>
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