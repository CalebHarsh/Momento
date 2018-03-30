import React, {Component} from 'react';
import {Button, Divider} from 'antd';
import Login from '../Login/Login'
import 'antd/dist/antd.css';
import './Navbar.css'

class Navbar extends  Component {
  constructor(props){
    super(props);
    this.handleSignIn = this.handleSignIn.bind(this)
    this.state = {
      visible: false
    }
  }
  handleSignIn() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      }
    })
  }
  render() {
    return(
      <div className="Navbar">
        <div className="container">
          <div className="logo-container">
            <div className="logo"></div>
            <h1 className="logotype">momento</h1>
          </div>
          <div className="nav-items">
            {
              this.state.visible && <Login className="fadeInRight"/>
            }
            <Button size="default"
              onClick={this.handleSignIn}>
              Sign In
            </Button>
            <Divider type="vertical" />
            <Button size="default"
              type="primary">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
