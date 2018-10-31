import React, { Component } from 'react';
import Header from '../../components/header_footer/Header';
import Footer from '../../components/header_footer/Footer';
import CategoryList from '../../components/category/CategoryList';

// ProductLayout component
 class index extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <CategoryList/>
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default index;