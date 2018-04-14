
<<<<<<< HEAD
import React, { Component } from "react";
import { List } from 'antd'
import 'antd/dist/antd.css';
import "./Albums.css";
import Card from '../../components/Album-Square';
import AddButton from '../../components/AddButton';
import API from "../../utils/API";



class Albums extends Component {

  componentWillMount() {
    if (!this.props.loginStatus) {
      API.checkUser()
        .then(res => {
          if(res.data._id) this.props.changeApp({
            "isLoggedIn": true,
            "user": res.data,
            "albums": res.data.albums,
          })
          else window.location.pathname = "/"
        })
=======
import React, { Component } from 'react';
import { List } from 'antd';
import 'antd/dist/antd.css';
import './Albums.css';
import Card from '../../components/Album-Square';
import AddButton from '../../components/AddButton';
import API from '../../utils/API';


class Albums extends Component {
  componentWillMount() {
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

  render() {
    return (
      <div className="Albums">
<<<<<<< HEAD
        <AddButton 
=======
        <AddButton
>>>>>>> 78add3240cc5a1dab9da43bb5683313d1d7ec4f3
          user={this.props.user}
          changeApp={this.props.changeApp}
        />
        <div className="album-container">
          <List
<<<<<<< HEAD
            grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
            dataSource={this.props.albums}
            renderItem={item => (
              <List.Item>
                <Card id={item._id} 
                title={item.name} 
                src={item.cover} 
                description={item.description} />
=======
            grid={{
 gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3,
}}
            dataSource={this.props.albums}
            renderItem={item => (
              <List.Item>
                <Card
                  id={item._id}
                  title={item.name}
                  src={item.cover}
                  description={item.description}
                />
>>>>>>> 78add3240cc5a1dab9da43bb5683313d1d7ec4f3
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default Albums;

