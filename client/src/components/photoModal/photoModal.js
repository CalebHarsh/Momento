import React, {Component} from "react";
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

function photoModal() {
  Modal.photoModal({
    content: (
      <div className= "popUp">
        <div className="photoContainer">
          <img id="Picture" alt={this.item.name} src={this.item.href}> </img>
        </div>
        <div className="infoContainer">
          <div>
            <h2>{this.item.name}</h2>
          </div>
          <div>

          </div>
        </div>
      </div>
    ),
    onOk() {},
  });
}

export default photoModal;
