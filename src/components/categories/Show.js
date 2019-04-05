import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ActivityCard from './activityCard.js'
import { getCategory } from '../../actions/categories/categoryActions'
import "../../styles/categories/show.scss"


class Show extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.getCategory(this.props.match.params.id)
  }

  showActivities(category) {
    console.log("here");
    window.category = category
    if(category !== undefined && category.activities) {
      console.log(category.activities);
      let { activities } = category
      let result = []
      if(activities.length > 0) {
        console.log("inklas;df");
        for(let i=0; i<activities.length; i++) {
          let activity = activities[i]
          result.push(<ActivityCard key={String(i)} currentUser={this.props.currentUser} activity={activity} marginTop="give-marg-top"/>)
        }
      }
      return result
    }
  }

  showCatName(category) {
    if(category !== undefined) {
      return <div className="show-category-title">{category.category_name.toUpperCase()}</div>

    }
  }

  render() {
    window.props = this.props
    let { category } = this.props.category.category || {}
    console.log(category);
    return (
      <div className="show-category-container">
        {this.showCatName(category)}
        <div className="category-activities-container">
          {this.showActivities(category)}
        </div>
      </div>
    )
  }
}

Show.propTypes = {
  getCategory: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  category: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  category: state.category,
  errors: state.errors,
  currentUser: state.auth.currentUser || {},
  auth: state.auth
})

export default connect(mapStateToProps, { getCategory })(Show)
