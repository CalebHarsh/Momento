import React, {Component} from "react";
import 'antd/dist/antd.css';
import "./AddButton.css";
import {Icon} from 'antd';
import SignupForm from "../SignupForm";

const AddButton = props => (

  <div className="button" onClick={props.onClick}>
      <Icon id="plus" style={{
          color: "#fefefe",
          lineHeight: 1.6
        }} type="plus"/>
    </div>

);

export default AddButton;
