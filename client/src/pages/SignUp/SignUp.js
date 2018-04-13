import React, { Component } from 'react';
import { Col, Icon, Row } from 'antd';
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
    if (
      this.state.password === this.state.passwordVerify &&
      this.state.password.length > 7) return true;
    return false;
  }


  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.name && this.state.email && this.testPassword()) {
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
  }

  render() {
    return (
      <div className="signup-page">
        <div className="content">
          <Row gutter={48}>
            <Col md={{ span: 12 }}>
              <div className="signupHook">
                <h1 className="heading">Welcome to Momento</h1>
                <h3 className="hookMsg">We are a micro social network based
                  on sharing photos between friends, families, and significant
                  others. Store your photos on our platform so your inner
              circle stays in the loop.
                </h3>
                <p><Icon type="upload" className="icon" />Upload your images</p>
                <p><Icon type="folder-add" className="icon" />Create albums</p>
                <p><Icon type="usergroup-add" className="icon" />Add collaborators to your albums</p>
              </div>
            </Col>
            <Col md={{ span: 12 }}>
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
