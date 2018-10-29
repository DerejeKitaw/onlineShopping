import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import {addCategory,getCategories } from '../../store/actions/category/categoryActions';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      categories:[]
    }
  }
  componentDidMount() {
  }
  render() {
    const { category } = this.props;
    return (

        <Link to={category.name} className="list-group-item">{category.name}</Link>


    )
  }
}

export default Category;