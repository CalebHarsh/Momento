import React, { Component } from "react";
import {Col, Row, Menu, Icon, List} from 'antd'
import 'antd/dist/antd.css';
import "./Albums.css";
import Card from '../../components/Album-Square';
import AddButton from '../../components/AddButton';
import API from "../../utils/API"
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



class Albums extends Component {
  
  data = [
    {
      src: "https://az616578.vo.msecnd.net/files/2016/04/22/635969539404389959-525985018_chicken_fingers_page-bg_8285.jpg",
      title: 'Chicken Tenders',
      description: `Trevor knows what's up ;)`
    },
    {
      src: "https://preschoolsteam.com/wp-content/uploads/2017/02/boycomputer.jpg",
      title: 'cOdInG',
      description: 'Coding Memes'
    },
    {
      src: "http://r.ddmcdn.com/w_830/s_f/o_1/cx_0/cy_220/cw_1255/ch_1255/APL/uploads/2014/11/dog-breed-selector-australian-shepherd.jpg",
      title: 'Doggos',
      description: 'Pictures of good bois'
    }
  ]

/*  state = {
    albums: []
  }

  componentWillMount() {
    API.getAllAlbums(window.location.pathname)
    .then(res => {
      console.log(res.data)
      this.setState({
        albums: res.data.albums
      })
    })
  } */


  handleClick = (e) => {
    API.addAlbum({
      name: "Test Album 3",
      cover: "https://static.boredpanda.com/blog/wp-content/uploads/2016/10/best-action-photos-2016-red-bull-illume-48-57f6150f74455__880.jpg",
      user: "5ac8166113572c1d7c3f1dd4"
    }).then(res => {
      console.log(res)
    })
  }

  render() {
    console.log(this.state.albums)
    return (

      <div className="Albums">

        <AddButton />
        <div className="album-container">
          <List 
            grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
            dataSource={this.data}
            renderItem={item=>(
              <List.Item>
                <Card title={item.title} src={item.src} description={item.description}/>
              </List.Item>
            )}
          />
        </div>
            /*
        <AddButton onClick={this.handleClick}/>
        <List 
          grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
          dataSource={this.state.albums}
          renderItem={item=>(
            <List.Item>
              <Card title={item.name} id={item._id} src={item.cover}/>
            </List.Item>
          )}
        />
        */
    );
  }
}

export default Albums;
