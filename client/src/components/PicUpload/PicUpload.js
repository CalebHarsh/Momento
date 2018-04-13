import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Upload, Icon, Modal } from 'antd';

class PicUpload extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/4/8/4/WU1004H_Chicken-Nuggets_s4x3.jpg.rend.hgtvcom.616.462.suffix/1428675741536.jpeg',
    }],
  };

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => { this.setState({ fileList }); console.log("it's happening"); };

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    console.log(fileList, 'fileList');
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          action="//jsonplaceholder.typicode.com/posts/"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}
export default PicUpload;
