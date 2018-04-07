import React, { Component } from "react";
import 'antd/dist/antd.css';
import "./Album-Square.css";
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

const Square = props => (
  <Card
    hoverable
    cover={<a href={`/albums/${props.id}`}> <img alt="example" src={props.src} /> </a>}
    actions={[<Icon type="setting" />, <Icon type="edit" />]}
  >
    <Meta
      avatar={<Avatar icon="user" />}
      title={props.title}
      description="This is the description"
    />
  </Card>
);

export default Square;
