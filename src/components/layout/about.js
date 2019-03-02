import React, {Component} from "react"
import "../../styles/layout/about.scss"

class About extends Component {

  render() {
    return (
      <div className="about-container">
        <div className="mission-title">About</div>
        <div className="mission-info-p1">
          Create services and experiences
        </div>
        
        <div className="mission-info-p2">
          Angaea is a market network, that is on a mission
          to see this world as one big neighborhood. We let
          users create services and experiences for everyone -
          to earn, meet like-minded people, make friends and
          connections. Most of all, this is the first such place
          that gives people the ability to be their true creative
          selves through technology and professional networks.
        </div>

        <div className="mission-info-p3">
          Our goal is to encourage everyone to use this
          platform to make some incredible services and
          experiences for people. Your portfolio is a way
          for others to see you and what you’re passionate
          about. So create something you know people will love.
        </div>

        <div className="mission-info-p4">
          Now let your passion choose you and serve your community.
        </div>
      </div>
    )
  }
}

export default About
