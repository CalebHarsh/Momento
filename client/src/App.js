import React, { Component } from "react";
import 'antd/dist/antd.css';
import "./App.css";
import Navbar from './components/Navbar/Navbar.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
