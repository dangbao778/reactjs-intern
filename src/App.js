import './App.css';
import React, {Component} from 'react';
import Login from './component/login/login';
import ResetPass from './component/login/reset-pwd';
import ForgetPass from './component/login/forgot-pass';
import { BrowserRouter as Router, Route, Routes,Switch,Link } from 'react-router-dom';
import Info from './component/info/info';
import Dashboard from './component/dashboard/dashboard';
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
            </Switch>
        </Router>
        );
}

export default App;
