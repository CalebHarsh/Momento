import React, { Component } from "react";
import {List} from 'antd'
import 'antd/dist/antd.css';
import "./Albums.css";
import Card from '../../components/Album-Square';
import AddButton from '../../components/AddButton';
import API from "../../utils/API";



class Albums extends Component {
  
  state = {
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
  } 

  // Talk to Trevor about this 
  
  // handleClick = (e) => {
  //   API.addAlbum({
  //     name: "Test Album 3",
  //     cover: "https://static.boredpanda.com/blog/wp-content/uploads/2016/10/best-action-photos-2016-red-bull-illume-48-57f6150f74455__880.jpg",
  //     user: "5ac8166113572c1d7c3f1dd4"
  //   }).then(res => {
  //     console.log(res)
  //   })
  // }

  render() {
    return (

      <div className="Albums">

        <AddButton />
        <div className="album-container">
          <List 
            grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
            dataSource={this.state.album}
            renderItem={item=>(
              <List.Item>
                <Card title={item.name} src={item.cover} description={item.description}/>
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default Albums;
