import React, { Component } from "react";
import 'antd/dist/antd.css';
import './PicUpload.css'
import { Upload, Icon, Modal } from 'antd';

<<<<<<< HEAD
class PicUpload extends React.Component {

  constructor(props) {
      super(props);

    }

=======
class PicUpload extends Component {
>>>>>>> 12fc5627e8b38e6c33f88cfa82a89336170d02f4
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
    var pic = this.state.fileList[0].originFileObj;
    this.props.onPicUpload(pic);
  };

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    console.log(fileList, "fileList");
    console.log(this.props.postReq, "props");
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
          onPreview={this.handlePreview}
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
export default PicUpload
