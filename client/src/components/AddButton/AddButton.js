import React, {Component} from "react";
import 'antd/dist/antd.css';
import {Modal, Button, Icon, Form, Input} from 'antd';
import PicUpload from "../PicUpload/PicUpload.js";
const FormItem = Form.Item;

class AddButton extends Component {
  componentWillMount() {
    var page = window.location.pathname;
    console.log(page, "this page");
    var checkPath = (page === "/photos" ? false : true);
    this.setState({
      album: checkPath
    });
    console.log(this.state.album, "checkPath");
  }
  state = {
    visible: false,
    confirmLoading: false,
    album: false
  }
  showModal = () => {
    this.setState({visible: true});
  }
  handleOk = () => {
    this.setState({confirmLoading: true});
    setTimeout(() => {
      this.setState({visible: false, confirmLoading: false});
    }, 1000);

  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({visible: false});
  }
  render() {
    const {visible, confirmLoading} = this.state;
    var title = (this.state.album ? "Album Upload" : "Photo Upload");
    var name = (this.state.album ? "album" : "photo");
    var hidden = (this.state.album ? "hidden" : "show")
    return (<div>
      <Button style={{width: 60, height: 60, borderRadius: 55, position: "fixed", bottom: 0, right: 0, margin: "2rem"}} type="primary" onClick={this.showModal}>
        <Icon style={{color: "white", fontSize: 32, display: "flex", justifyContent: "center"}} type="plus" />
      </Button>
      <Modal title= {title} visible={visible} onOk={this.handleOk} confirmLoading={confirmLoading} onCancel={this.handleCancel}>
        <Form layout="vertical">
          <FormItem label="Name It!">
            <Input type="text" placeholder="Foo Bar" name={name + "name"}/>
          </FormItem>
          <FormItem label="Add a description.">
            <Input type="text" placeholder="Some more Foo Bar" name={name + "description"}/>
          </FormItem>
        </Form>
        <div style={{visibility: hidden}}>
          <PicUpload />
        </div>
      </Modal>
    </div>);
  }
}

export default AddButton
