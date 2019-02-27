import React, {Component} from "react"
import PropTypes from 'prop-types';
import { getActivity } from '../../actions/activities/activityActions'
import ResizeImage from './resizeImage'
import { connect } from 'react-redux';

class Show extends Component {
  constructor(props) {
    super(props)
  }

  showClicker() {
    document.addEventListener("DOMContentLoaded", () => {
      showArrows()
      hideArrows()
      rightArrowClick()
      leftArrowClick()
  })

  let leftArrow = document.querySelector(".second-left-arrow")
  let rightArrow = document.querySelector(".second-right-arrow")
  let imgTag = document.querySelector('.second-show-image-activity-card')
  let imgsTags = Array.from(document.querySelectorAll(".activity-show-bottom-images"))
  let cardContainer = document.querySelector(".second-image-activity-card-container")
  let imgCounter = 0
  let imgsSrcs = []
  imgsTags.unshift(imgTag)
  if(imgsTags.length>0) {
    for (let i=0; i<imgsTags.length; i++) {
      imgsSrcs.push(imgsTags[i].src)
    }
  }

  function showArrows() {
    if(cardContainer !== null) {
      cardContainer.addEventListener("mouseover", e => {
        leftArrow.style.opacity = 1
        rightArrow.style.opacity = 1
      })
    }
  }

  function hideArrows() {
    if(cardContainer !== null) {
      cardContainer.addEventListener("mouseleave", e => {
        leftArrow.style.opacity = 0
        rightArrow.style.opacity = 0
      })
    }
  }

  function rightArrowClick() {
    if (rightArrow !== null) {
      rightArrow.addEventListener("click", e => {
        imgCounter += 1
        if (imgCounter >= imgsSrcs.length) imgCounter = 0
        imgTag.src = imgsSrcs[imgCounter]
      })
    }
  }

  function leftArrowClick() {
    if(leftArrow !== null) {
      leftArrow.addEventListener("click", e => {
        imgCounter -= 1
        if (imgCounter < 0) imgCounter = imgsSrcs.length-1
        imgTag.src = imgsSrcs[imgCounter]
      })
    }
  }
  }

  largenImage(){
    document.addEventListener("DOMContentLoaded", () => {
      imgListener()
    })
    let arrowsHolder = document.querySelector(".second-arrows-holder")
    let bigImg = false
    let appContainer = document.querySelector(".application-container")
    let body = document.querySelector("body")
    let showActivitiesOuterContainer = document.querySelector(".show-activities-outer-container")
    let img = document.querySelector(".second-show-image-activity-card")
    let secondActivitiesMidContaier = document.querySelector(".second-show-activities-mid-container")
    function largenImage() {
      body.style.background = "rgba(0,0,0,5)"
      body.style.transition = "1s"
      img.style.maxWidth = "600px"
      img.style.width = "600px"
      img.style.width = "600px"
      img.style.maxHeight = "600px"
      img.style.minHeight = "600px"
      img.style.height = "600px"
      img.style.cursor = "zoom-out"
      if(arrowsHolder !== null) {
        arrowsHolder.style.display = "none"
      }
    }
    function reduceImage() {
      img.style.maxWidth = "400px"
      img.style.width = "400px"
      img.style.width = "400px"
      img.style.maxHeight = "400px"
      img.style.minHeight = "400px"
      img.style.height = "400px"
      img.style.cursor = "zoom-in"
      body.style.background = ""
      if(arrowsHolder !== null) {
        arrowsHolder.style.display = "none"
        setTimeout(() => {
          arrowsHolder.style.display = "flex"
          body.style.transition = ""
        }, 1000)
      }
    }

  function imgListener() {
    img.addEventListener("click", () => {
      if(!bigImg) {
        largenImage()
      } else {
        reduceImage()
      }
      bigImg = (bigImg ? false : true )
    })
  }
}

  componentDidMount() {
    this.props.getActivity(this.props.match.params.id)
    this.largenImage()
  }

  showSpots () {
    const {activity} = this.props
    if(parseInt(activity.capacity) - activity.attendees.length <=0) {
      return <div class="second-activity-ticket"> No Spots Left </div>
    } else {
      return [
        <div class="space-holder"></div>,
        <a href="/activities/{{activity.id}}/activity_tickets/new"><div class="second-activity-ticket">Book</div></a>
        <div class="second-show-activity-capacity">{parseInt(activity.capacity) - activity.attendees.length} Spots Left</div>
      ]
    }
  }

  showAttendeeImage(attendee) {
    if(attendee.imageAttached) {
      return <div class="users-show-image-div"><img class="users-show-image" alt="" src={attendee.image}</div>
    } else {
      return <div class="users-show-image-div"><div id="users-show-image">No Image</div></div>
    }
  }

  iterateAttendees(attendees) {
    let result = []
    for(let i=0; i<attendees.length; i++) {
      let attendee = attendees[i]
      result.push(
        <div class="attendees-card">
          <div class="attendee-name"><a class="make-me-pretty" href="/users/{{attendee.id}}">{attendee.name}</a></div>
          this.showAttendeeImage(attendee)
        </div>
      )

    }
    return result
  }

  hiddenImages() {
    const {images} = this.props.activity
    let result = []
    if(images.length > 0) {
      for(leti=0; i<images.length; i++) {
        let image = images[i]
        result.push(<img alt="" class="activity-show-bottom-images" src={image}/>)
      }
    }
    if(images.length > 0) {
      this.showClicker()
    }
    return result
  }

  <%if activity.images.length > 0%>
  <% for i in 0...activity.images.length %>
  <%=image_tag(activity.images[i], class: "activity-show-bottom-images")%>
  <% end %>
  <%end%>
  <%if activity.images.length > 0%>
  <%=render "layouts/second_activities_show_carousel"%>
  <%end%>
  <%=render "layouts/second_largen_image"%>

  showAttendees(){
    const {attendees} = this.props.activity
    if(attendees.length > 0) {
      <div class="attendees-container">
        <div class="attendees-text">Attendees</div>
        <div class="attendees-cards-container">
          {this.iterateAttendees(attendees)}
        </div>
      </div>
    }
  }

  render() {
    const {activity, currentUser} = this.props
    return(

      <div class="show-activities-outer-container">

        <div class="second-show-activities-mid-container">
          <div class="second-show-activities-mid-right-container"><ResizeImage activity={this.props.activity} /></div>
          <div class="second-show-activities-mid-left-container">
            <div class="second-show-activities-header">{activity.activity_name}</div>
            <div class="second-activities-show-by"><div class="boldy-by">By:</div> <a class="make-me-pretty" href="/users/{{activity.user.id}}">{activity.user.name}</a></div>
            <div class="second-activities-show-cost"><div class="boldy-by">Price:</div> ${activity.cost}</div>
            <div class="second-activities-show-about">ABOUT:</div>
            <div class="second-activities-show-about-text">{activity.content}</div>
          </div>
          <div class='social-share-buttons'>
            <!-- <div class="share-with-friends">Share With Friends!</div> -->
            // <%= social_share_button_tag('Share Activity', :url => "https://www.angaea.com/activities/#{activity.id}", desc: activity.activity_name) %>
          </div>
        </div>

        <div class="second-show-activities-lower-mid-container">
          <div class="second-show-activities-where-container">
            <div class="second-show-activities-where-text">Venue</div>
            <div class="second-show-activities-city">{activity.formatLocation}</div>
          </div>
          <div class="second-show-activities-when-container">
            <div class="second-show-activities-when-text">Date & Time</div>
            <div class="second-show-activities-date">{activity.showStartDay}</div>
            <div class="second-show-activities-time">{activity.showStartTime} to {activity.showEndTime}</div>
          </div>
          <div class="second-show-activities-bring-container">
            <div class="second-show-activitites-bring-text">Policy</div>
            <div class="second-show-activitites-bring">{activity.additionalInfo}</div>
          </div>
        </div>

        <div class="google-maps-container <%=activity.format_location%>">
          <div id="map"></div>
        </div>

        <div class="second-show-activities-spots-container">
          {this.showSpots()}
        </div>
        {this.showAttendees()}
        {this.hiddenImages()}

        <script>
          let markers = []
          function initMap() {
            var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 12,
              center: {lat: 37.8267, lng: -122.4233},
            });
            var geocoder = new google.maps.Geocoder();
            geocodeAddress(geocoder, map);
          }

          function geocodeAddress(geocoder, resultsMap) {
            let addressArr = document.querySelector(".google-maps-container").classList
            let address = addressArr[1] + " " + addressArr[2] + " " + addressArr[3] + " " + addressArr[4]
            geocoder.geocode({'address': address}, function(results, status) {
              if (status === 'OK') {
                resultsMap.setCenter(results[0].geometry.location);
                // var marker = new google.maps.Marker({
                //   map: resultsMap,
                //   draggable: true,
                //   animation: google.maps.Animation.DROP,
                //   position: results[0].geometry.location
                // });

                var cityCircle = new google.maps.Circle({
                  strokeColor: '#FF0000',
                  strokeOpacity: 0.8,
                  strokeWeight: 2,
                  fillColor: '#FF0000',
                  fillOpacity: 0.35,
                  map: resultsMap,
                  center: results[0].geometry.location,
                  radius: 1000
                })

                // marker.addListener('click', toggleBounce);
                // function toggleBounce() {
                //   if (marker.getAnimation() !== null) {
                //     marker.setAnimation(null);
                //   } else {
                //     marker.setAnimation(google.maps.Animation.BOUNCE);
                //   }
                // }
              } else {
                alert('Geocode was not successful for the following reason: ' + status);
              }
            });
          }
          // codeAddress()
          function gravatarSize () {
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
          gravatarSize()
        </script>
        <script async defer

          src="https://maps.googleapis.com/maps/api/js?key=<%=ENV['MAPS_KEY']%>&callback=initMap">
        </script>
      </div>
    )
  }
}




Show.propTypes = {
  getActivity: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors,
  currentUser: state.auth.currentUser || {},
  activity: state.activity.activity
})

export default connect(mapStateToProps, {getActivity})(Show)
