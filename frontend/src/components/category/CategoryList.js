import React, { Component } from 'react';
import Category from './Category';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  addCategory,
  getCategories
} from '../../store/actions/category/categoryActions';

class CategoryList extends Component {
  componentDidMount() {
    this.props.getCategories();
  }
  render() {
    const { categories, loading } = this.props.category;
    let categoryContent;
    console.log('categories', categories);
    if (categories === null || loading) {
      // TODO: Add spinner
      <div>Loading</div>;
    } else {
      categoryContent = categories && categories.map((category) => (
        <Category category={category}/>
      ));
    }
    return (
      <div className="col-lg-3">
        <h1 className="my-4">Shop Name</h1>
        <div className="list-group" />
        {categoryContent}
      </div>
    );
  }
}
CategoryList.protoTypes = {
  addCategory: PropTypes.func.isRequired,
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
  { addCategory, getCategories }
)(CategoryList);
