import React, { Component } from "react";
import {Col, Row, Menu, List} from 'antd'
// import {Link} from 'react-router-dom'
import 'antd/dist/antd.css';
import "./Photos.css";
import PhotoCard from '../../components/PhotoCard';
import AddButton from '../../components/AddButton';
import API from "../../utils/API"

class Photos extends Component {

  state = {
    currentAlbum: {}
  }

  componentWillMount() {
    this.getPictures()
  }

  getPictures = () => {
    API.getAllPhotos(window.location.pathname)
      .then(res => {
        this.setState({
          currentAlbum: res.data
        })
      })
  }

  // Talk to Trevor about this



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

  render() {
    return (
      <div className="Photos">
      <AddButton />
        <Row className="photoBody" gutter={16}>
          <Col md={{span: 4}}>
            <Menu
              onClick={this.handleClick}
              defaultSelectedKeys={[window.location.pathname.slice(8)]}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
            { 
              this.props.albums.map((item, i) => (
                <Menu.Item key={item._id} id={item._id}>{item.name}</Menu.Item>
              ))
            }
            </Menu>
          </Col>
          <Col md={{span: 20}}>
            <List
              grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
              dataSource={this.state.currentAlbum.photos}
              renderItem={item=>(
                <List.Item>
                  <PhotoCard id={item._id} title={item.name} src={item.href}/>
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
