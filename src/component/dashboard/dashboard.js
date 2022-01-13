import React, {Component} from 'react';
import logo from './image/Logoalta.png'
import './css/dashboard-style.css';
import dashboard from './image/element-4.png';
import monitor from './image/monitor.png';
import service from './image/service.png';
import level from './image/level.png';
import report from './image/report.png';
import setting from './image/setting.png';

class Dashboard extends Component {
render(){
    return (
        <div className='app'>
            <div className='container'>
                <div className='container-left'>
                    <div className='logo'><img src={logo} alt='logo'></img></div>
                    <div className='menu-bar'>
                        <div><img src={dashboard} alt='dashboard'></img><a href='#'>Dashboard</a></div>
                        <div><img src={monitor} alt='monitor'></img><a href='#'>Thiết bị</a></div>
                        <div><img src={service} alt='service'></img><a href='#'>Dịch vụ</a></div>
                        <div><img src={level} alt='level'></img><a href='#'>Cấp số</a></div>
                        <div><img src={report} alt='report'></img><a href='#'>Báo cáo</a></div>
                        <div><img src={setting} alt='setting'></img><a href='#' >Cài đặt hệ thống <i class="fas fa-ellipsis-v"></i></a></div>
                    </div>
                    <div className='logout'><i class="fas fa-sign-out-alt"></i><a>Đăng xuất</a></div>
                </div>
                <div className='container-right'>
                    <div>
                        <div className='content'><p>Thông tin cá nhân</p></div>
                        <div className='info-account'>
                            <p>Xin chào</p>
                            <p>Lê Quỳnh Ái Vân</p>
                        </div>
                    </div>
                </div>
                <div className='container-right-info'>
                    <div></div>
                </div>
            </div>
        </div>
        );
    }
}

export default Dashboard;