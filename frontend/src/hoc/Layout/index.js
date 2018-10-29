import React, { Component } from 'react';
import Header from '../../components/header_footer/Header';
import Footer from '../../components/header_footer/Footer';
export default class extends Component {
  render() {
    return <div className="container">
      <Header/>
      {this.props.children}
      <Footer/>
    </div>;
  }
}
