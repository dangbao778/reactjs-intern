import React, {Component} from 'react';
import dashboard from './css/dashboard-style.module.css';
import { BrowserRouter as Router, Route, Routes,Switch, Link } from 'react-router-dom';
import Menu from '../menu/menu';
import Chart from './levelChart';
import Calendars from './Calender';
import Global from './global';


class Dashboard extends Component {
render(){
    return (
        <div className={dashboard.app}>
            <div className={dashboard.containerLeft}>
            <Menu />
            </div>
            
            <Chart />
            {/* <Calendars /> */}
            <div className={dashboard.containerRight}>
                <Global />
            </div>
        </div>
        );
    }
}

export default Dashboard;