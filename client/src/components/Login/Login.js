import React from 'react';
import {Input, Icon} from 'antd';
import 'antd/dist/antd.css';
import './Login.css';

const Login = props => (
  <div className="login-container">
    <Input className="input" placeholder="Username"
      prefix={<Icon type="user"/>}/>
    <Input className="input" placeholder="Password"
      prefix={<Icon type="lock"/>}/>
  </div>
)

export default Login;
