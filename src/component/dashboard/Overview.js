import React, {Component} from 'react';
import overview from './css/global.module.css';
import { BrowserRouter as Router, Route, Routes,Switch, Link } from 'react-router-dom';
import account from '../img/image-account.png'
import Calendar from './Calender';
import monitor from '../img/monitorOverview.png';
import service from '../img/serviceOverview.png'
import level from '../img/levelOverview.png'
import { over } from 'lodash-es';
import precent_orange from '../img/overview_percentorange.png';
import precent_blue from '../img/overview_percentblue.png';
import precent_green from '../img/overview_percentgreen.png';



class Overview extends Component {
    render(){
        return (
            <div className={overview.app}>
                <div className={overview.topBar}>
                    <div className={overview.content}><label>Dashboard</label></div>
                </div>
                <div className={overview.container}>
                    <div className={overview.Infoaccount}>
                        <div className={overview.nameAccount}>
                            <div className={overview.hello}><p>Xin chào</p></div>
                            <div className={overview.name}><p>Lê Quỳnh Ái Vân</p></div>
                        </div>
                        <img src={account} alt='image-account'></img>
                        <div className={overview.background}></div>
                        <div className={overview.icon}><i class="fas fa-bell"></i></div>
                        
                    </div>
                    <div className={overview.all}>
                        <div className={overview.title}><span>Tổng quan</span></div>
                        <div className={overview.monitor}>
                            <div className={overview.statusMonitor}>
                                <div className={overview.left_overview}>
                                    <div className={overview.percent_orange_img}>
                                        <img src={precent_orange} alt='precent_orange'></img>
                                    </div>
                                </div>
                                <div className={overview.middle_overview}>
                                    <div className={overview.number}><span>4.221</span>
                                    <div className={overview.title}>   
                                        <img src={monitor} alt='monitor'></img>
                                        Thiết bị</div>
                                    </div>
                                </div>
                                <div className={overview.right_overview}>
                                    <div>
                                        <div className={overview.active_1}><span>Đang hoạt động</span>
                                        <div className={overview.number_right_1}><span>3.799</span></div>
                                        </div>
                                        
                                    </div>
                                    <div>
                                        <div className={overview.stop_work_1}><span>Ngừng hoạt động</span></div>
                                        <div className={overview.number_right_2}><span>422</span></div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={overview.service}>
                            <div className={overview.statusService}>
                                <div className={overview.left_overview}>
                                    <div className={overview.percent_blue_img}>
                                        <img src={precent_blue} alt='precent_blue'></img>
                                    </div>
                                </div>
                                <div className={overview.middle_overview}>
                                    <div className={overview.number}><span>4.221</span>
                                    <div className={overview.title}>   
                                        <img src={service} alt='service'></img>
                                        Dịch vụ</div>
                                    </div>
                                </div>
                                <div className={overview.right_overview}>
                                    <div>
                                        <div className={overview.active_1}><span>Đang hoạt động</span>
                                        <div className={overview.number_right_1}><span>210</span></div>
                                        </div>
                                        
                                    </div>
                                    <div>
                                        <div className={overview.stop_work_1}><span>Ngừng hoạt động</span></div>
                                        <div className={overview.number_right_2}><span>66</span></div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={overview.level}>
                            <div className={overview.statusLevel}>
                                <div className={overview.left_overview}>
                                    <div className={overview.percentgreen_img}>
                                        <img src={precent_green} alt='precent_green'></img>
                                    </div>
                                </div>
                                <div className={overview.middle_overview}>
                                    <div className={overview.number}><span>4.221</span>
                                    <div className={overview.title}>   
                                        <img src={level} alt='level'></img>
                                        Cấp số</div>
                                    </div>
                                </div>
                                <div className={overview.right_overview}>
                                    <div>
                                        <div className={overview.waiting_3}>
                                            <span>Đang chờ</span>
                                            <div className={overview.number_right_1}><span>3.721</span></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={overview.used_3}><span>Đã sử dụng</span></div>
                                        <div className={overview.number_right_2}><span>486</span></div>
                                    </div>
                                    <div>
                                        <div className={overview.skip_3}><span>Bỏ qua</span></div>
                                        <div className={overview.number_right_3}><span>32</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={overview.calendar}>
                            <Calendar />
                        </div>
                    </div>
                </div>
            </div>
            );
        }
    }
    
    export default Overview;