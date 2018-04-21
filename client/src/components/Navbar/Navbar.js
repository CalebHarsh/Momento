import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Avatar, Button, Divider, Dropdown, Menu, message, Modal } from 'antd';
import 'antd/dist/antd.css';
import Login from '../Login/Login';
import './Navbar.css';
import logo from '../../assets/images/logo.svg';
import API from '../../utils/API';


class Navbar extends Component {
  state = {
    visible: false,
    modalVisible: false,
    email: '',
    password: '',
    viewportWidth: window.innerWidth, // used to detect window size
  }

  componentDidMount() {
    this.updateWindowWidth();
    window.addEventListener('resize', this.updateWindowWidth.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth.bind(this));
  }

  updateWindowWidth = () => {
    this.setState({ viewportWidth: window.innerWidth });
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  }

  handleClose = () => {
    this.setState({
      modalVisible: false,
    });
  }

  handleSignIn = () => {
    if (this.state.visible) {
      API.signIn({
        email: this.state.email.trim(),
        password: this.state.password.trim(),
      }).then((res) => {
        if (res.data._id) {
          message.success('Logged In');
          this.props.changeApp({
            isLoggedIn: true,
            user: res.data,
            albums: res.data.albums,
          });
        } else {
          message.error('Not Logged In');
        }
      }).catch((err) => {
        message.error('Email and Password Not Found');
      });
    } else if (this.state.viewportWidth >= 685) {
      this.setState({
        visible: true,
      });
    } else if (this.state.modalVisible) {
      API.signIn({
        email: this.state.email.trim(),
        password: this.state.password.trim(),
      }).then((res) => {
        if (res.data._id) {
          message.success('Logged In');
          this.props.changeApp({
            isLoggedIn: true,
            user: res.data,
            albums: res.data.albums,
          });
        } else {
          message.error('Not Logged In');
        }
      }).catch((err) => {
        message.error('Email and Password Not Found');
      });
    } else {
      this.setState({
        modalVisible: true,
      });
    }
  }

  handleDropDown = (e) => {
    if (e.key === 'logout') this.logout();
  }

  logout = () => {
    /* eslint no-unused-vars: 0 */
    API.logout().then((res) => {
      window.location.pathname = '/';
    });
    message.success('Logged Out');
  }

  render() {
    const menu = (
      <Menu onClick={this.handleDropDown}>
        <Menu.Item key="logout">Logout</Menu.Item>
      </Menu>
    );

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
                this.state.modalVisible &&
                <Modal
                  title="Sign In"
                  visible={this.state.modalVisible}
                  onOk={this.handleSignIn}
                  onCancel={this.handleClose}
                  footer={[
                    <Button
                      key="cancel"
                      onClick={this.handleClose}
                    >
                      Cancel
                    </Button>,
                    <Button
                      key="submit"
                      type="primary"
                      onClick={this.handleSignIn}
                    >
                      Sign In
                    </Button>,
                  ]}
                >
                  <Login
                    email={this.state.email}
                    password={this.state.password}
                    onChange={this.handleInputChange}
                  />
                </Modal>
              }
              {
                this.state.visible &&
                <Login
                  email={this.state.email}
                  password={this.state.password}
                  onChange={this.handleInputChange}
                />
              }
              <Button
                size="default"
                onClick={this.handleSignIn}
              >
                Sign In
              </Button>
              <Divider type="vertical" />
              <Link to="/signup">
                <Button
                  size="default"
                  type="primary"
                >
                  Sign Up
                </Button>
              </Link>
            </div>
            : (
              <div className="nav-items">
                <h3 className="name">{this.props.user.name}</h3>
                <Divider type="vertical" />
                <Dropdown overlay={menu} placement="bottomCenter">
                  <Avatar icon="user" />
                </Dropdown>
                {(window.location.pathname === '/' || window.location.pathname === '/signup') &&
                  <Redirect to={`/dashboard/${this.props.user._id}`} />
                }
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default Navbar;
