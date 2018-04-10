import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Avatar, Button, Divider, Dropdown, Menu } from 'antd';
import Login from '../Login/Login'
import 'antd/dist/antd.css';
import './Navbar.css'
import logo from '../../assets/images/logo.svg'
import API from '../../utils/API';


class Navbar extends Component {
  state = {
    visible: false,
    email: '',
    password: ''
  }


  handleInputChange = event => {
    let value = event.target.value.trim();
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  // use 'lift state up': https://reactjs.org/docs/lifting-state-up.html to pass
  // the user info to App.js in the handleSignIn() function.

  handleSignIn = event => {
    if (this.state.visible) {
      API.signIn({
        email: this.state.email,
        password: this.state.password
      }).then(res => {
        this.props.changeApp({
          "isLoggedIn": true,
          "user": res.data,
          "albums": res.data.albums
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
    return (
      <div className="Navbar">
        <div className="container">
          <div className="logo-container">
            {
              !this.props.loggedIn ?
                <Link to="/">
                  <div className="logo">
                    <img src={logo} alt="logo" />
                  </div>
                </Link>
                :
                <Link to={`/dashboard/${this.props.user._id}`}>
                  <div className="logo">
                    <img src={logo} alt="logo" />
                  </div>
                </Link>
            }

            <h1 className="logotype">momento</h1>
          </div>
          {!this.props.loggedIn ?
            <div className="nav-items">
              {
                this.state.visible &&
                <Login email={this.state.email}
                  password={this.state.password}
                  onChange={this.handleInputChange} />
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
              <h3 className="name">{this.props.user.name}</h3>
              <Divider type="vertical" />
              <Dropdown overlay={menu} placement="bottomCenter">
                <Avatar icon="user" />
              </Dropdown>
              {
                (window.location.pathname === "/" || window.location.pathname === "/signup") &&
                <Redirect to={`/dashboard/${this.props.user._id}`} />
              }
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Navbar;
