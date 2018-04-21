import React from 'react';
import { Divider, Icon } from 'antd';
import './Footer.css';

const Footer = () => (
  <div className="footer">
    <div className="footer-content">
      <p>Built with <a href="https://reactjs.org/" alt="React Website" target="_blank" rel="noopener noreferrer">React</a> &amp; <a href="https://ant.design/" alt="Ant Design Website" target="_blank" rel="noopener noreferrer"> {<Icon type="ant-design" />} Ant Design</a></p>
      <Divider type="verticle" />
      <p>Source Code: <a href="https://github.com/CalebHarsh/Momento" target="_blank" rel="noopener noreferrer">{<Icon type="github" />}</a></p>
      <Divider type="verticle" />
      <p>&copy; <a href="https://github.com/CalebHarsh" target="_blank" rel="noopener noreferrer">Caleb Harshman</a>, <a href="https://github.com/dillonschultz93" target="_blank" rel="noopener noreferrer">Dillon Schultz</a>, <a href="https://github.com/Trevcj" target="_blank" rel="noopener noreferrer">Trevor James</a>, <a href="https://github.com/apoloniogarcia" target="_blank" rel="noopener noreferrer">Apolonio Garcia</a></p>
    </div>
  </div>
);

export default Footer;
