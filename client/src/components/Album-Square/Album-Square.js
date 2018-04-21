import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Avatar, Dropdown, Menu, Modal, Button } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import 'antd/dist/antd.css';
// import API from '../../utils/API';
import './Album-Square.css';

const { Meta } = Card;
const confirm = Modal.confirm;

const Square = (props) => {
  function showDeleteConfirm() {
    confirm({
      title: 'Are You Sure You Want To Remove This Album?',
      content: 'If you are the last person to own this Album it will disappear forever.',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        return props.onDelete(props.id);
      },
      onCancel() {
      },
    });
  }

  function handleMenuClick(e) {
    if (e.key === '2') {
      showDeleteConfirm();
    }
  }


  const menu = (
    <Menu onClick={handleMenuClick} >
      <CopyToClipboard
        text={props.id}
        onCopy={props.onCopy}
      >
        <Menu.Item value={props.id} key="1">Share</Menu.Item>
      </CopyToClipboard>
      <Menu.Item value={props.id} key="2">Delete</Menu.Item>
    </Menu>
  );

  return (
    <Card
      hoverable
      cover={
        <Link to={`/albums/${props.id}`}>
          <div style={{
            backgroundImage: `url(${props.src})`,
            width: 'auto',
            height: '200px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          />
        </Link>}
      actions={[
        <Dropdown
          trigger={['click']}
          overlay={menu}
          placement="topCenter"
        >
          <Button><Icon type="edit" /></Button>
        </Dropdown>]}
    >
      <Meta
        avatar={<Avatar icon="user" />}
        title={props.title}
        description={props.description}
      />
    </Card>

  );
};

export default Square;
