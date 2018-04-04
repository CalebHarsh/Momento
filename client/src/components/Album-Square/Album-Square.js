import React, { Component } from "react";
import 'antd/dist/antd.css';
import "./Album-Square.css";
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

const Square = props => (
  <Card

    style={{width: "220px"}}
    cover={<img alt="example" src="https://az616578.vo.msecnd.net/files/2016/04/22/635969539404389959-525985018_chicken_fingers_page-bg_8285.jpg" />}
    actions={[<Icon type="setting" />, <Icon type="edit" />]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Chicken Tenders"
      description="This is the description"
    />
  </Card>
);

export default Square;
