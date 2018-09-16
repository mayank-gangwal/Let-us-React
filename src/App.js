import React, { Component } from 'react';
import './App.css';
import FdcLogo from './Images/image.png';
import Home from './Components/HomeRoute';
import Footer from './Footer';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import ImageRoute from './Components/imageRoute'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="App-header">
            <img src={FdcLogo} alt="FDC Logo" className="App-logo" />
            <ul>
              <li><Link to="/">Home</Link> </li>
              <li><Link to="/images">Images</Link> </li>
            </ul>
          </div>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/images" component={ImageRoute} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;