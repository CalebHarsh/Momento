import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button, Icon, Form, Input, Tabs, message } from 'antd';
import API from '../../utils/API';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class AddButton extends Component {
  state = {
    visible: false,
    confirmLoading: false,
    album: false,
    img: false,
    name: '',
    description: '',
    tab: '1',
    albumID: '',
  }

  componentWillMount() {
    const page = window.location.pathname;
    const checkPath = (page.includes('dashboard'));
    this.setState({
      album: checkPath,
      img: false,
      name: '',
      description: '',
    });
  }

  showModal = () => {
    this.setState({
      visible: true,
      name: '',
      description: '',
      tab: '1',
      albumID: '',
    });
  }

  uploadPicture = (e) => {
    const file = e.target.files;
    this.setState({
      img: file,
    });
  }

  handleOk = () => {
    this.setState({ confirmLoading: true });
    /* eslint no-undef: 0 */
    const formData = new FormData();
    const page = window.location.pathname;

    if (page.includes('albums')) {
      if (this.state.name && this.state.img) {
        formData.append('author', this.props.user._id);
        formData.append('album', this.props.album._id);
        formData.append('name', this.state.name);
        formData.append('files', this.state.img[0]);
        API.addPhoto(formData)
          .then((res) => {
            if (res.data._id) {
              this.props.changePhoto(res.data);
              message.success('Photo Added');
              this.setState({ visible: false, confirmLoading: false });
            }
          })
          .catch((err) => {
            console.log(err);
            message.error('Error Please Make Sure You Filled Everthing Out');
            this.setState({ visible: false, confirmLoading: false });
          });
      } else {
        message.warning('Please Fill Out All Items');
      }
    } else if (page.includes('dashboard')) {
      if (this.state.tab === '1') {
        if (this.state.name && this.state.description && this.state.img) {
          formData.append('user', this.props.user._id);
          formData.append('name', this.state.name);
          formData.append('description', this.state.description);
          // below is a placeholder of a kitten
          formData.append('files', this.state.img[0]);
          API.addAlbum(formData)
            .then((res) => {
              if (res.data._id) {
                this.props.changeApp({
                  albums: res.data.albums,
                });
                message.success('Album Created');
                this.setState({ visible: false, confirmLoading: false });
              }
            })
            .catch((err) => {
              console.log(err);
              message.error('Error Please Make Sure You Filled Everthing Out');
              this.setState({ visible: false, confirmLoading: false });
            });
        } else {
          message.warning('Please Fill Out All Items');
        }
      } else if (this.state.tab === '2') {
        if (this.state.albumID) {
          API.addFriendsAlbum({
            albumID: this.state.albumID,
            userID: this.props.user._id,
          })
            .then((res) => {
              if (res.data._id) {
                this.props.changeApp({
                  albums: res.data.albums,
                });
                message.success('Friend Album Added');
              }
              this.setState({ visible: false, confirmLoading: false });
            })
            .catch((err) => {
              console.log(err);
              message.error('Error Please Make Sure You Filled Everthing Out');
              this.setState({ visible: false, confirmLoading: false });
            });
        } else {
          message.warning('Please Fill Out All Items');
        }
      }
    }
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleTabChange = (key) => {
    this.setState({
      tab: key,
    });
  }
  render() {
    const { visible, confirmLoading } = this.state;
    const title = (this.state.album ? 'Album Upload' : 'Photo Upload');
    return (
      <div
        style={{ zIndex: 9999 }}
      >
        <Button
          style={
            {
              width: 60,
              height: 60,
              borderRadius: 55,
              position: 'fixed',
              bottom: 0,
              right: 0,
              margin: '2rem',
              zIndex: 1000,
            }
          }
          type="primary"
          onClick={this.showModal}
        >
          <Icon
            style={
              {
                color: 'white',
                fontSize: 32,
                display: 'flex',
                justifyContent: 'center',
              }
            }
            type="plus"
          />
        </Button>
        <Modal
          title={title}
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <Tabs defaultActiveKey="1" onChange={this.handleTabChange}>
            <TabPane closable={false} tab={this.state.album ? 'Create an Album' : ''} key="1">
              <Form layout="vertical">
                <FormItem label="Name It!">
                  <Input
                    onChange={this.handleInputChange}
                    value={this.state.name}
                    type="text"
                    placeholder="Foo Bar"
                    name="name"
                  />
                </FormItem>
                {this.state.album &&
                  <FormItem label="Add a description.">
                    <Input
                      onChange={this.handleInputChange}
                      value={this.state.description}
                      type="text"
                      placeholder="Some more Foo Bar"
                      name="description"
                    />
                  </FormItem>}
                <FormItem label={this.state.album ? 'Upload Cover Photo' : 'Upload New Photo'}>
                  <input type="file" id="inputFile" onChange={this.uploadPicture} name="files" accept=".jpg, .jpeg, .png" />
                </FormItem>
              </Form>
            </TabPane>
            {this.state.album ?
              <TabPane tab="Add Friend's Album" key="2">
                <Form layout="vertical">
                  <FormItem label="Friend's AlbumID">
                    <Input
                      onChange={this.handleInputChange}
                      value={this.state.albumID}
                      type="text"
                      name="albumID"
                      placeholder="Enter Friend's Album ID"
                    />
                  </FormItem>
                </Form>
              </TabPane> : null}
          </Tabs>
        </Modal>
      </div>);
  }
}

export default AddButton;
