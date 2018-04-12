import React from "react";
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css';
import "./Album-Square.css";
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

// cardImageStyles = {
//   backgroundImage: `url(${props.src})`,
//   width: "200px",
//   height: "200px",
//   backgroundSize: "cover",
//   backgroundPosition: "center"
// }

const Square = props => (

  <Link to="/photos">
    <Card
      hoverable
      cover={<div style={{backgroundImage: `url(${props.src})`, width: "auto", height: "200px", backgroundSize: 'cover', backgroundPosition: 'center'}}></div>}
      actions={[<Icon type="setting" />, <Icon type="edit" />]}
    >
      <Meta
        avatar={<Avatar icon="user" />}
        title={props.title}
        description={props.description}
      />
    </Card>
  </Link>
/*
  <Card
    hoverable
    cover={<a href={`/albums/${props.id}`}><div style={{backgroundImage: `url(${props.src})`, width: "auto", height: "200px", backgroundSize: 'cover', backgroundPosition: 'center'}}></div></a>}
    actions={[<Icon type="setting" />, <Icon type="edit" />]}
  >
    <Meta
      avatar={<Avatar icon="user" />}
      title={props.title}
      description="This is the description"
    />
  </Card>
*/
);

export default Square;
