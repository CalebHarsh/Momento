import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {Avatar, Button, Divider, Dropdown, Menu} from 'antd';
import Login from '../Login/Login'
import 'antd/dist/antd.css';
import './Navbar.css'
import logo from '../../assets/images/logo.svg'
import API from '../../utils/API';


class Navbar extends  Component {
  constructor(props){
    super(props);
    this.handleSignIn = this.handleSignIn.bind(this)
    this.state = {
      visible: false,
      loggedIn: false,
      email: '',
      password: '',
      name: ''
    }
  }
  
  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    
    this.setState({
      [name]: value
    });
  }
  
  handleSignIn = event => {
      if(this.state.visible){
        API.signIn({
          email: this.state.email,
          password: this.state.password
        }).then(res => {
          this.setState({
            loggedIn: true,
            name: res.data.name
          })
        })
      } else {
        this.setState({
          visible: true
        })
      }
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="profile">Profile</Menu.Item>
        <Menu.Item key="logout">Logout</Menu.Item>
      </Menu>
    )
    return(
      <div className="Navbar">
        <div className="container">
          <div className="logo-container">
            <Link to="/">
              <div className="logo">
                <img src={logo} alt="logo"/>
              </div>
            </Link>
            <h1 className="logotype">momento</h1>
          </div>
          { !this.state.loggedIn ?  
          <div className="nav-items">
            {
              this.state.visible && <Login email={this.state.email} password={this.state.password} onChange={this.handleInputChange}/>
            }
            <Button size="default"
              onClick={this.handleSignIn}>
              Sign In
            </Button>
            <Divider type="vertical" />
            <Link to="/signup">
              <Button size="default"
                type="primary">
                Sign Up
              </Button>
            </Link>
          </div>
          : 
          <div className="nav-items">
            <h3 className="name">{this.state.name}</h3>
            <Divider type="vertical"/>
            <Dropdown overlay={menu} placement="bottomCenter">
              <Avatar icon="user"/>
            </Dropdown>
          </div>
        }
        </div>
      </div>
    );
  }
}

export default Navbar;
