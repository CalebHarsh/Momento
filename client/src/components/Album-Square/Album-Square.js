import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Avatar } from 'antd';
import 'antd/dist/antd.css';
import './Album-Square.css';

const { Meta } = Card;
const Square = props => (

  <Link to="/photos">
    <Card
      hoverable
      cover={<div style={{
 backgroundImage: `url(${props.src})`, width: 'auto', height: '200px', backgroundSize: 'cover', backgroundPosition: 'center',
}}
      />}
      actions={[<Icon type="setting" />, <Icon type="edit" />]}
    >
      <Meta
        avatar={<Avatar icon="user" />}
        title={props.title}
        description={props.description}
      />
    </Card>
  </Link>
);

export default Square;
