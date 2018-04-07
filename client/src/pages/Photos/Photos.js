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

  // state = {
  //   photos: []
  // }

  // componentWillMount() {
  //   API.getAllPhotos(window.location.pathname)
  //   .then(res => {
  //     console.log(res.data)
  //     this.setState({
  //       photos: res.data.photos
  //     })
  //   })
  // }


  plusButton = {
    buttonClass: "",
    showMe: false
  }

  buttonForward = (ev) => {
    console.log("clicked");
    var thisClass = (this.plusButton.buttonClass === "" ? "forward" : this.plusButton.buttonClass === "forward" ? "reverse" : "");
    this.setState({
      plusButton: this.plusButton.buttonClass = thisClass
    });
    console.log(thisClass);

  }


  // handleClick = (e) => {
  //   API.addPhoto({
  //     name: "Test Photo 4",
  //     href: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS47f5zoCgxkl5yunLZ9AQs6REXgcjgAtsduuJntZ_ERI3U13xm2g",
  //     author: "5ac8166113572c1d7c3f1dd4",
  //     album: "5ac8312d72eeac1df8e581f5"
  //   }).then(res => {
  //     console.log(res)
  //   })
  // }
  

  data = [
    {
      title: 'Image One',
      src: 'http://www.recipe4living.com/assets/itemimages/400/400/3/default_ff862c6796ec9b9ebf1710f613d32b49_dreamstime_s_27520729.jpg'
    },
    {
      title: 'Image Two',
      src: 'https://images-gmi-pmc.edge-generalmills.com/8b648fc0-1cf6-46f2-b923-a48d16923eb9.jpg'
    },
    {
      title: 'Image Three',
      src: 'http://images.honestcooking.com/wp-content/uploads/2014/12/Frito_Fried_Chicken_Tenders_Intro.jpg'
    },
    {
      title: 'Image Four',
      src: 'https://dinnerthendessert.com/wp-content/uploads/2018/01/Super-Crispy-Chicken-Tenders-2-680x1020.jpg'
    },
    {
      title: 'Image Five',
      src: 'http://www.mantitlement.com/wp-content/uploads/2017/10/everything-bagel-chicken-tenders-feature-698x1024.jpg'
    },
    {
      title: 'Image Six',
      src: 'https://www.thegraciouswife.com/wp-content/uploads/2017/07/Easy-Baked-Chicken-Tenders-Recipe-5.jpg?x47005'
    },
    {
      title: 'Image Seven',
      src: 'http://www.simplyscratch.com/wp-content/uploads/2013/04/Potato-Chip-Crusted-Chicken-Tenders-and-Spicy-Ranch-Dip.jpg'
    },
    {
      title: 'Image Eight',
      src: 'http://www.willcookforsmiles.com/wp-content/uploads/2014/05/Bacon-Wrapped-Chicken-Strips-4-from-willcookforsmiles.com-chicken-bacon-easydinner.jpg'
    }
  ]

  render() {
    return (
      <div className="Photos">
      <AddButton />
        <Row className="photoBody" gutter={16}>
          <Col md={{span: 4}}>
            <Menu
              onClick={this.handleClick}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
            <Menu.Item key="1">Chicken Tenders</Menu.Item>
            <Menu.Item key="2">cOdInG</Menu.Item>
            <Menu.Item key="3">Doggos</Menu.Item>
            </Menu>
          </Col>
          <Col md={{span: 20}}>
            <List
              grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
              dataSource={this.data}
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
