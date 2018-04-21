import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Affix } from 'antd';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import Albums from './pages/Albums';
import Photos from './pages/Photos';
import Footer from './components/Footer';
import FourOhFour from './pages/FourOhFour';

class App extends Component {
  state = {
    isLoggedIn: false,
    user: {},
    albums: [],
  }


  changeAppState = (obj) => {
    this.setState(obj);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Affix>
            <Navbar
              user={this.state.user}
              changeApp={this.changeAppState}
              loggedIn={this.state.isLoggedIn}
            />
          </Affix>
          <Route exact path="/" render={() => <LandingPage isLoggedIn={this.state.isLoggedIn} />} />
          <Route exact path="/signup" render={() => <SignUp changeApp={this.changeAppState} user={this.state.user} />} />
          <Route
            path="/dashboard"
            render={() =>
              (<Albums
                changeApp={this.changeAppState}
                loginStatus={this.state.isLoggedIn}
                albums={this.state.albums}
                user={this.state.user}
              />)}
          />
          <Route
            path="/albums"
            render={() =>
              (<Photos
                changeApp={this.changeAppState}
                loginStatus={this.state.isLoggedIn}
                albums={this.state.albums}
                user={this.state.user}
              />)}
          />
          <Route
            path="/404"
            render={() => (
              <FourOhFour />
            )}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
