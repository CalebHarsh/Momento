import React from 'react';
import { Avatar, Card, Modal, Form, Input } from 'antd';
import 'antd/dist/antd.css';
import './PhotoCard.css';
import Comments from '../Comments/Comments.js';
const FormItem = Form.Item;

const { Meta } = Card;

function info(props) {
  Modal.info({

    iconType: "delete",
    width: "1050",
    className: "photoModal",
    cancelText: 'Delete',
    content: (
      <div className= "popUp">
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
