import React, {Component} from 'react';
import global from './css/global.module.css';
import { BrowserRouter as Router, Route, Routes,Switch, Link } from 'react-router-dom';


class Global extends Component {
    render(){
        return (
            <div className={global.app}>
                <div className={global.container}>
                    <div className={global.title}><span>Tổng quan</span></div>
                </div>
            </div>
            );
        }
    }
    
    export default Global;