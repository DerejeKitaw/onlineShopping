import React, { Component } from 'react';
import Header from '../../components/header_footer/Header';
import Footer from '../../components/header_footer/Footer';
import { Link } from 'react-router-dom';
//import Category from './Category';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getCategories
} from '../../store/actions/category/categoryActions';

// ProductLayout component
class index extends Component {

  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const { categories, loading } = this.props.category;

    let categoryContent;
    console.log('categoriesr', categories);
    if (categories === null || loading) {
      // TODO: Add spinner
      // {<div>Loading</div>;}
    } else {
      categoryContent =
        categories &&
        categories.map((category, i) => (
          <Link to={category.name} key={i} className="list-group-item">
            {category.name}
          </Link>
        ));
    }

    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h1 className="my-4">Shop Name</h1>
              <div className="list-group" />
              {categoryContent}
            </div>
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

index.protoTypes = {
  getCategories: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  category: state.category,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { getCategories }
)(index);
