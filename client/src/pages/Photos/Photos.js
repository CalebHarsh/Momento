import React, { Component } from 'react';
import { Col, Row, Menu, List, message, Icon } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './Photos.css';
import PhotoCard from '../../components/PhotoCard';
import AddButton from '../../components/AddButton';
import API from '../../utils/API';

/* eslint react/no-unused-state: 0 */
class Photos extends Component {
  state = {
    currentAlbum: {},
    loading: true,
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
    }
  }

  getPictures = () => {
    API.getAllPhotos(window.location.pathname)
      .then((res) => {
        this.setState({
          currentAlbum: res.data,
          loading: false,
        });
        setTimeout(() => {
          this.getPictures();
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        message.error('Error Getting Photos');
      });
  }

  deletePicture = photoID => API.deletePhoto(this.state.currentAlbum._id, photoID)
    .then((res) => {
      this.setState({
        currentAlbum: res.data,
      });
      message.warning('Photo Deleted');
    })
    .catch((err) => {
      console.log(err);
      message.error('Error Please try Again');
    })

  changePhoto = (album) => {
    this.setState({
      currentAlbum: album,
    });
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
                    </Link>
                  </Menu.Item>
                ))
              }
            </Menu>
          </Col>
          <Col md={{ span: 20 }}>
            {this.state.loading ? <Icon
              style={{
                fontSize: 200, display: 'flex', justifyContent: 'center', color: '#1890ff',
              }}
              type="loading"
            /> : <List
              grid={{
                  gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3,
                }}
              dataSource={this.state.currentAlbum.photos}
              renderItem={item => (
                <List.Item>
                  <PhotoCard
                    id={item._id}
                    title={item.name}
                    src={item.href}
                    deletePicture={this.deletePicture}
                    user={this.props.user}
                  />
                </List.Item>
                )}
            />}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Photos;
