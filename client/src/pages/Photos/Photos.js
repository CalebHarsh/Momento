<<<<<<< HEAD
import React, { Component } from "react";
import { Col, Row, Menu, List } from 'antd'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import "./Photos.css";
import PhotoCard from '../../components/PhotoCard';
import AddButton from '../../components/AddButton';
import API from "../../utils/API"

class Photos extends Component {

  state = {
    currentAlbum: {}
  }

  componentDidMount() {
    if (!this.props.loginStatus) {
      API.checkUser()
        .then(res => {
          if (res.data._id) {
            this.props.changeApp({
              "isLoggedIn": true,
              "user": res.data,
              "albums": res.data.albums
            })
            this.getPictures()
          }
          else window.location.pathname = "/"

        })
=======
import React, { Component } from 'react';
import { Col, Row, Menu, List } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './Photos.css';
import PhotoCard from '../../components/PhotoCard';
import AddButton from '../../components/AddButton';
import API from '../../utils/API';

class Photos extends Component {
  state = {
    currentAlbum: {},
  }

  componentDidMount() {
    this.getPictures();
    if (!this.props.loginStatus) {
      API.checkUser()
        .then((res) => {
          if (res.data._id) {
            this.props.changeApp({
              isLoggedIn: true,
              user: res.data,
              albums: res.data.albums,
            });
          } else window.location.pathname = '/';
        });
>>>>>>> 78add3240cc5a1dab9da43bb5683313d1d7ec4f3
    }
  }

  getPictures = () => {
    API.getAllPhotos(window.location.pathname)
<<<<<<< HEAD
      .then(res => {
        this.setState({
          currentAlbum: res.data
        })
      })
=======
      .then((res) => {
        this.setState({
          currentAlbum: res.data,
        });
      });
>>>>>>> 78add3240cc5a1dab9da43bb5683313d1d7ec4f3
  }

  changePhoto = (album) => {
    this.setState({
<<<<<<< HEAD
      "currentAlbum": album
    })
=======
      currentAlbum: album,
    });
>>>>>>> 78add3240cc5a1dab9da43bb5683313d1d7ec4f3
  }

  render() {
    return (
      <div className="Photos">
        <AddButton
          album={this.state.currentAlbum}
          user={this.props.user}
          changePhoto={this.changePhoto}
        />
        <Row className="photoBody" gutter={16}>
          <Col md={{ span: 4 }}>
            <Menu
              onClick={this.getPictures}
              defaultSelectedKeys={[window.location.pathname.slice(8)]}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              {
                this.props.albums.map(item => (

                  <Menu.Item key={item._id} id={item._id}>
                    <Link to={`/albums/${item._id}`}>
                      {item.name}
<<<<<<< HEAD
                    </ Link >
=======
                    </Link>
>>>>>>> 78add3240cc5a1dab9da43bb5683313d1d7ec4f3
                  </Menu.Item>
                ))
              }
            </Menu>
          </Col>
          <Col md={{ span: 20 }}>
            <List
<<<<<<< HEAD
              grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
=======
              grid={{
 gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3,
}}
>>>>>>> 78add3240cc5a1dab9da43bb5683313d1d7ec4f3
              dataSource={this.state.currentAlbum.photos}
              renderItem={item => (
                <List.Item>
                  <PhotoCard id={item._id} title={item.name} src={item.href} />
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
