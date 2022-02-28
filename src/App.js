import './App.css';
import React, {Component} from 'react';
import Login from './component/login/login';
import ResetPass from './component/login/reset-pwd';
import ForgetPass from './component/login/forgot-pass';
import { BrowserRouter as Router, Route, Routes,Switch,Link } from 'react-router-dom';
import Info from './component/info/info';
import Dashboard from './component/dashboard/dashboard';
import Device from './component/device/device';
import add_Device from './component/device/add_device';
import add_Device_content from './component/device/add_device_content';
import DeviceAdd from './component/device/add_device';
import DeviceAdd_Content from './component/device/add_device_content';
import DeviceInfo from './component/device/device_info';
import DeviceUpdate from './component/device/device_update';
// import { Switch, Route } from "react-router-dom";
// import { Routes,Router } from 'react-router-dom';

const App = () => {
return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/info">
                    <Info />
                </Route>
                <Route path="/forgot_pw">
                    <ForgetPass />
                </Route>
                <Route path="/reset_pw">
                    <ResetPass />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/device">
                    <Device />
                </Route>
                <Route path="/add_Device_content">
                    <DeviceAdd_Content />
                </Route>
                <Route path="/add_device">
                    <DeviceAdd />
                </Route>
                <Route path="/info_device">
                    <DeviceInfo />
                </Route>
                <Route path="/update_device">
                    <DeviceUpdate />
                </Route>
            </Switch>
        </Router>
        );
}

export default App;
