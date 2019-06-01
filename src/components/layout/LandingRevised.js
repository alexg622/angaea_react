import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/layout/landing_revised.scss'

class LandingRevised extends Component {
  constructor() {
    super()
    this.state = {
      scrollPos: 0
    }
    this.leftArrow = React.createRef()
    this.rightArrow = React.createRef()
    this.firstScroll = React.createRef()
    this.secondScroll = React.createRef()
    this.scrollContainer = React.createRef()
    this.thirdScroll = React.createRef()
    this.circleOne = React.createRef()
    this.circleTwo = React.createRef()
    this.circleThree = React.createRef()
  }

  scrollLeft = () => {
    if (this.scrollContainer != null) {
      let circles = [this.circleOne.current, this.circleTwo.current, this.circleThree.current]
      let scrollContainer = this.scrollContainer.current
      let scrollContainerWidth = scrollContainer.getClientRects()[0].width
      let { scrollPos } = this.state
      if(scrollPos != 0) {
        circles[scrollPos].style.backgroundColor = "transparent"
        scrollPos -= 1
        circles[scrollPos].style.backgroundColor = "white"
      }
      scrollContainer.scroll({ left: scrollContainerWidth*scrollPos, behavior: "smooth" })
      this.setState({ scrollPos })
    }
  }

  scrollRight = () => {
    if (this.scrollContainer != null) {
      let circles = [this.circleOne.current, this.circleTwo.current, this.circleThree.current]
      let scrollContainer = this.scrollContainer.current
      let scrollContainerWidth = scrollContainer.getClientRects()[0].width
      let { scrollPos } = this.state

      if(scrollPos != 2) {
        circles[scrollPos].style.backgroundColor = "transparent"
        scrollPos += 1
        circles[scrollPos].style.backgroundColor = "white"
      }
      scrollContainer.scroll({ left: scrollContainerWidth*scrollPos, behavior: "smooth" })
      this.setState({ scrollPos })
    }
  }

  render() {
    return (
      <div className="lr-container">
        <div ref={this.scrollContainer} className="lr-slider-top-container">
          <div ref={this.rightArrow} onClick={this.scrollRight} className="lr-right-arrow">{">"}</div>
          <div ref={this.leftArrow} onClick={this.scrollLeft} className="lr-left-arrow">{"<"}</div>
          <div className="lr-circles-container">
            <div ref={this.circleOne} className="circle-one"></div>
            <div ref={this.circleTwo} className="circle-two"></div>
            <div ref={this.circleThree} className="circle-three"></div>
          </div>
          <div ref={this.firstScroll} className="lr-first-slide-container">
            <div className="lr-first-upper-text">Welcome to Angaea!</div>
            <div className="lr-first-paragraph">The perfect place to experience culture through music and dance!</div>
            <Link className="lr-first-experiences-link" to="/experiences">Look for experiences</Link>
          </div>
          <div ref={this.secondScroll} className="lr-second-slide-container">
            <div className="lr-second-upper-text">Share</div>
            <div className="lr-second-upper-paragraph">YOUR PASSION</div>
            <div className="lr-second-paragraph">Create your portfolio on Angaea and apply to perform at the shows and concerts produced by us.</div>
            <div className="lr-second-paragraph" >The best way to make a difference and give people incredible experiences through your talent.</div>
          </div>
          <div ref={this.thirdScroll} className="lr-third-slide-container">
            <div className="lr-second-upper-text">Make</div>
            <div className="lr-second-upper-paragraph">IT HAPPEN</div>
            <div className="lr-second-paragraph">An experience is the best way to learn, share, connect and remember. We want to give you such cultural experiences from all over the world.</div>
            <div className="lr-second-paragraph">You can book them here on our website. Make lasting memories and get a taste of different cultures through music, dance, food and art.</div>
          </div>
        </div>
        <div className="lr-how-it-works-container">
          <div className="lr-how-it-works-title">Here's how it works</div>
          <div className="lr-how-it-works-text-outer-container">
            <div className="lr-how-it-works-text-container">
              <div className="lr-how-it-works-text">We create shows and intimate concerts with the help of technology.</div>
              <div className="lr-how-it-works-text">They will be at different venues we partnered with.</div>
            </div>
            <div className="lr-how-it-works-text-container">
              <div className="lr-how-it-works-text">Artists create their portfolios on our platform and apply for these shows.</div>
              <div className="lr-how-it-works-text">This helps us with compliance and you to see who's playing.</div>
            </div>
            <div className="lr-how-it-works-text-container">
              <div className="lr-how-it-works-text">You browse through a range of different experiences listed and buy spots!</div>
              <div className="lr-how-it-works-text">We will disclose the venue in an email.</div>
            </div>
          </div>
        </div>
        <div className="lr-portfolio-explanation-container">
          <div className="lr-portfolio-left-container">
            <div className="lr-portfolio-left-paragraph">
              If you're a musician or dancer, this is the perfect
              place for you to shine and show what you've got!
            </div>
            <div className="lr-portfolio-left-paragraph">
              Join us and create your portfolio. You can access all
              the experiences we've created and apply for them.
            </div>
            <div className="lr-portfolio-left-paragraph">
              We will guide you every step of the way. Getting fair
              pay for your talents and passion has never been easier!
            </div>
          </div>
          <div className="lr-portfolio-right-container">
            <Link className="lr-first-experiences-link" to="/aboutCreating">Create Artist Portfolio</Link>
          </div>
        </div>
        <div className="lr-experience-economy-container">
          <div className="lr-header-text">Be a part of the experience economy</div>
          <div className="lr-closing-text-container">
            <div className="lr-left-text-container">
              <img className="lr-closing-image" src="/man-in-a-party-dancing-with-people.png" alt="lr-first"/>
              <div className="lr-closing-paragraph">
                It's easy to apply for the experiences. All you need is a
                portfolio on our platform that helps us review your talents
                and let buyers see your profile.
              </div>
              <div className="lr-closing-paragraph">
                We will take a small commission on every booking and leave the rest
                for the artists!
              </div>
            </div>
            <div className="lr-right-text-container">
              <img className="lr-closing-image-second" src="/dab.png" alt="lr-second"/>
              <div className="lr-closing-paragraph">
                It's easier to buy experiences. Sinply log in, browse
                the ones you like and buy them!
              </div>
              <div className="lr-closing-paragraph">
                It is time to let your passion choose you and be a part of
                cultures from all over the world.
              </div>
            </div>
          </div>
        </div>
        <div className="lr-final-container">
          <Link className="lr-first-experiences-link" to="/experiences">Look for experiences.</Link>
        </div>
      </div>
    )
  }
}

export default LandingRevised
