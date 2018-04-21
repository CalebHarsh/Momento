/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */
import React from 'react';
import { Avatar, Card, Modal, List, message, Button } from 'antd';
import 'antd/dist/antd.css';
import './PhotoCard.css';
import Comments from '../Comments';
import Addcom from '../Addcom';
import API from '../../utils/API';

const confirm = Modal.confirm;
const { Meta } = Card;

class PhotoCard extends React.Component {
  state = {
    comments: [],
    visible: false,
    loading: true,
  }

  getComments = photoID => API.getAllComments(photoID)
    .then((res) => {
      if (res.data.length) {
        this.setState({
          comments: res.data,
          loading: false,
        });
      } else {
        this.setState({
          loading: false,
        });
      }
      setTimeout(() => {
        if (this.state.visible) {
          this.getComments(photoID);
        }
      }, 3000);
    })
    .catch((err) => {
      console.log(err);
      message.error('Error Please try Again');
    })

  deleteCom = (photoID, commentID) => {
    API.deleteComment(photoID, commentID)
      .then((res) => {
        this.setState({
          comments: res.data,
        });
        message.warning('Comment Deleted');
      })
      .catch((err) => {
        console.log(err);
        message.error('Error Please try Again');
      });
  }

  addComment = (comment, photo) => {
    if (comment.length) {
      API.addComment({
        text: comment,
        userID: this.props.user._id,
        photoID: photo,
      }).then((res) => {
        this.setState({
          comments: res.data,
        });
        message.success('Comment Added');
      });
    } else {
      message.error('Can Not Add a Blank Comment');
    }
  }

  showDeleteConfirm = (props) => {
    confirm({
      title: 'Are You Sure You Want To Delete This Picture?',
      content: 'Deleting this picture will remove it from this album.\n',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        return props.deletePicture(props.id);
      },
      onCancel() {
      },
    });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
    this.getComments(this.props.id);
  }

  handleOk = () => {
    this.setState({
      visible: false,
      loading: true,
    });
  }

  handleCancel = () => {
    this.setState({
      visible: false,
      loading: true,
    });
  }

  render() {
    return (
      <div className="PhotoCard">
        <Card
          hoverable
          cover={
            <div
              onClick={e => this.showModal(e)}
              style={
                {
                  backgroundImage: `url(${this.props.src})`,
                  width: 'auto',
                  height: '200px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }
              }
            />}
        >
          <Meta
            avatar={<Avatar icon="user" />}
            title={this.props.title}
          />

        </Card>

        <Modal
          title={this.props.title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          className="photoModal"
          width="1050"
          footer={[
            <Button
              key="delete"
              type="danger"
              onClick={() => {
                this.showDeleteConfirm(this.props);
              }}
            >
              Delete Picture
            </Button>,
            <Button key="close" type="primary" onClick={this.handleOk}>
              Close
            </Button>,
          ]}
        >
          <div className="popUp">
            <div className="photoContainer">
              <img id="Picture" alt={this.props.title} src={this.props.src} />
            </div>
            <div className="infoContainer">
              <div className="comDisplay">
                <List
                  grid={{
                      gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3,
                    }}
                  dataSource={this.state.comments}
                  loading={this.state.loading}
                  locale={
                      { emptyText: 'No Comments' }
                    }
                  renderItem={item => (
                      item._id ?
                        <Comments
                          hoverable="ture"
                          id={item._id}
                          author={item.author.name}
                          comment={item.text}
                          delete={this.deleteCom}
                          photoID={this.props.id}
                        /> :
                        message.warning('Photo is Deleted Please Refresh the Page')
                    )
                    }
                />
              </div>
              <Addcom
                photoID={this.props.id}
                addComment={this.addComment}
              />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default PhotoCard;
