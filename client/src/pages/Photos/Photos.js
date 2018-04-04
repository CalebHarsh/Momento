import React, { Component } from "react";
import {Affix, Col, Row,Menu, Icon} from 'antd'
import 'antd/dist/antd.css';
import "./Photos.css";
import PhotoCard from '../../components/PhotoCard';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Photos extends Component {

  handleClick = (e) => {
    console.log('click ', e);
  }

  render() {
    return (

      <div className="Photos">
        <Row className="photoBody" gutter={16}>
          <Col md={{span: 4}}>
            <Menu
              onClick={this.handleClick}

              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
            <Menu.Item key="1">Vacation</Menu.Item>
            <Menu.Item key="2">Apple</Menu.Item>
            <Menu.Item key="3">Chicken Tenders</Menu.Item>
            </Menu>
          </Col>
          <Col className="animateIn" md={{span: 20}}>
            <Row className="photoRow">
              <Col className="Cards"span={6}><PhotoCard /></Col>
              <Col className="Cards"span={6}><PhotoCard /></Col>
              <Col className="Cards"span={6}><PhotoCard /></Col>
              <Col className="Cards"span={6}><PhotoCard /></Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Photos;
