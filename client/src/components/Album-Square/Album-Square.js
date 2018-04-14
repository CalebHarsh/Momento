import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Avatar, Dropdown, Menu } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import 'antd/dist/antd.css';
import API from '../../utils/API';
import './Album-Square.css';

const { Meta } = Card;

function handleShare(id) {
  console.log('share', id);
}

function handleDelete(id) {
  API.deleteAlbum(id);
}

function handleMenuClick(e) {
  if (e.key === '1') handleShare(e.item.props.value);
  else handleDelete(e.item.props.value);
}

const Square = (props) => {
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
          <a><Icon type="edit" /></a>
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
