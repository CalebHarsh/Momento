import React from 'react';
import { Avatar, Card, Modal } from 'antd';
import 'antd/dist/antd.css';
import './PhotoCard.css';

const { Meta } = Card;

function info(props) {
  Modal.info({
    title: 'This is a notification message',
    content: (
      <div>
        <img src={props.src} alt="Cool-Photo-Bro" />
      </div>
    ),
    onOk() { },
  });
}

const PhotoCard = props => (
  <div className="PhotoCard">
    <Card
      hoverable
      cover={
        <div
          onClick={() => info(props)}
          style={
            {
              backgroundImage: `url(${props.src})`,
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
        title={props.title}
      />

    </Card>
  </div>
);

export default PhotoCard;
