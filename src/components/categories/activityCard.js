import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ActivityCard extends Component {

  showImage() {
    const {activity} = this.props
    let url = "/activities/" + String(activity.id)
    if(activity.imageAttached) {
      return <Link className="manage-height" to={url}><img alt="" className="second-home-image" src={activity.imageUrl}/></Link>
    }
  }

  showEdit() {
    const {currentUser, activity} = this.props
    if(currentUser && currentUser.id === activity.user.id) {
      return <Link className="activity-edit-link" to="/">edit</Link>
    }
  }

  render() {
    const {activity} = this.props
    let divClassName = "second-home-card-holder " + this.props.margTop
    return(

      <div className={divClassName}>
        {this.showImage()}
        <div className="second-home-bottom-card">
          <div className="second-home-card-name">{activity.activity_name.toUpperCase()}</div>
          <div className="second-home-card-date">{activity.formatStartDate.split(",")[1]}</div>
          <div className="second-home-card-location">{activity.formatLocation.split(",")[0]}</div>
          <div className="second-home-card-cost">By <Link className="underline-username" to="/users/8">{activity.user.name}</Link></div>
          {this.showEdit()}
        </div>
      </div>
    )
  }
}


export default ActivityCard
