import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Avatar, Dropdown, Menu, Button } from 'antd';
import 'antd/dist/antd.css';
import './Album-Square.css';

const { Meta } = Card;

function handleMenuClick(e) {
  console.log(e.key);
}

const menu = (
  <Menu onClick={handleMenuClick} >
    <Menu.Item key="1">Share</Menu.Item>
    <Menu.Item key="2">Delete</Menu.Item>
  </Menu>
);


const Square = props => (


  <Card
    hoverable
    cover={
      <Link to={`/albums/${props.id}`}>
        <div style={{
          backgroundImage: `url(${props.src})`,
          width: 'auto',
          height: '200px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        />
      </Link>}
    actions={[<Icon type="setting" />,
      <Dropdown
        overlay={menu}
        placement="topCenter"
      >
        <a><Icon type="edit" /></a>
      </Dropdown>]}
  >
    <Meta
      avatar={<Avatar icon="user" />}
      title={props.title}
      description={props.description}
    />
  </Card>

);

export default Square;
