import React, { Component } from "react";
import {Affix, Col, Row, Menu, Icon, List} from 'antd'
import 'antd/dist/antd.css';
import "./Photos.css";
import PhotoCard from '../../components/PhotoCard';
import AddButton from '../../components/AddButton';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



class Photos extends Component {



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
  
  data = [
    {
      title: 'Image One',
      src: 'https://placehold.it/200x300'
    },
    {
      title: 'Image Two',
      src: 'https://placehold.it/200x300'
    },
    {
      title: 'Image Three',
      src: 'https://placehold.it/200x300'
    },
    {
      title: 'Image Four',
      src: 'https://placehold.it/200x300'
    },
    {
      title: 'Image Five',
      src: 'https://placehold.it/200x300'
    },
    {
      title: 'Image Six',
      src: 'https://placehold.it/200x300'
    },
    {
      title: 'Image Seven',
      src: 'https://placehold.it/200x300'
    },
    {
      title: 'Image Eight',
      src: 'https://placehold.it/200x300'
    }
  ]

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
              dataSource={this.data}
              renderItem={item=>(
                <List.Item>
                  <PhotoCard title={item.title} src={item.src}/>
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
