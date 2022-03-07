import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import { useHistory } from 'react-router-dom';
import style from "./css/service_content_style.module.css";
import { BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';
import calendar from "../../img/calendar.png"


// const [state, setState] = React.useState<Date | null>(new Date());

export default function Service_content() {
        const history = useHistory();
        // const [startDate, setStartDate] = React.useState<Date | null >(new Date());
        
        return (
            <div className={style.container}>
                <div className={style.top_container}>
                    <div className={style.top_content}>
                        <div>
                            <div className={style.combobox_title}>
                                <a>Trạng thái hoạt động</a>
                            </div>
                            <div className={style.combobox_content}>
                                <form >
                                    <select className={style.combobox_content_select}>
                                        <option className={style.combobox_content_option} value="Tất cả">Tất cả</option>
                                        <option className={style.combobox_content_option} value="Hoạt Động">Hoạt Động</option>
                                        <option className={style.combobox_content_option} value="Ngưng hoạt động">Ngưng hoạt động</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        <div>
                            <div className={style.combobox_title}>
                                <a>Chọn thời gian</a>
                            </div>
                            <div  className={style.combobox_content}>
                                <div className="ServiceDropdowns_1">
                                    {/* <DatePicker selected={state} onChange={(date) => setState(date)} />
                                        <img src={style.calendar} alt="" /> 
                                    <DatePicker selected={state} onChange={(date) => setState(date)} /> */}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={style.combobox_title}>
                                <a>Từ khóa</a>
                            </div>
                            <div className={style.combobox_content}>
                                <div>
                                    <form action="/action_page.php">
                                    <input className={style.combobox_content_select} type="text" placeholder="Nhập từ khóa " name="search"/>
                                    <button className={style.search_icon} type="submit"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.bottom_container}>
                    <table className={style.table_service}>
                        <tr>
                            <th>Mã dịch vụ</th>
                            <th>Tên dịch vụ</th>
                            <th>Mô tả</th>
                            <th>Trạng thái hoạt động</th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Mô tả dịch vụ 1</td>  
                            <td><span  className={`${style.green_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td><Link to="/info_device">Chi tiết</Link></td>
                            <td><Link to="/update_device">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Hoạt động</td>  
                            <td><span  className={`${style.green_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td><Link to="/info_device">Chi tiết</Link></td>
                            <td><Link to="/update_device">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Hoạt động</td>  
                            <td><span  className={`${style.red_dot} fas fa-circle fa-xs`}></span>Ngưng hoạt động</td>
                            <td><Link to="/info_device">Chi tiết</Link></td>
                            <td><Link to="/update_device">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Hoạt động</td>  
                            <td><span  className={`${style.green_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td><Link to="/info_device">Chi tiết</Link></td>
                            <td><Link to="/update_device">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Hoạt động</td>  
                            <td><span  className={`${style.green_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td><Link to="/info_device">Chi tiết</Link></td>
                            <td><Link to="/update_device">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Hoạt động</td>  
                            <td><span  className={`${style.green_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td><Link to="/info_device">Chi tiết</Link></td>
                            <td><Link to="/update_device">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Hoạt động</td>  
                            <td><span  className={`${style.green_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td><Link to="/info_device">Chi tiết</Link></td>
                            <td><Link to="/update_device">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Hoạt động</td>  
                            <td><span  className={`${style.green_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td><Link to="/info_device">Chi tiết</Link></td>
                            <td><Link to="/update_device">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Hoạt động</td>  
                            <td><span  className={`${style.red_dot} fas fa-circle fa-xs`}></span>Ngưng hoạt động</td>
                            <td><Link to="/info_device">Chi tiết</Link></td>
                            <td><Link to="/update_device">Cập nhập</Link></td>
                        </tr>
                        <tr>
                            <td>KIO_01</td>
                            <td>Kiosk</td>
                            <td>Hoạt động</td>  
                            <td><span  className={`${style.green_dot} fas fa-circle fa-xs`}></span>Hoạt động</td>
                            <td><Link to="/info_device">Chi tiết</Link></td>
                            <td><Link to="/update_device">Cập nhập</Link></td>
                        </tr>
                    </table>
                    <div>
                        <div className={style.nextpage}>
                            <a className={`${style.caret_left} fas fa-caret-left`}></a>
                            <a className={style.page_active}>1</a>
                            <a>2</a>
                            <a>3</a>
                            <a>4</a>
                            <a>5</a>
                            <a>...</a>
                            <a>10</a>
                            <a className={`${style.caret_right} fas fa-caret-right`}></a>
                        </div>
                    </div>
                    
                </div>
                <Link to='/add_service'>
                <div className={style.add_service}>
                    <div className={style.total_add_service}>
                        <div className={`${style.add} fas fa-plus`}></div>
                        <div className={style.add_title}><a>Thêm dịch vụ</a></div>
                    </div>
                </div>
                </Link>
                
            </div>
        );
    }