import React, { Component } from "react";
import 'antd/dist/antd.css';
import "./PhotoCard.css";
import { Card, Avatar } from 'antd';
const { Meta } = Card;
var Backgorund = "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
var style = {
  backgroundImage: `url(${Backgorund})`,
  backgroundSize: "cover"
}

const PhotoCard = props => (
  <div className="PhotoCard" style={style}>
  </div>
);

export default PhotoCard;
