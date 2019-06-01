import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/layout/aboutCreating.scss'
import Loader from 'react-loader-spinner'

class AboutCreating extends Component {
  state = {
    loaded: false
  }
  // for later
  // setLoading = () => {
  //   console.log("here");
  //   document.querySelector(".abc-loader").style.display = "none"
  // }
  render() {
    return(
      <div className="about-creating-container">
        <div className="container-one">
          <img className="cone-img" onLoad={this.setLoading} src="about_creating_one.jpg" alt="something"/>
          <div className="cone-text-container">
            <div className="cone-text">Be a part of something that can change lives.</div>
            <div className="cone-text">The experience economy is where you can be at the center stage. Literally</div>
          </div>
        </div>
        <div className="landing-fourth-container">
          <div className="make-smaller-landing">
            <div className="landing-fourth-title">We'll be with you every step of the way</div>
            <div className="landing-fourth-bottom">
              <div className="landing-fourth-box">
                <img alt="" className="landing-fourth-img" src="https://github.com/alexg622/angaea_heroku/blob/master/app/assets/images/close-envelope.png?raw=true" alt=""/>
                <div className="landing-fourth-text-one">
                  Once you create your portfolio, we use our compliance tools to review it and approve, typically within an hour or two by sending you an email.
                </div>
              </div>
              <div className="landing-fourth-box">
                <img alt="" className="landing-fourth-img" src="navigation_new.png"/>
                <div className="landing-fourth-text-one">
                  In the email, you'll find a link which will guide you back to the platform and you can browse through our experiences and apply for those where you can perform.
                </div>
              </div>
              <div className="landing-fourth-box">
                <img alt="" className="landing-fourth-img" src="happiness_new.png"/>
                <div className="landing-fourth-text-one">
                  Once you've applied, we will quickly approve from our side and share the venue address and the contact details of the manager at the venue. And, you're ready to perform!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-one">
          <img className="cone-img" src="about_creating_two.jpg" alt="something"/>
          <div className="cone-text-three-container">
            <div className="cone-text-two">Show where you come from. You have the complete freedom to perform.</div>
            <div className="cone-text-two">Earning has never been easier for an artist. We only take 30% from each booking, The rest is yours.</div>
          </div>
        </div>
        <div className="final-container">
          <div className="final-text">Join us! We promise it will be worth your time.</div>
          <Link className="lr-first-experiences-link font-cont-size" to="/users/new">Create Artist Portfolio</Link>
        </div>
      </div>
    )
  }
}

export default AboutCreating
