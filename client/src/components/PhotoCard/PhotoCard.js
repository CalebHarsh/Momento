/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */
import React from 'react';
import { Avatar, Card, Modal, Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './PhotoCard.css';
import Comments from '../Comments/Comments.js';
import Addcom from '../Addcom/Addcom.js'


const { Meta } = Card;

function info(props) {
  Modal.info({
    iconType: 'delete',
    width: '950',
    className: 'photoModal',
    content: (
      <div className="popUp">
        <div className="photoContainer">
          <img id="Picture" alt={props.title} src={props.src}/>
        </div>
        <div className="infoContainer">
          <div className='comDisplay'>
            <Card
              title="Our Beautiful Baby Tender"
              bordered={false}
              loading={false}
              style={{
                height: '350px',
                width: '350px',
                overflowY: 'auto'
              }}
              >
              <Comments
              hoverable={'ture'}
                title= {props.title}
                comment= {props.title}
              />
            </Card>
            </div>
            <Addcom />
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
