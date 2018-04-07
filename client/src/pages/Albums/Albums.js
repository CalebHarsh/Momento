import React, { Component } from "react";
import {Col, Row, Menu, Icon, List} from 'antd'
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
      console.log(res.data)
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
        <List 
          grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
          dataSource={this.data}
          renderItem={item=>(
            <List.Item>
              <Card title={item.name} src={item.cover}/>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default Albums;
