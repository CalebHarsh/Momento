import React, {Component} from "react";
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
const confirm = Modal.confirm;

function Delete() {
  confirm({
    title: 'Do you want to delete this item?',
    content: 'This item will be permanently deleted along with all contents.',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {},
  });
}

export default Delete
