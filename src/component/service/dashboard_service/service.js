import { useHistory } from 'react-router-dom';
import Menu from '../../menu/menu';
import style from './css/service_style.module.css';
import img_user_account from "../../img/image-account.png"
import { BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';
import Service_content from './service_content';

export default function Service() {
        const history = useHistory();
        return (
                <div className={style.container}>
                    <div className={style.left_container}>
                        <Menu/>
                    </div>   
                    <div className={style.top_container}>
                        <div className={style.top_content}>
                            <div className={style.left_title}>
                                <p><a className={style.top_main_title}>Dịch vụ > </a><span className={style.list_device}>Danh sách dịch vụ</span> </p>
                                
                            </div>
                            <div className={style.right_title}>
                                <div className={style.alarm_button}>
                                    <p className={`${style.alarm_button_icon} fas fa-bell`}></p>
                                    <div class={style.dropdown_content}>
                                        <p className={style.notification_title}>Thông Báo</p>
                                        <div className={style.noti_scroll}>
                                            <div className={style.notification_info}>
                                                <div>
                                                <p className={style.maintitle}>
                                                    Người dùng: Nguyễn Thị Thùy Dung
                                                </p>
                                                <p className={style.subtitle}>
                                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                                </p>
                                                <hr className={style.tag_br}/>
                                                </div>
                                            </div>
                                            
                                            <div className={style.notification_info}>
                                                <p className={style.maintitle}>
                                                    Người dùng: Nguyễn Thiên Chinh
                                                </p>
                                                <p className={style.subtitle}>
                                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                                </p>
                                                <hr className={style.tag_br}/>
                                            </div>
                                            <div className={style.notification_info}>
                                                <p className={style.maintitle}>
                                                    Người dùng: Nguyễn Thị Thùy Dung
                                                </p>
                                                <p className={style.subtitle}>
                                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                                </p>
                                                <hr className={style.tag_br}/>
                                            </div>
                                            <div className={style.notification_info}>
                                                <p className={style.maintitle}>
                                                    Người dùng: Nguyễn Thiên Chinh
                                                </p>
                                                <p className={style.subtitle}>
                                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                                </p>
                                                <hr className={style.tag_br}/>
                                            </div>
                                            <div className={style.notification_info}>
                                                <p className={style.maintitle}>
                                                    Người dùng: Nguyễn Thị Thùy Dung
                                                </p>
                                                <p className={style.subtitle}>
                                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                                </p>
                                                <hr className={style.tag_br}/>
                                            </div>
                                            <div className={style.notification_info}>
                                                <p className={style.maintitle}>
                                                    Người dùng: Nguyễn Thiên Chinh
                                                </p>
                                                <p className={style.subtitle}>
                                                    Thời gian nhận số: 12h20 ngày 30/11/2021
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.user_account}>
                                    <div>
                                        <img src={img_user_account} width={40} height={40}></img>
                                        <p>Xin chào <br/><b>Lê Quỳnh Ái Vân</b></p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    <div>
                    <div className={style.bottom_container}>
                        <div className={style.dashboard_title}> 
                            <p className={style.tab_title}>Danh sách dịch vụ</p>
                        </div>
                        <div className={style.dashboard_content}>
                            <Service_content />
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }