import React, { Component } from "react";
import "./App.css";
import Navbar from './components/Navbar/Navbar.js'
import {Affix} from 'antd'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Affix>
          <Navbar />
        </Affix>
      </div>
    );
  }
}

export default App;
