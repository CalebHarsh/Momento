import React, { Component } from "react";
import {Col, Row, Menu, Icon, List} from 'antd'
import 'antd/dist/antd.css';
import "./Albums.css";
import Card from '../../components/Album-Square';
import AddButton from '../../components/AddButton';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



class Albums extends Component {
  
  data = [
    {
      src: "https://az616578.vo.msecnd.net/files/2016/04/22/635969539404389959-525985018_chicken_fingers_page-bg_8285.jpg",
      title: 'Chicken Tenders'
    },
    {
      src: "https://preschoolsteam.com/wp-content/uploads/2017/02/boycomputer.jpg",
      title: 'cOdInG'
    },
    {
      src: "http://r.ddmcdn.com/w_830/s_f/o_1/cx_0/cy_220/cw_1255/ch_1255/APL/uploads/2014/11/dog-breed-selector-australian-shepherd.jpg",
      title: 'Doggos'
    }
  ]

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
              <Card title={item.title} src={item.title}/>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default Albums;
