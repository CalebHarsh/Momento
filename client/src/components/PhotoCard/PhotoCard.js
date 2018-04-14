/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */
import React from 'react';
import { Avatar, Card, Modal } from 'antd';
import 'antd/dist/antd.css';
import './PhotoCard.css';

const { Meta } = Card;

function info(props) {
  Modal.info({
    title: `${props.name}`,
    iconType: 'camera-o',
    width: '950',
    className: 'photoModal',
    content: (
      <div className="popUp">
        <div className="photoContainer">
          <img id="Picture" alt={props.name} src={props.src} />
        </div>
        <div className="infoContainer">
          <div>
            <h2>Comments</h2>
          </div>
          <div />
        </div>
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
