import React, { Component } from "react";
import 'antd/dist/antd.css';
import "./PhotoCard.css";
import { Card, Avatar } from 'antd';
const { Meta } = Card;

const PhotoCard = props => {
  var style = {
  backgroundImage: `url(${props.href})`,
  backgroundSize: "cover"
}
  return(
  <div className="PhotoCard" style={style}>
  </div>
)};

export default PhotoCard;
