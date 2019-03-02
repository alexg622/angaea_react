import React, {Component} from "react"
import "../../styles/layout/contact.scss"

class Contact extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="mission-title">CONTACT US</div>
        <div className="contact-us">Please feel free to contact us if you have any questions at contact@angaea.com</div>
        <div className="mission-info-container">
          <div className="dash-team">Team</div>
          <div className="team-one-container">
            <img className="dash-ron-img" src="https://github.com/alexg622/angaea_heroku/blob/master/app/assets/images/IMG_6820.JPG?raw=true"/>
            <div className="about-ron-container">
              <div className="about-ron-title">Ron Joshi</div>
              <div className="about-ron">
                With a background in law
                and business, Ron is extremely
                passionate about how technology
                can make our physical world easier.
                He loves design and believes that
                people are inherently creative beings.
                He and his co-founder are trying to make
                it easy for anyone to create and earn.
              </div>
            </div>
          </div>
          <div className="team-one-container">
            <div className="about-alex-container">
              <div className="about-ron-title">Alex Gonzalez</div>
              <div className="about-alex">
                Alex loves using technology to make
                the world a better place. He transitioned
                from majoring in music to pursue engineering.
                He was an expert at setting up secure internet
                connections while in the military.
              </div>
            </div>
            <img className="dash-alex-img" src="https://github.com/alexg622/angaea_heroku/blob/master/app/assets/images/Alex_Gonzalez_3.jpg?raw=true"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
