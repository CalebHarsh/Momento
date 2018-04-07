import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import {Affix} from 'antd'
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import Albums from './pages/Albums';
import Photos from './pages/Photos';
class App extends Component {
  state = {
    isLoggedIn: false
  }
  changeLogInStatus = () => {
    this.setState({
      isLoggedIn: true
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Affix>
            <Navbar login={this.changeLogInStatus} loggedIn={this.state.isLoggedIn}/>
          </Affix>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Albums} />
          <Route path="/albums" component={Photos} />
        </div>
      </Router>
    );
  }
}

export default App;
