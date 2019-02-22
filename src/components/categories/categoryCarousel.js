import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CategoryCarousel extends Component {
  constructor() {
    super()
  }

  render() {
    console.log("here");
    return (
      <div className="second-home-carousel-container">
        {this.props.category.category_name}
      </div>
    )
  }
}

export default CategoryCarousel
