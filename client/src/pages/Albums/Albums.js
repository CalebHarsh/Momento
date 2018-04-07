import React, { Component } from "react";
import {Affix, Col, Row,Menu, Icon} from 'antd'
import 'antd/dist/antd.css';
import "./Albums.css";
import Card from '../../components/Album-Square';
import AddButton from '../../components/AddButton';
import axios from "axios"
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



class Albums extends Component {
  state = {
    albums: []
  }

  componentDidMount() {
    axios.get(window.location.pathname)
    .then(res => {
      this.setState({
        albums: res.data.albums
      })
    })
  }

  handleClick = (e) => {
    console.log('click ', e);
  }

  render() {
    return (

      <div className="Albums">
        <AddButton />
            <Row className="albumRow" gutter={16} style={{margin: "2rem auto"}}>
              <Col span={6} style={{margin: "15px auto"}}><Card /></Col>
              <Col span={6} style={{margin: "15px auto"}}><Card /></Col>
              <Col span={6} style={{margin: "15px auto"}}><Card /></Col>
              <Col span={6} style={{margin: "15px auto"}}><Card /></Col>
            </Row>
      </div>
    );
  }
}

export default Albums;
