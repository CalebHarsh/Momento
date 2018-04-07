import React from 'react';
import Navbar from '../../components/Navbar';
import SignupForm from '../../components/SignupForm'
import {Col, Icon, Row} from 'antd';
import 'antd/dist/antd.css';
import './SignUp.css' 

const SignUp = props => (
  <div className="signup-page">
    <div className="content">
      <Row gutter={48}>
        <Col md={{span: 12}}>
          <div className="signupHook">
            <h1 className="heading">Welcome to Momento</h1>
            <h3 className="hookMsg">We are a micro social network based 
              on sharing photos between friends, families, and significant 
              others. Store your photos on our platform so your inner 
              circle stays in the loop.</h3>
              <p><Icon type="upload" className="icon"/>Upload your images</p>
              <p><Icon type="folder-add" className="icon"/>Create albums</p>
              <p><Icon type="usergroup-add" className="icon"/>Add collaborators to your albums</p>
          </div>
        </Col>
        <Col md={{span: 12}}>
          <h1 className="heading">Sign Up</h1>
          <SignupForm />
        </Col>
      </Row>
    </div>
  </div>
)

export default SignUp;