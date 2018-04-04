import React, { Component } from "react";
import {Affix, Col, Row,Menu, Icon} from 'antd'
import 'antd/dist/antd.css';
import "./Albums.css";
import Card from '../../components/Album-Square'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Albums extends Component {

  handleClick = (e) => {
    console.log('click ', e);
  }

  render() {
    return (

      <div className="Albums">
            <Row className="albumRow" gutter={16} style={{margin: "2rem auto"}}>
              <Col onClick={this.handleClick} className="Cards"span={6} style={{margin: "15px auto"}}><Card /></Col>
              <Col className="Cards"span={6} style={{margin: "15px auto"}}><Card /></Col>
              <Col className="Cards"span={6} style={{margin: "15px auto"}}><Card /></Col>
              <Col className="Cards"span={6} style={{margin: "15px auto"}}><Card /></Col>
            </Row>
      </div>
    );
  }
}

export default Albums;