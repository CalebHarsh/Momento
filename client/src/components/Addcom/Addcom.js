import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';

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
          marginRight: 5,
          width: 250,
        }}
        >
          <FormItem>
            <Input onChange={this.handleComChange} onKeyUp={e => (e.keyCode.toString() === '13' ? this.addComment() : null)} value={this.state.comment} name="comment" placeholder="Add a comment!" />
          </FormItem>
        </Form>
        <Button onClick={this.addComment} style={{ marginTop: '23px' }} type="primary" icon="check" shape="circle" size="small" />
      </div>
    );
  }
}

export default Addcom;
