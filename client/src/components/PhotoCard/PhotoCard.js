/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */
import React from 'react';
import { Avatar, Card, Modal, Form, Input } from 'antd';
import 'antd/dist/antd.css';
import './PhotoCard.css';
import Comments from '../Comments/Comments.js';
const FormItem = Form.Item;

const { Meta } = Card;

function info(props) {
  Modal.info({
<<<<<<< HEAD

    iconType: "delete",
    width: "1050",
    className: "photoModal",
    cancelText: 'Delete',
=======
    title: `${props.title}`,
    iconType: 'camera-o',
    width: '950',
    className: 'photoModal',
>>>>>>> 85a513139c4062fbb5c5f85194caf5ed3411fe16
    content: (
      <div className="popUp">
        <div className="photoContainer">
<<<<<<< HEAD
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
            <div className='addCom'>
            <Form>
              <FormItem
                wrapperCol={{ span: 22 }}
              ><Input placeholder= 'Add a comment!' /></FormItem>
            </Form>
          </div>
=======
          <img id="Picture" alt={props.name} src={props.src} />
        </div>
        <div className="infoContainer">
          <div>
            <h2>Comments</h2>
          </div>
          <div />
>>>>>>> 85a513139c4062fbb5c5f85194caf5ed3411fe16
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
