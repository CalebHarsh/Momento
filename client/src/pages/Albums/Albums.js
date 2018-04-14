
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
    }
  }

  render() {
    return (
      <div className="Albums">
        <AddButton
          user={this.props.user}
          changeApp={this.props.changeApp}
        />
        <div className="album-container">
          <List
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
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default Albums;

