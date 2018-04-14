import React from 'react';
import { Link } from 'react-router-dom';
import { Affix, Button, Col, Divider, Row } from 'antd';
import ScrollAnimation from 'react-animate-on-scroll';
import 'antd/dist/antd.css';
import 'animate.css/animate.min.css';
import './LandingPage.css';
import iphone from '../../assets/images/iphone.svg';
import API from '../../utils/API';

function checkForCookieUser() {
  API.checkUser().then((res) => {
    if (res.data._id) window.location.pathname = `/dashboard/${res.data._id}`;
  });
}
const LandingPage = () => (
  <div className="landing-page">
    {checkForCookieUser()}
    <div className="firstHalf">
      <Row gutter={16}>
        <Col md={{ span: 12 }} xs={{ span: 12 }}>
          <div className="text-container">
            <h1 className="intro">momento</h1>
            <h2 className="phonetic">/moh-men-toh/</h2>
            <h3 className="define">noun, spanish:</h3>
            <h3 className="define">1. a minute portion or point of time : instant</h3>
          </div>
        </Col>
        <Col md={{ span: 12 }} xs={{ span: 12 }}>
          <Affix offsetTop={150}>
            <div className="graphic-container">
              <img src={iphone} alt="iPhone Graphic" />
            </div>
          </Affix>
        </Col>
      </Row>
    </div>
    <div className="secondHalf">
      <div className="signup-section">
        <Row>
          <Col md={{ span: 12 }} xs={{ span: 24 }}>
            <ScrollAnimation animateIn="fadeInUp">
              <div className="signup-container">
                <Divider><h2>What Is Momento?</h2></Divider>
                <h3 className="hookMsg">We are a micro social network based
                  on sharing photos between friends, families, and significant
                  others. Store your photos on our platform so your inner
                  circle stays in the loop.
                </h3>
                <Link to="/signup">
                  <Button
                    size="default"
                    type="primary"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            </ScrollAnimation>
          </Col>
        </Row>

      </div>
    </div>
  </div>
);

export default LandingPage;
