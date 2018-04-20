import React from 'react';
import { Button, Form, Input } from 'antd';
import 'antd/dist/antd.css';
import './SignupForm.css';

const FormItem = Form.Item;


const SignupForm = props => (
  <div>
    <Form>
      <FormItem
        label="Name"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 12 }}
      >
        <Input
          type="text"
          placeholder="Full Name"
          name="name"
          value={props.name}
          onChange={props.handleInputChange}
        />
      </FormItem>
      <FormItem
        label="Email"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 12 }}
      >
        <Input
          type="text"
          placeholder="example@email.com"
          name="email"
          value={props.email}
          onChange={props.handleInputChange}
        />
      </FormItem>
      <FormItem
        label="Password"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 12 }}
      >
        <Input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={props.password}
          onChange={props.handleInputChange}
        />
      </FormItem>
      <FormItem
        label="Verify Password"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 12 }}
      >
        <Input
          type="password"
          name="passwordVerify"
          placeholder="Re-Enter Password"
          value={props.passwordVerify}
          onChange={props.handleInputChange}
        />
      </FormItem>
      <FormItem
        wrapperCol={
          {
            lg: {
              span: 12,
              offset: 8,
            },
            md: {
              span: 12,
              offset: 8,
            },
            sm: {
              span: 24,
              offset: 0,
            },
          }
        }
      >
        <Button
          type="primary"
          htmlType="submit"
          onClick={props.handleFormSubmit}
        >
          Submit
        </Button>
      </FormItem>
    </Form>
  </div>
);


export default SignupForm;
