import React, { Component } from 'react';
import ActivityCard from './activityCard.js'
import "../../styles/categories/carousel.scss"

class CategoryCarousel extends Component {
  showActivityCard() {
    const {activities} = this.props.category
    let result = []
    let counter = 0
    if(activities) {
      activities.forEach(activity => {
        if(activity.imageAttached) {
          result.push(<ActivityCard key={String(counter)} currentUser={this.props.currentUser} activity={activity} marginTop=""/>)
          counter ++
        }
      })
    }
    return result
  }

  showHref(){
    return '/categories/'+String(this.props.category.id)
  }

  render() {
    const {category} = this.props
    return (
      <div className="second-home-carousel-container">
        <div className="second-home-carousel-container-top">
          <a className="carousel-title" href={this.showHref()}><div className="underline-it">{category.category_name.toUpperCase()}</div></a>
          <div className="second-home-right-pholder">></div>
        </div>
        <div className="second-home-carousel-container-bottom">
          <div className="second-home-carousel-mid">
            {this.showActivityCard()}
          </div>
        </div>
      </div>
    )
  }
}




export default CategoryCarousel
