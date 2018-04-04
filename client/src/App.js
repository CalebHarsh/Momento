import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
<<<<<<< Updated upstream
import LandingPage from './pages/LandingPage'
import SignUp from './pages/SignUp'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
=======
import Navbar from './components/Navbar/Navbar.js';
import Albums from './components/Photo-Components/Albums';
import Photos from './components/Photo-Components/Photos';
import {Affix} from 'antd'
class App extends Component {
  render() {
    return (
      <div className="App">

          <Navbar />
          <Albums />

      </div>
>>>>>>> Stashed changes
    );
  }
}

export default App;
