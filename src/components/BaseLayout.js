import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class BaseLayout extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default BaseLayout;
