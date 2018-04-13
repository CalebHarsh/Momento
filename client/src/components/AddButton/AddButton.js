
import React, { Component } from "react";
import 'antd/dist/antd.css';
import { Modal, Button, Icon, Form, Input, Upload } from 'antd';
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
    description: "",

  }

  componentWillMount() {
    var page = window.location.pathname;
    var checkPath = (page.includes("dashboard"));
    this.setState({
      album: checkPath,
      img: {},
      name: "",
      description: "",
    });
  }

  uploadPhoto = (picture) => {

    this.setState({
      img: picture
    })
  }

  showModal = () => {
    this.setState({
      visible: true,
      img: {},
      name: "",
      description: ""
    });
  }

  normFile = (e) => {
   const file = e.target.files

   this.setState({
     img: file
   })
  }

  handleOk = () => {
    this.setState({ confirmLoading: true });
    setTimeout(() => {
      this.setState({ visible: false, confirmLoading: false });
    }, 1000);

    let formData = new FormData()
    var page = window.location.pathname;

    if (page.includes("albums")) {
      formData.append("author", this.props.user._id)
      formData.append("album", this.props.album._id)
      formData.append("name", this.state.name)
      formData.append("description", this.state.description)
      formData.append("files", this.state.img[0])
      API.addPhoto(formData)
        .then(res => {
          if (res.data._id) this.props.changePhoto(res.data)
        })
        .catch(err => {
          console.log(err)
        });
    } else {
      formData.append("user", this.props.user._id)
      formData.append("name", this.state.name)
      formData.append("description", this.state.description)
      formData.append("cover", "https://secure.i.telegraph.co.uk/multimedia/archive/03290/kitten_potd_3290498k.jpg")
      API.addAlbum(formData)
        .then(res => {
          if (res.data._id) this.props.changeApp({
            "albums": res.data.albums
          })
        })
        .catch(err => {
          console.log(err)
        });
    };
  }
  handleCancel = () => {
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
          <div style={{ visibility: hidden }}>
            <FormItem >

              <input type="file" id="inputFile" onChange={this.normFile} name="files" />
              {/* <Upload name="files" action={null} onChange={e => console.log(e.target.files)} listType="picture">
                <Button>
                  <Icon type="upload" /> Click to upload
              </Button>
              </Upload> */}
              {/* <PicUpload
            confirm={this.state.confirmLoading}
            onPicUpload={this.uploadPhoto}
          /> */}
            </FormItem >
          </div>
        </Form>
      </Modal>
    </div>);
  }
}

export default AddButton

