import React, { Component } from 'react';
import { Col, Icon, Row, message } from 'antd';
import 'antd/dist/antd.css';
import SignupForm from '../../components/SignupForm';
import './SignUp.css';
import API from '../../utils/API';

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordVerify: '',
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  }

  testPassword = () => {
    if (this.state.password.length <= 7) {
      message.error('Password Must be at least 8 characters long');
      return false;
    } else if (!/[A-Z]/.test(this.state.password)) {
      message.error('Password must contain at least 1 uppercase Letter');
      return false;
    } else if (!/[a-z]/.test(this.state.password)) {
      message.error('Password must contain at least 1 lowercase Letter');
      return false;
    } else if (!/\d/.test(this.state.password)) {
      message.error('Password must contain at least 1 Number');
      return false;
    } else if (this.state.password !== this.state.passwordVerify) {
      message.error("Passwords Don't Match");
      return false;
    }
    return true;
  }


  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.name && this.state.email && this.state.password && this.state.passwordVerify) {
      if (this.testPassword()) {
        API.createNewUser({
          name: this.state.name.trim(),
          email: this.state.email.trim(),
          password: this.state.password.trim(),
        })
          .then((res) => {
            if (res.data._id) {
              this.props.changeApp({
                isLoggedIn: true,
                user: res.data,
                albums: res.data.albums,
              });
            }
          });
      }
    } else {
      message.error('Please Fill Out All Items');
    }
  }

  render() {
    return (
      <div className="signup-page">
        <div className="content">
          <Row gutter={48}>
            <Col lg={{ span: 12 }} md={{ span: 24 }}>
              <div className="topSection">
                <div className="signupHook">
                  <h1 className="heading">Welcome to Momento</h1>
                  <h3 className="hookMsg">We are a micro social network based
                    on sharing photos between friends, families, and significant
                    others. Store your photos on our platform so your inner
                circle stays in the loop.
                  </h3>
                  <div className="icon-set">
                    <p><Icon type="upload" className="icon" />Upload your images</p>
                    <p><Icon type="folder-add" className="icon" />Create albums</p>
                    <p><Icon type="usergroup-add" className="icon" />Add collaborators to your albums</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={{ span: 12 }} md={{ span: 24 }}>
              <h1 className="heading">Sign Up</h1>
              <SignupForm
                name={this.state.name}
                email={this.state.email}
                password={this.state.password}
                passwordVerify={this.state.passwordVerify}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default SignUp;
