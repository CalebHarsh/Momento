import React from 'react'
import Navbar from '../../components/Navbar'
import {Affix, Button, Col, Form, Icon, Input, Row} from 'antd'
import 'antd/dist/antd.css';
import './SignUp.css'

const FormItem = Form.Item;
const SignUp = props => (
  <div className="landing-page">
    <Affix>
      <Navbar />
    </Affix>
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
          <Form>
            <FormItem
              label="Name"
              labelCol={{span: 5}}
              wrapperCol={{span: 12}}
              >
                <Input type="text" placeholder="Full Name"/>
            </FormItem>
            <FormItem
              label="Email"
              labelCol={{span: 5}}
              wrapperCol={{span: 12}}
              >
                <Input type="text" placeholder="example@email.com"/>
            </FormItem>
            <FormItem
              label="Password"
              labelCol={{span: 5}}
              wrapperCol={{span: 12}}
              >
                <Input type="password"/>
            </FormItem>
            <FormItem
              label="Verify Password"
              labelCol={{span: 5}}
              wrapperCol={{span: 12}}
              >
                <Input type="password"/>
            </FormItem>
            <FormItem
              wrapperCol={{ span: 12, offset: 5 }}
              >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </FormItem>
          </Form>
        </Col>
      </Row>
    </div>
  </div>
)

export default SignUp;