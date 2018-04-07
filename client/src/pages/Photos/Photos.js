import React, { Component } from "react";
import {Affix, Col, Row, Menu, Icon, List} from 'antd'
import 'antd/dist/antd.css';
import "./Photos.css";
import PhotoCard from '../../components/PhotoCard';
import AddButton from '../../components/AddButton';
import axios from "axios"
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



class Photos extends Component {

  state = {
    photos: []
  }

  componentDidMount() {
    console.log("getting photos")
    axios.get(window.location.pathname)
    .then(res => {
      console.log(res.data)
      this.setState({
        photos: res.data.photos
      })
    })
  }


  plusButton = {
    buttonClass: "button"
  }

  buttonForward = (ev) => {
    console.log("clicked");
    // this.setState({
    //   plusButton: this.plusButton.buttonClass = "button forward"
    // });
  }

  handleClick = (e) => {
    console.log('click ', e);
  }
  
  render() {
    return (
      <div className="Photos">
      <AddButton        
         onClick={this.buttonForward}
       />
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
          <Col md={{span: 20}}>
            <List
              grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
              dataSource={this.state.photos}
              renderItem={item=>(
                <List.Item>
                  <PhotoCard title={item.name} src={item.href}/>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Photos;
