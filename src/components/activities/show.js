import React, {Component} from "react"
import PropTypes from 'prop-types';
import { getActivity } from '../../actions/activities/activityActions'
import ResizeImage from './resizeImage'
import { connect } from 'react-redux';
import "../../styles/activities/show.scss"
class Show extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: "small",
      location: ""
    }
  }

  initMap() {
    var map = new window.google.maps.Map(document.querySelector(".map"), {
      zoom: 12,
      center: {lat: 37.8267, lng: -122.4233},
    });
    var geocoder = new window.google.maps.Geocoder();
    this.geocodeAddress(geocoder, map);
  }

  geocodeAddress(geocoder, resultsMap) {
    let addressArr = document.querySelector(".google-maps-container").classList

    let address = addressArr[1] + " " + addressArr[2] + " " + addressArr[3] + " " + addressArr[4]
    geocoder.geocode({'address': this.state.location}, function(results, status) {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        var cityCircle = new window.google.maps.Circle({
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
         strokeWeight: 2,
         fillColor: '#FF0000',
         fillOpacity: 0.35,
         map: resultsMap,
         center: results[0].geometry.location,
         radius: 1000
       })
     } else {
       alert('Geocode was not successful for the following reason: ' + status);
     }
   });
 }

 gravatarSize () {
    console.log("here");
    let gravatars = document.querySelectorAll(".gravatar")
    if (gravatars.length > 0) {
      for(let i=0; i<gravatars.length; i++) {
        console.log(gravatars[i].className);
        console.log(gravatars);
        gravatars[i].className = "users-show-image"
      }
    }
  }

  componentDidMount() {
    this.props.getActivity(this.props.match.params.id).then(() => {
      this.setState({location: this.props.activity.activity.formatLocation},
      () => {
        this.initMap()
      })
    })
    this.gravatarSize()
  }

  showMidContainer(activity) {
    if(activity) {
      return(
        <div className="second-show-activities-lower-mid-container">
          <div className="second-show-activities-where-container">
            <div className="second-show-activities-where-text">Venue</div>
            <div className="second-show-activities-city">{activity.formatLocation}</div>
          </div>
          <div className="second-show-activities-when-container">
            <div className="second-show-activities-when-text">Date & Time</div>
            <div className="second-show-activities-date">{activity.showStartDay}</div>
            <div className="second-show-activities-time">{activity.showStartTime} to {activity.showEndTime}</div>
          </div>
          <div className="second-show-activities-bring-container">
            <div className="second-show-activitites-bring-text">Policy</div>
            <div className="second-show-activitites-bring">{activity.additionalInfo}</div>
          </div>
        </div>
      )
    }
  }

  resizeImage (e) {
    e.target.style.transition = "1s"
    e.target.parentNode.style.transition = "1s"
    let body = document.querySelector("body")
    if (this.state.image === "small") {
      body.style.background = "rgba(0,0,0,5)"
      e.target.style.zIndex = "9999"
      body.style.transition = "1s"
      e.target.style.maxWidth = "600px"
      e.target.style.width = "600px"
      e.target.style.width = "600px"
      e.target.style.maxHeight = "600px"
      e.target.style.minHeight = "600px"
      e.target.style.height = "600px"
      e.target.style.cursor = "zoom-out"
      e.target.parentNode.style.width = "600px"
      e.target.parentNode.style.height = "600px"
      e.target.parentNode.style.maxWidth = "600px"
      e.target.parentNode.style.maxHeight = "600px"
      this.setState({image: "big"})
    } else {
      e.target.style.width = "400px"
      e.target.style.position = "block"
      e.target.style.height = "400px"
      e.target.style.maxWidth = "400px"
      e.target.style.maxHeight = "400px"
      e.target.style.minWidth = "400px"
      e.target.style.minHeight = "400px"
      e.target.style.cursor = "zoom-in"
      e.target.parentNode.style.width = "400px"
      e.target.parentNode.style.height = "400px"
      e.target.parentNode.style.maxWidth = "400px"
      e.target.parentNode.style.maxHeight = "400px"
      body.style.background = "white"
      this.setState({image: "small"})

    }
  }

  showOuterContainer (activity) {
    if(activity) {
      console.log(activity.image);
      return(
        <div className="second-show-activities-mid-container">
          <div className="second-show-activities-mid-right-container"><img className="activity-show-img" onClick={(e) => this.resizeImage(e)} alt="" height="400px" width="400px" src={activity.imageUrl}></img></div>
          <div className="second-show-activities-mid-left-container">
            <div className="second-show-activities-header">{activity.activity_name}</div>
            <div className="second-activities-show-by"><div className="boldy-by">By:</div> <a className="make-me-pretty" href="">{activity.user.name}</a></div>
            <div className="second-activities-show-cost"><div className="boldy-by">Price:</div> ${activity.cost}</div>
            <div className="second-activities-show-about">ABOUT:</div>
            <div className="second-activities-show-about-text">{activity.content}</div>
          </div>
          <div className='social-share-buttons'>
            social share
          </div>
        </div>
      )
    }
  }

  render() {
    const {activity} = this.props.activity
    return(
      <div className="show-activities-outer-container">
        {this.showOuterContainer(activity)}
        {this.showMidContainer(activity)}
        <div className="google-maps-container">
          <div id="map" className="map"></div>
        </div>
      </div>
    )
  }
}

Show.propTypes = {
  getActivity: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  window.state = state
  let values = {
    errors: state.errors,
    currentUser: state.auth.currentUser || {},
    activity: state.activity.activity
  }
  return values
}

export default connect(mapStateToProps, {getActivity})(Show)
