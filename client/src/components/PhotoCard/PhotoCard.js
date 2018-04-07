import React from "react";
import {Avatar, Card} from 'antd';
import 'antd/dist/antd.css';
import "./PhotoCard.css";

const {Meta} = Card;



const PhotoCard = props => (
  <div className="PhotoCard">
    <Card
      hoverable
      cover={<img alt={props.title} src={props.src}/>}
    >
      <Meta 
        avatar={<Avatar icon="user" />}
        title={props.title}
      />
      
    </Card>
  </div>
);

export default PhotoCard;
