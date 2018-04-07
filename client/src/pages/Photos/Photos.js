import React, { Component } from "react";
import {Affix, Col, Row, Menu, Icon, List} from 'antd'
import 'antd/dist/antd.css';
import "./Photos.css";
import PhotoCard from '../../components/PhotoCard';
import AddButton from '../../components/AddButton';
import API from "../../utils/API"
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



class Photos extends Component {

  state = {
    photos: []
  }

  componentWillMount() {
    API.getAllPhotos(window.location.pathname)
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
    API.addPhoto({
      name: "Test Photo 4",
      href: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS47f5zoCgxkl5yunLZ9AQs6REXgcjgAtsduuJntZ_ERI3U13xm2g",
      author: "5ac8166113572c1d7c3f1dd4",
      album: "5ac8312d72eeac1df8e581f5"
    }).then(res => {
      console.log(res)
    })
  }
  
  render() {
    return (
      <div className="Photos">
      <AddButton        
         onClick={this.handleClick}
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
