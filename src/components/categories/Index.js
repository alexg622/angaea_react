import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCategories } from '../../actions/categories/categoryActions'
import { connect } from 'react-redux';
import CategoryCarousel from './categoryCarousel'

class Index extends Component {

  componentDidMount() {
    this.props.getCategories()
  }

  showCategories() {
    let result = []
    const { categories } = this.props.categories
    window.categories = categories
    for(let i=0; i<categories.length; i++) {
      let category = categories[i]
      if(category.activities.length > 0) {
        result.push(<CategoryCarousel key={String(i)} currentUser={this.props.currentUser} category={category}/>)
      }
    }
    return result
  }

  render() {
    window.props = this.props
    return (
      <div>
        {this.showCategories()}
      </div>

    )
  }
}

Index.propTypes = {
  getCategories: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  categories: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors,
  currentUser: state.auth.currentUser || {},
  auth: state.auth,
  categories: state.category
})

export default connect(mapStateToProps, { getCategories })(Index)
