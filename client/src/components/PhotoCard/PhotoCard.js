/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */
import React from 'react';
import { Avatar, Card, Modal, List, message } from 'antd';
import 'antd/dist/antd.css';
import './PhotoCard.css';
import Comments from '../Comments/Comments';
import Addcom from '../Addcom/Addcom';
import API from '../../utils/API';

const { Meta } = Card;

const info = (props) => {
  Modal.info({
    title: `${props.title}`,
    iconType: 'camera-o',
    width: '950',
    className: 'photoModal',
    content: (
      <div className="popUp">
        <div className="photoContainer">
          <img id="Picture" alt={props.title} src={props.src} />
        </div>
        <div className="infoContainer">
          <div className="comDisplay">
            <Card
              title="Our Beautiful Baby Tender"
              bordered={false}
              loading={false}
              style={{
                height: '350px',
                width: '350px',
                overflowY: 'auto',
              }}
            >
              <List
                grid={{
                  gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3,
                }}
                dataSource={props.comments}
                renderItem={item => (
                  <Comments
                    hoverable="ture"
                    id={item._id}
                    author={item.author.name}
                    comment={item.text}
                    delete={props.deleteCom}
                    photoID={props.id}
                  />
                )}
              />
            </Card>
          </div>
          <Addcom
            photoID={props.id}
            addComment={props.addComment}
          />
        </div>
      </div>
    ),
    onOk() { },
  });
};

class PhotoCard extends React.Component {
  state = {
    comments: [],
  }

  componentDidMount() {
    this.getComments(this.props.id);
  }

  getComments = photoID => API.getAllComments(photoID)
    .then((res) => {
      console.log(res.data);
      this.setState({
        comments: res.data,
      });
      return null;
    })
    .catch((err) => {
      console.log(err);
    })

  deleteCom = (photoID, commentID) => {
    console.log('deleting comment');
    API.deleteComment(photoID, commentID)
      .then((res) => {
        this.setState({
          comments: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
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
        console.log(res.data);
      });
    } else {
      message.error('Can Not Add a Blank Comment');
    }
  }

  render() {
    return (
      <div className="PhotoCard">
        <Card
          hoverable
          cover={
            <div
              onClick={() =>
                info({
                  comments: this.state.comments,
                  id: this.props.id,
                  title: this.props.title,
                  src: this.props.src,
                  addComment: this.addComment,
                  deleteCom: this.deleteCom,
                  deletePicure: this.props.deletePicure,
                })
              }
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
      </div>
    );
  }
}

export default PhotoCard;
