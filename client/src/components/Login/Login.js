import React from 'react';
import {Input, Icon} from 'antd';
import 'antd/dist/antd.css';
import './Login.css';

const Login = props => (
  <div className="login-container login">
    <Input className="input" placeholder="Email" type="text"
      prefix={<Icon type="user"/>}/>
    <Input className="input" placeholder="Password" type="password"
      prefix={<Icon type="lock"/>}/>
  </div>
)

export default Login;
