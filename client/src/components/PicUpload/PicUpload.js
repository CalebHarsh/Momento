
<<<<<<< HEAD
import React, { Component } from "react";
import 'antd/dist/antd.css';
import './PicUpload.css'
import { Upload, Icon, Modal } from 'antd';

class PicUpload extends Component {

=======
import React, { Component } from 'react';
import { Upload, Icon, Modal } from 'antd';
import 'antd/dist/antd.css';
import './PicUpload.css';


class PicUpload extends Component {
>>>>>>> 78add3240cc5a1dab9da43bb5683313d1d7ec4f3
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => {
    this.setState({ fileList });
    console.log("it's happening");
<<<<<<< HEAD
    var pic = this.state.fileList[0];
=======
    const pic = this.state.fileList[0];
>>>>>>> 78add3240cc5a1dab9da43bb5683313d1d7ec4f3
    this.props.onPicUpload(pic);
  };

  render() {
    const { previewVisible, previewImage, fileList } = this.state;

    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          listType="picture-card"
          fileList={fileList}
<<<<<<< HEAD
          onPreview={this.handlePreview} 
=======
          onPreview={this.handlePreview}
>>>>>>> 78add3240cc5a1dab9da43bb5683313d1d7ec4f3
          beforeUpload={this.props.confirm}
          onChange={this.handleChange}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}
<<<<<<< HEAD
export default PicUpload
=======
export default PicUpload;
>>>>>>> 78add3240cc5a1dab9da43bb5683313d1d7ec4f3

