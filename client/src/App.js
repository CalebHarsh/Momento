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
  render() {
    return (
      <Router>
        <div className="App">
          <Affix>
            <Navbar />
          </Affix>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/albums" component={Albums} />
          <Route exact path="/photos" component={Photos} />
        </div>
      </Router>
    );
  }
}

export default App;
