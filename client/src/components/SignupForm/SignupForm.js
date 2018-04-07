import React, {Component} from 'react';
import  { Redirect } from 'react-router-dom'
import {Button, Col, Form, Icon, Input, Row} from 'antd';
import 'antd/dist/antd.css';
import './SignupForm.css';
import API from '../../utils/API';

const FormItem = Form.Item;

class SignupForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordVerify: ''
  }
  
  // handle functions
  
  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    
    this.setState({
      [name]: value
    });
  }
  
  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.name && this.state.email && this.state.password && this.state.passwordVerify){
      API.createNewUser({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
      .then(res =>{ 
      this.setState({name: "", email: "", password: "", passwordVerify: ""})
/*
      this.props.login()
      window.location.pathname = `/dashboard${res.data._id}`
*/
      })
    } else {
      alert('fill the form out, idiot!')
    }
  }
  render(){
    return(
      <div>
        <Form>
          <FormItem
            label="Name"
            labelCol={{span: 5}}
            wrapperCol={{span: 12}}
            >
            <Input 
              type="text" 
              placeholder="Full Name" 
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            </FormItem>
            <FormItem
              label="Email"
              labelCol={{span: 5}}
              wrapperCol={{span: 12}}
            >
              <Input 
                type="text" 
                placeholder="example@email.com" 
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </FormItem>
            <FormItem
              label="Password"
              labelCol={{span: 5}}
              wrapperCol={{span: 12}}
            >
                <Input 
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
            </FormItem>
            <FormItem
              label="Verify Password"
              labelCol={{span: 5}}
              wrapperCol={{span: 12}}
            >
              <Input 
                type="password"
                name="passwordVerify"
                value={this.state.passwordVerify}
                onChange={this.handleInputChange}
              />
            </FormItem>
            <FormItem
              wrapperCol={{ span: 12, offset: 5 }}
            >
              <Button 
                type="primary" 
                htmlType="submit"
                onClick={this.handleFormSubmit}
                >
                Submit
              </Button>
            </FormItem>
        </Form>
      </div>
    )
  }
}

export default SignupForm;