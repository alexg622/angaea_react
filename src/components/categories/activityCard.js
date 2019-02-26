import React, { Component } from 'react';

class ActivityCard extends Component {

  showImage() {
    const {activity} = this.props
    let url = "/activities/" + String(activity.id)
    if(activity.imageAttached) {
      return <a className="manage-height" href={url}><img className="second-home-image" src={activity.image}/></a>
    }
  }

  showEdit() {
    const {currentUser, activity} = this.props
    if(currentUser && currentUser.id === activity.user.id) {
      return <a className="activity-edit-link" href="<%=edit_activity_path(activity)%>">edit</a>
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
          <div className="second-home-card-cost">By <a className="underline-username" href="/users/<%=activity.user.id%>">{activity.user.name}</a></div>
          {this.showEdit()}
        </div>
      </div>
    )
  }
}


export default ActivityCard
