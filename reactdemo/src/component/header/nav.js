import React, { Component } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavLogo from './navlogo';
import NavItem from './nav-item';
import Header from './header';
import ListPost from '../main/listpost';
import Post from '../main/post';

class Nav extends Component {
  state = {
    logoTitle: 'ReactDemo',
    bannerTitle: 'React Blog',
    subTitle: 'A Blog Theme by Start Bootstrap'
  };

  changeBanner = (main, sub) => {
    this.setState({ bannerTitle: main });
    this.setState({ subTitle: sub });
  };

  render() {
    return (
      <>
        <nav id="mainNav" className="navbar navbar-expand-lg navbar-light">
          <div className="container px-4 px-lg-5">
            <NavLogo logoTitle={this.state.logoTitle} changeBanner={this.changeBanner} />
            <NavItem changeBanner={this.changeBanner} />
          </div>
        </nav>
        <Header bannerTitle={this.state.bannerTitle} subTitle={this.state.subTitle} />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={ListPost} />
            <Route path="/post" element={Post} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default Nav;
