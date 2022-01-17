import './App.css';
import React, {Component} from 'react';
import Login from './component/login/login';
import ResetPass from './component/login/reset-pwd';
import ForgetPass from './component/login/forgot-pass';
import Dashboard from './component/dashboard/dashboard';
import { BrowserRouter as Router, Route, Routes,Switch,Link } from 'react-router-dom';
// import { Switch, Route } from "react-router-dom";
// import { Routes,Router } from 'react-router-dom';

class App extends Component {
render(){
return (
    <Router>
        <div className="App">
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/info">
                    <Dashboard />
                </Route>
                <Route path="/forgot_pw">
                    <ForgetPass />
                </Route>
                <Route path="/reset_pw">
                    <ResetPass />
                </Route>
            </Switch>
        </div>
    </Router>
);
}
}

export default App;
