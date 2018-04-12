import React, {Component} from "react";
import 'antd/dist/antd.css';
import {Modal, Button, Icon, Form, Input} from 'antd';
import PicUpload from "../PicUpload/PicUpload.js";
import API from "../../utils/API.js"
const FormItem = Form.Item;

class AddButton extends React.Component {



  componentWillMount() {
    var page = window.location.pathname;
    console.log(page, "this page");
    var checkPath = (page === "/photos" ? false : true);
    this.setState({
      album: checkPath
    });
    console.log(this.state.album, "checkPath");
  }

  uploadPhoto = (picture) => {
    console.log(picture, "this function is passing through");
  }

  state = {
    visible: false,
    confirmLoading: false,
    album: false,
    value: "",
    img: {},
    name: "",
    description: ""
  }

  showModal = () => {
    this.setState({state: this.state.visible = true});
  }
  handleOk = () => {
    this.setState({confirmLoading: true});
    setTimeout(() => {
      this.setState({visible: false, confirmLoading: false});
    }, 1000);

    var page = window.location.pathname;
    console.log(page);
    if (page.includes("album")) {
      var uploadPicture = {
        image: this.state.img,
        name: this.state.name,
        description: this.state.description
      }
      API.addPhoto(uploadPicture);
    } else {
      var createAlbum = {      
        name: this.state.name,
        description: this.state.description
      }
      API.addAlbum(createAlbum);
    };
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({visible: false});
  }

  handleChangeName = (event) => {
   this.setState({name: event.target.value});
   console.log(this.state.name, "hello");
 }
 handleChangeDescription = (event) => {
  this.setState({description: event.target.value});
  console.log(this.state.description, "hello");
}

  render() {
    const {visible, confirmLoading} = this.state;
    var title = (this.state.album ? "Album Upload" : "Photo Upload");
    var name = (this.state.album ? "album" : "photo");
    var hidden = (this.state.album ? "hidden" : "show")
    return (<div style={{zIndex: 9999}}>
      <Button style={{width: 60, height: 60, borderRadius: 55, position: "fixed", bottom: 0, right: 0, margin: "2rem"}} type="primary" onClick={this.showModal}>
        <Icon style={{color: "white", fontSize: 32, display: "flex", justifyContent: "center"}} type="plus" />
      </Button>
      <Modal title= {title} visible={visible} onOk={this.handleOk} confirmLoading={confirmLoading} onCancel={this.handleCancel}>
        <Form layout="vertical">
          <FormItem label="Name It!">
            <Input onChange={this.handleChangeName} value={this.state.name} type="text" placeholder="Foo Bar" name={name + "name"}/>
          </FormItem>
          <FormItem label="Add a description.">
            <Input onChange={this.handleChangeDescription} value={this.state.description} type="text" placeholder="Some more Foo Bar" name={name + "description"}/>
          </FormItem>
        </Form>
        <div style={{visibility: hidden}}>
          <PicUpload
            onPicUpload = {this.uploadPhoto}
          />
        </div>
      </Modal>
    </div>);
  }
}

export default AddButton
