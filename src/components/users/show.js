import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser } from '../../actions/users/userActions'
import { createActivity } from '../../actions/activities/activityActions'
import ActivityCard from '../categories/activityCard'
import NewActivityForm from '../activities/NewActivityForm'
import "../../styles/users/show.scss"

class Show extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.id)
  }

  showActivitiesHelper(activities) {
    let result = []
    for(let i=0; i<activities.length; i++) {
      result.push(<ActivityCard key={String(i)} currentUser={this.props.currentUser} activity={activities[i]} marginTop={"give-marg-top"}/>)
    }
    return result
  }

  showActivities(activities) {
    if(activities && activities.length > 0) {
      return (
        <div className="users-upcoming-activities-container">
          {this.showActivitiesHelper(activities)}
        </div>
      )
    } else {
      return (
        <div className="users-upcoming-activities-container">
          <div className="no-data">No Upcoming Experiences</div>
        </div>
      )
    }
  }

  showUserPic(user) {
    if (user.imageAttached) {
      return (
        <div className="users-show-image-div"><img alt="" className="users-show-image" src={user.imageUrl}/></div>
      )
    } else {
      return (
        <div className="users-show-image-div"><div>No Image</div></div>
      )
    }
  }

  showUserFacebook(user) {
    if(user.facebook === "") {
      return <div style="cursor:pointer"><img alt="" className="logo-facebook" width="35px" height="35px" src="https://github.com/alexg622/angaea_heroku/blob/master/app/assets/images/iconfinder_Facebook_1298738.png?raw=true"/></div>
    } else {
      return <div><a target="_blank" rel="noopener noreferrer" href="<%=@user.facebook%>"><img alt="" className="logo-facebook" width="35px" height="35px" src="https://github.com/alexg622/angaea_heroku/blob/master/app/assets/images/iconfinder_Facebook_1298738.png?raw=true"/></a></div>
    }
  }

  showUserInstagram(user) {
    if(user.instagram === "") {
      return <div style="cursor:pointer"><img alt="" className="logo" width="35px" height="35px" src="https://github.com/alexg622/angaea_heroku/blob/master/app/assets/images/iconfinder_Instagram_1298747.png?raw=true"/></div>
    } else {
      return <div><a target="_blank" rel="noopener noreferrer" href="<%=@user.instagram%>"><img alt="" className="logo" width="35px" height="35px" src="https://github.com/alexg622/angaea_heroku/blob/master/app/assets/images/iconfinder_Instagram_1298747.png?raw=true"/></a></div>
    }
  }

  showUserYoutube(user) {
    if (user.youtube === "") {
      return <div style="cursor:pointer"><img alt="" className="logo" width="35px" height="35px" src="https://github.com/alexg622/angaea_heroku/blob/master/app/assets/images/iconfinder_social_media_applications_2-youtube_4102578.png?raw=true"/></div>
    } else {
      return <div><a target="_blank" rel="noopener noreferrer" href="<%=@user.youtube%>"><img alt="" className="logo" width="35px" height="35px" src="https://github.com/alexg622/angaea_heroku/blob/master/app/assets/images/iconfinder_social_media_applications_2-youtube_4102578.png?raw=true"/></a></div>
    }
  }

  showUserTwitter(user) {
    if(user.twitter === "") {
      return <div style="cursor:pointer"><img alt="" className="logo" width="35px" height="35px" src="https://github.com/alexg622/angaea_heroku/blob/master/app/assets/images/iconfinder_social_media_applications_6-twitter_4102580.png?raw=true"/></div>
    } else {
      return <div><a target="_blank" rel="noopener noreferrer" href="<%=@user.twitter%>"><img alt="" className="logo" width="35px" height="35px" src="https://github.com/alexg622/angaea_heroku/blob/master/app/assets/images/iconfinder_social_media_applications_6-twitter_4102580.png?raw=true"/></a></div>
    }
  }

  showUserPinterest(user) {
    if(user.pinterest === "") {
      return <div style="cursor:pointer"><img alt="" className="logo" width="35px" height="35px" src="https://github.com/alexg622/angaea_heroku/blob/master/app/assets/images/iconfinder_Pinterest_1298754.png?raw=true"/></div>
    } else {
      return <div><a target="_blank" rel="noopener noreferrer" href="<%=@user.twitter%>"><img alt="" className="logo" width="35px" height="35px" src="https://github.com/alexg622/angaea_heroku/blob/master/app/assets/images/iconfinder_Pinterest_1298754.png?raw=true"/></a></div>
    }
  }

  showToggleUpper(user, currentUser) {
    if(user.id === currentUser.id) {
      return <div className="left-toggle">Your Experiences</div>
    } else {
      return <div className="left-toggle">{user.name}s Experiences</div>
    }
  }

  showToggleLower(user, currentUser) {
    if(currentUser.id === user.id) {
      return <div className="upcoming-activities-toggle">Your Services</div>
    }
  }

  showToggle(user, currentUser) {
    return (
      <div className="toggle-bar">
        {this.showToggleUpper(user, currentUser)}
        {this.showToggleLower(user, currentUser)}
      </div>
    )
  }


  render() {
    const { user, currentUser } = this.props
    return(
      <div className="users-show-container">
        <div className="users-top-container">
          <div className="users-show-title">{this.props.user.name}</div>
        </div>
        <div className="portfolio-container">
          <div className="users-show-image-container">
            {this.showUserPic(user)}
          </div>
          <div className="about-user-container">
            <div className="margin-top-users-show profession-container">
              <div className="bold">Professional Talent</div>
              <div className="about-user">{user.profession}</div>
            </div>
            <div className="margin-top-users-show skills-container">
              <div className="bold">Location</div>
              <div className="about-user">{user.showLocation}</div>
            </div>
            <div className="margin-top-users-show info-user-container">
              <div className="bold">About</div>
              <div className="about-user">{user.about}</div>
            </div>
            <div className="logos-container">
              {this.showUserFacebook(user)}
              {this.showUserInstagram(user)}
              {this.showUserYoutube(user)}
              {this.showUserTwitter(user)}
              {this.showUserPinterest(user)}
            </div>
          </div>
        </div>
        {this.showToggle(user, currentUser)}
        <div className="users-show-activities-container">
          <div className="create-activity-toggle">Create an Experience</div>
          <div className="users-upcoming-activities-title">Your Activities</div>
          {this.showActivities(user.activities)}
          <div className="users-upcoming-activities-title">Upcoiming Activities</div>
          {this.showActivities(user.upcoming_activities)}
        </div>
        <NewActivityForm createActivity={this.props.createActivity} getUser={this.props.getUser} userId={this.props.match.params.id}/>
      </div>
    )
  }
}

Show.propTypes = {
  getUser: PropTypes.func.isRequired,
  createActivity: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors,
  currentUser: state.auth.currentUser || {},
  user: state.user.user.currentUser || {}
})

export default connect(mapStateToProps, { getUser, createActivity })(Show)
