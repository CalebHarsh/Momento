import React, { Component } from "react";
import 'antd/dist/antd.css';
import "./Album-Square.css";
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

const Square = props => (
  <Card
    data-id={props.id}
    style={{width: "100%"}}
    cover={<img alt="example" src={props.cover} />}
    actions={[<Icon type="setting" />, <Icon type="edit" />]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title={props.title}
      description="This is the description"
    />
  </Card>
);

export default Square;
