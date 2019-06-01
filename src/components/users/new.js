import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../styles/users/new.scss'
import {createUser, clearErrors} from '../../actions/session/auth'

class New extends Component{
  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      state: "",
      city: "",
      zipcode: "",
      password: "",
      password_confirmation: "",
      profession: "",
      about: "",
      facebook: "",
      instagram: "",
      youtube: "",
      twitter: "",
      pinterest: "",
      email_list: "",
      image: "",
      agree_to_terms: false,
    }
    this.hiddenInput = React.createRef()
    this.showingInput = React.createRef()
  }

  handleImage = field => {
    return e => {
      if(this.hiddenInput.value !== "") {
        this.setState({[field]: e.target.files[0]})
        this.showingInput.current.placeholder = "Image Attached"
      }
    }
  }

  componentDidMount() {
    this.props.clearErrors()
  }

  handleSubmit = e => {
    e.preventDefault()
    let formData = new FormData()
    formData.set("user[image]", this.state.image)
    formData.set("user[name]", this.state.name)
    formData.set("user[city]", this.state.city)
    formData.set("user[email]", this.state.email)
    formData.set("user[state]", this.state.state)
    formData.set("user[zipcode]", this.state.zipcode)
    formData.set("user[password]", this.state.password)
    formData.set("user[password_confirmation]", this.state.password_confirmation)
    formData.set("user[profession]", this.state.profession)
    formData.set("user[about]", this.state.about)
    formData.set("user[facebook]", this.state.facebook)
    formData.set("user[instagram]", this.state.instagram)
    formData.set("user[youtube]", this.state.youtube)
    formData.set("user[twitter]", this.state.twitter)
    formData.set("user[pinterest]", this.state.pinterest)
    formData.set("user[email_list]", this.state.email_list)
    formData.set("user[image]", this.state.image)
    formData.set("user[agree_to_terms]", this.state.agree_to_terms)
    this.props.createUser(formData).then(res => this.props.history.push(`/users/${this.props.currentUser.id}`))
  }

  handleChange = (field) => {
    return e => this.setState({[field]: e.target.value})
  }

  handleCheckbox = (field) => {
    return e => {
      if (e.target.checked) {
        this.setState({[field]: true})
      } else {
        this.setState({[field]: false})
      }
    }
  }

  render() {
    return (
      <div className="new-user-container">
        <h1>Create Artist Portfolio</h1>
        <form onSubmit={this.handleSubmit} encType="multipart/form-data" className="new-user-form" action="<%= users_path %>" method="post">

          <input className="second-new-user-name" type="text" name="user[name]" placeholder="FULL NAME*" onChange={this.handleChange("name")} value={this.state.name}/>

          <div className="new-user-email-city-container">
            <input className="second-new-user-email" type="email" name="user[email]" placeholder="EMAIL*" onChange={this.handleChange("email")} value={this.state.email}/>
            <input className="second-new-user-city" type="text" name="user[city]" placeholder="YOUR CITY*" onChange={this.handleChange("city")} value={this.state.city}/>
          </div>

          <div className="new-user-state-zip-container">
            <input className="second-new-user-state" type="text" name="user[state]" placeholder="STATE*" onChange={this.handleChange("state")} value={this.state.state}/>
            <input className="second-new-user-zipcode" type="text" name="user[zipcode]" placeholder="ZIPCODE" onChange={this.handleChange("zipcode")} value={this.state.zipcode}/>
          </div>

          <div className="new-user-password-container">
            <input className="second-new-user-password" type="password" name="user[password]" placeholder="PASSWORD*" onChange={this.handleChange("password")} value={this.state.password}/>
            <input className="second-new-user-password-conf" type="password" name="user[password_confirmation]" placeholder="PASSWORD CONFIRMATION*" onChange={this.handleChange("password_confirmation")} value={this.state.password_confirmation}/>
          </div>

          <div className="new-user-pro-talents-container">
            <input className="second-new-user-name" type="text" name="user[profession]" placeholder="PROFESSIONAL TALENT" onChange={this.handleChange("profession")} value={this.state.profession}/>
          </div>

          <textarea className="second-new-user-about" type="text" placeholder="ABOUT YOURSELF" name={this.state.about}></textarea>
          <div className="social-media-outer-container">
            <div className="social-media-left-container">
              <div className="social-image-text">
                Connect your online world for review
              </div>
              <div className="social-inner-container">
                <img className="social-inner-image" src="/review.png"/>
                <div className="social-inner-text">
                  Connecting your social media will help us
                  review your work faster and more efficiently!
                </div>
              </div>
              <div className="social-inner-container">
                <img className="social-inner-image" src="/positive.png"/>
                <div className="social-inner-text">
                  Don't worry if you haven't posted anything
                  there, you can send us a link of your work  on
                  any other website by posting it here.
                </div>
              </div>
              <div className="social-inner-container bottom-social-inner-container">
                <img className="social-inner-image" src="/testimonial.png"/>
                <div className="social-inner-text">
                  This will also help the users see all of your
                  work before booking your experiences.
                </div>
              </div>
            </div>
            <div className="social-media-right-container">
              <input className="second-new-user-facebook set-width-50" placeholder="FACEBOOK" type="text" name="user[facebook]" onChange={this.handleChange("facebook")} value={this.state.facebook}/>
              <input className="second-new-user-instagram set-width-50" placeholder="INSTAGRAM" type="text" name="user[instagram]" onChange={this.handleChange("instagram")} value={this.state.instagram}/>
              <input className="second-new-user-youtube set-width-50" placeholder="YOUTUBE" type="text" name="user[youtube]" onChange={this.handleChange("youtube")} value={this.state.youtube}/>
              <input className="second-new-user-twitter set-width-50" placeholder="TWITTER" type="text" name="user[twitter]" onChange={this.handleChange("twitter")} value={this.state.twitter}/>
              <input className="second-new-user-pinterest set-width-50" placeholder="PINTEREST" type="text" name="user[pinterest]" onChange={this.handleChange("pinterest")} value={this.state.pinterest}/>
            </div>
          </div>
          <div className="new-user-social-media-container">
            <div className="new-user-social-media-text" style={{marginTop: "15px"}}>Would you like to be on our mailing list?</div>
            <select className="red-border second-activity-new-category" onChange={this.handleChange("email_list")} name={this.state.email_list}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="new-user-margin-right-label">
            <input ref={this.showingInput} readOnly type="text" onClick={() => this.hiddenInput.current.click()} className="red-border second-activity-new-image" placeholder="PROFILE PICTURE"/>
            <div className="max-file-size">Max File Size 15MB</div>
            <input ref={this.hiddenInput} className="dont-display-image" type="hidden" type="file" name="user[image]" onChange={this.handleImage("image")} accept="image/*" value="" />
          </div>

          <div className="agreements">
            <div className="agreement-links">
              <Link className="terms-conditions-link" to="/termsAndConditions">Terms and Conditions Agreement</Link>
              <Link className="privacy-agreement-link" to="/privacyAgreement">Privacy Agreement</Link>
            </div>
            <div className="text-agreement">
              <div>By Checking This Box You Agree To Having Read and Accepted The Terms and Conditions and Privacy Agreement</div>
              <input className="agreement-checkbox" type="checkbox" name="user[agree_to_terms]" onChange={this.handleCheckbox("agree_to_terms")} value={this.state.agree_to_terms}/>
            </div>
          </div>

          <div className="center-my-btn">
            <input className="best-btn" type="submit" value="Create Portfolio"/>
          </div>
        </form>
      </div>
    )
  }
}

New.propTypes = {
  errors: PropTypes.object.isRequired,
  clearErrors: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth,
  currentUser: state.auth.currentUser || {}
})

export default connect(mapStateToProps, { clearErrors, createUser })(New)
