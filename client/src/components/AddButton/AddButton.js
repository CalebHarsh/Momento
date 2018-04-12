import React, { Component } from "react";
import 'antd/dist/antd.css';
import { Modal, Button, Icon, Form, Input } from 'antd';
import PicUpload from "../PicUpload/PicUpload.js";
import API from "../../utils/API.js"
const FormItem = Form.Item;

class AddButton extends Component {

  state = {
    visible: false,
    confirmLoading: false,
    album: false,
    img: {},
    name: "",
    description: ""
  }

  componentWillMount() {
    var page = window.location.pathname;
    var checkPath = (page.includes("dashboard"));
    console.log(page, "this page", checkPath);
    this.setState({
      album: checkPath,
      img: {},
      name: "",
      description: ""
    });
  }

  uploadPhoto = (picture) => {
    console.log(picture, "this function is passing through");
  }

  showModal = () => {
    this.setState({
      visible: true,
      img: {},
      name: "",
      description: ""
    });
  }

  handleOk = () => {
    this.setState({ confirmLoading: true });
    setTimeout(() => {
      this.setState({ visible: false, confirmLoading: false });
    }, 1000);

    var page = window.location.pathname;
    console.log(page);
    if (page.includes("albums")) {
      var uploadPicture = {
        image: this.state.img,
        name: this.state.name,
        description: this.state.description
      }
      API.addPhoto(uploadPicture)
        .then(res => {
          if(res.data._id) console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        });
    } else {
      var createAlbum = {
        user: this.props.user._id,
        name: this.state.name,
        description: this.state.description,
        cover: "https://secure.i.telegraph.co.uk/multimedia/archive/03290/kitten_potd_3290498k.jpg"
      }
      API.addAlbum(createAlbum)
        .then(res => {
          if(res.data._id)this.props.changeApp({
            "albums": res.data.albums
          })
        })
        .catch(err => {
          console.log(err)
        });
    };
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({ visible: false });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { visible, confirmLoading } = this.state;
    var title = (this.state.album ? "Album Upload" : "Photo Upload");
    var hidden = (this.state.album ? "hidden" : "show")
    return (<div style={{ zIndex: 9999 }}>
      <Button style={{ width: 60, height: 60, borderRadius: 55, position: "fixed", bottom: 0, right: 0, margin: "2rem" }} type="primary" onClick={this.showModal}>
        <Icon style={{ color: "white", fontSize: 32, display: "flex", justifyContent: "center" }} type="plus" />
      </Button>
      <Modal title={title} visible={visible}
        onOk={this.handleOk} confirmLoading={confirmLoading}
        onCancel={this.handleCancel}>
        <Form layout="vertical">
          <FormItem label="Name It!">
            <Input onChange={this.handleInputChange}
              value={this.state.name} type="text" placeholder="Foo Bar"
              name={"name"} />
          </FormItem>
          <FormItem label="Add a description.">
            <Input onChange={this.handleInputChange}
              value={this.state.description}
              type="text" placeholder="Some more Foo Bar"
              name={"description"} />
          </FormItem>
        </Form>
        <div style={{ visibility: hidden }}>
          <PicUpload
            onPicUpload={this.uploadPhoto}
          />
        </div>
      </Modal>
    </div>);
  }
}

export default AddButton
