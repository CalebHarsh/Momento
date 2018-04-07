import React, { Component } from "react";
import 'antd/dist/antd.css';
import "./Album-Square.css";
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

const Square = props => (
  <Card
    hoverable
    cover={<img alt="example" src={props.src} />}
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
