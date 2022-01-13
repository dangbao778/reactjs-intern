import './App.css';
import React, {Component} from 'react';
// import Login from './component/login/login';
// import ResetPass from './component/login/reset-pwd';
// import ForgetPass from './component/login/forget-pass';
import Dashboard from './component/dashboard/dashboard';

class App extends Component {
  render(){
    return (
      <div className="App">
          {/* <Login /> */}
          {/* <ForgetPass /> */}
          <Dashboard />
          {/* <ResetPass /> */}
      </div>
    );
  }
}

export default App;
