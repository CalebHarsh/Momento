import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
// import API from '../../utils/API';

const FormItem = Form.Item;

class Addcom extends Component {
  state = {
    comment: '',
  }
  handleComChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  addComment = () => {
    this.props.addComment(this.state.comment, this.props.photoID);
    this.setState({
      comment: '',
    });
  }

  render() {
    return (
      <div className="addCom">
        <Form style={{
          float: 'Left',
          marginTop: '15px',
          marginRight: 10,
          width: 210,
        }}
        >
          <FormItem>
            <Input onChange={this.handleComChange} value={this.state.comment} name="comment" placeholder="Add a comment!" />
          </FormItem>
        </Form>
        <Button onClick={this.addComment} style={{ marginTop: '23px' }} type="primary" icon="check" shape="circle" size="small" />
      </div>
    );
  }
}

export default Addcom;
