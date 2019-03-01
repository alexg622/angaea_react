import React, { Component } from 'react';
import "../../styles/layout/landing.scss"
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="landing-container">

        <div className="landing-first-container">
          <div className="landing-title">Welcome to Angaea</div>
          <div className="landing-first-text">
            Meet people, make friends and connections
            through experiences. Earn some extra income
            through the services you create. We have made
            this platform for you to serve your community
            in the best way possible, by letting your passion
            choose you.
          </div>
          <Link className="best-btn widen" to="/login">Login/Create my Portfolio</Link>
        </div>

        <div className="landing-second-container">
          <div className="landing-second-left">
            <div className="landing-second-title">Services</div>
            <div className="landing-second-text">
              Once you make your portfolio,
              you can create a service based
              on your skills and talents. Cooking
              delicious meals, teaching how to dance,
              setting up a musical evening, it's really
              up to you and your incredible talents,
              because everyone's got them. It's just a
              matter of choosing how you want to use them
              to put a smile on people's faces!
            </div>
            <div className="landing-second-text">
              Angaea gives you the complete freedom
              to create services. Please ensure to
              complete your portfolio before you do it
              so that people willing to book your service
              know how good you are by visiting your portfolio
              and social media.
            </div>
            <div className="landing-second-text">
              Here's an example that might be helpful.
            </div>
          </div>
          <div className="landing-second-right">
            <div className="landing-second-right-left">
              <div className="landing-second-right-box-left">
                <div className="landing-second-box-text">
                  1. <strong className="landing-bold">Meet Bill.</strong> Bill loves to cook Italian
                  and Chinese and is really good at it! He
                  keeps posting his meals on social media
                  and wants to cook for people and teach them.
                </div>
              </div>
              <div className="landing-second-right-box-right">
                <div className="landing-second-box-text">
                  2. <strong className="landing-bold"> Enter Angaea.</strong> He creates a portfolio,
                  links his social media for everyone to see
                  and creates a service.
                </div>
              </div>
            </div>
            <div className="landing-second-right-right">
              <div className="landing-second-right-box-left">
                <div className="landing-second-box-text-bottom">
                  3. He calls his service 'Bill's Italian Delight'
                  and offers it to people every Sunday with a new
                  menu, at his place where people will cook, learn
                  and sets price at $35.
                </div>
              </div>
              <div className="landing-second-right-box-right">
                <div className="landing-second-box-text-bottom">
                  4. He shares it on his social media pages
                  and people are able to see his service and
                  book it. All on Angaea. Once booked, he's able
                  to communicate with them.
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="landing-second-container">
          <div className="landing-second-right  salmon-color">
            <div className="landing-second-right-left">
              <div className="landing-second-right-box-left salmon-color">
                <div className="landing-second-box-text">
                  1. <strong className="landing-bold">Meet Ada.</strong> Ada
                  loves to play music and knows a lot of cool
                  places that play jazz around the city. She
                  wants to meet people that share her love and
                  show them her favorite place.
                </div>
              </div>
              <div className="landing-second-right-box-right salmon-color">
                <div className="landing-second-box-text">
                  2. <strong className="landing-bold"> Enter Angaea.</strong> She creates
                  a portfolio, links her social media for everyone to see and creates
                  an experience.
                </div>
              </div>
            </div>
            <div className="landing-second-right-right">
              <div className="landing-second-right-box-left salmon-color">
                <div className="landing-second-box-text-bottom">
                  3. She calls her experience 'Jazzy Thursday
                  Evenings' and offers it to those who love music
                  with a tour of cool places, some company and food
                  pricing it at $15.
                </div>
              </div>
              <div className="landing-second-right-box-right salmon-color">
                <div className="landing-second-box-text-bottom">
                  4. She shares it on her social media pages and
                  people are able to see her experience and book
                  it. All on Angaea. Once booked, she's able to
                  communicate with them.
                </div>
              </div>
            </div>
          </div>
          <div className="landing-second-left">
            <div className="landing-second-title">Experiences</div>
            <div className="landing-second-text">
              Once you make your portfolio, you can
              create an experience for people based
              on what you love to do. Creating gaming
              marathons on XBOX, going out for musical
              evenings or hiking up a mountain, it's really
              up to your interests, because everyone's got them.
              It's just a matter of choosing how you want to use
              them to meet like-minded people and socialize!
            </div>
            <div className="landing-second-text">
              Angaea gives you the complete freedom to
              create experiences. Please ensure to complete
              your portfolio before you do it so that people
              willing to book your experience know how passionate
              you are by visiting your portfolio and social media.
            </div>
            <div className="landing-second-text">
              Here's an example that might be helpful.
            </div>
          </div>
        </div>


        <div className="landing-fourth-container">
          <div className="make-smaller-landing">
            <div className="landing-fourth-title">It's Free to Create, always will be.</div>
            <div className="landing-fourth-bottom">
              <div className="landing-fourth-box">
                <img alt="" className="landing-fourth-img" src="https://github.com/alexg622/angaea_heroku/blob/master/app/assets/images/dab.png?raw=true"/>
                <div className="landing-fourth-text-one">
                  It's going to be about
                  talents and how you can
                  earn from them to make a
                  difference.
                </div>
                <div className="landing-fourth-text">
                  The future is our sharing economy.
                </div>
              </div>
              <div className="landing-fourth-box">
                <img alt="" className="landing-fourth-img" src="https://github.com/alexg622/angaea_heroku/blob/master/app/assets/images/man-in-a-party-dancing-with-people.png?raw=true"/>
                <div className="landing-fourth-text-one">
                  Come and join us.
                </div>
                <div className="landing-fourth-text">
                  It's more than just a community.
                  The world is one big neighborhood
                  and that's our vision.
                </div>
              </div>
              <div className="landing-fourth-box">
                <img alt="" className="landing-fourth-img" src="https://github.com/alexg622/angaea_heroku/blob/master/app/assets/images/invisible-man.png?raw=true"/>
                <div className="landing-fourth-text-one">
                  We don't charge any extra fees.
                </div>
                <div className="landing-fourth-text">
                  We keep things simple. A small
                  commission on every booking.
                </div>
              </div>
            </div>
          </div>
        </div>
        <script>
          document.querySelector("body").style.padding = "0"
        </script>
      </div>

    )
  }
}

export default Landing
