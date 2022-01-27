import React, {Component} from 'react';
import dashboard from './css/dashboard-style.module.css';
import { BrowserRouter as Router, Route, Routes,Switch, Link } from 'react-router-dom';
import Menu from '../menu/menu';
import Overview from './Overview';
import LevelChart from './levelChart';
import Chart from './chart_table';





class Dashboard extends Component {
render(){
    return (
        <div className={dashboard.app}>
            <div className={dashboard.containerLeft}>
                <Menu />
            </div>
            <div className={dashboard.containerMiddle}>
                <div className={dashboard.top_chart}>
                    <LevelChart />
                </div>
                <div className={dashboard.table_chart}>
                    <Chart />
                </div>
            </div>
            <tableChart />
            <div className={dashboard.containerRight}>
                <Overview />
            </div>
            
        </div>
        );
    }
}

export default Dashboard;