import React, { Component } from 'react'
import "../../styles/activities/new_activity_form.scss"
import { connect } from 'react-redux'
import { getActivity, editActivity } from '../../actions/activities/activityActions'
import PropTypes from 'prop-types'

class EditActivityForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activity_name: "",
      contact_email: "",
      contact_number: "",
      cost: "",
      capacity: "",
      recurring_schedule: "",
      content: "",
      additional_info: "",
      addressLN1: "",
      city: "",
      state: "",
      zip: "",
      start_date: new Date(),
      end_date: new Date(),
      image: "",
      images: ""
    }
    this.isImgAttached = this.isImgAttached.bind(this)
    this.isImgsAttached = this.isImgsAttached.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    await this.props.getActivity(this.props.match.params.id)

    let {
      activity_name,
      contact_email,
      contact_number,
      cost,
      capacity,
      recurring,
      recurring_schedule,
      content,
      additional_info,
      addressLN1,
      city,
      state,
      zip,
      start_date,
      end_date,
    } = this.props.activity.activity

    this.setState({
      activity_name,
      contact_email,
      contact_number,
      cost,
      capacity,
      recurring,
      recurring_schedule,
      content,
      additional_info,
      addressLN1,
      city,
      state,
      zip,
      start_date,
      end_date,
    })
  }

  isImgAttached(e) {
    let inputText = document.querySelector(".second-activity-new-image")
    let inputImg = document.querySelector(".dont-display-image")
    if(inputImg.value !== "") {
      this.setState({image: e.target.files[0]})
      inputText.placeholder = "Image Attached"
    }
  }

  isImgsAttached(e) {
    let inputText = document.querySelector(".activity-new-images")
    let inputImg = document.querySelector(".dont-display-images")
    let result = []
    if(inputImg.value !== "") {
      if(e.target.files.length > 0) {
        for(let i=0; i<e.target.files.length; i++) {
          result.push(e.target.files[i])
        }
        console.log(result);
        this.setState({images: result})
      }
      inputText.placeholder = "Images Attached"
    }
  }

  clickFileImage() {
    // let inputText = document.querySelector(".second-activity-new-image")
    let inputImg = document.querySelector(".dont-display-image")
    inputImg.click()
  }

  clickFileImages() {
    // let inputText = document.querySelector(".activity-new-images")
    let inputImgs = document.querySelector(".dont-display-images")
    inputImgs.click()
  }

  handleChange(name) {
    return e => this.setState({[name]: e.target.value})
  }

  async handleSubmit(e) {
    e.preventDefault()
    let formData = new FormData();
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }
    for(let i=0; i<this.state.images.length; i++) {
      formData.append("activity[images][]", this.state.images[i])
    }
    formData.set("activity[image]", this.state.image)
    formData.set("activity[activity_name]", this.state.activity_name)
    formData.set("activity[contact_email]", this.state.contact_email)
    formData.set("activity[contact_number]", this.state.contact_number)
    formData.set("activity[cost]", this.state.cost)
    formData.set("activity[capacity]", this.state.capacity)
    formData.set("activity[recurring_schedule]", this.state.recurring_schedule)
    formData.set("activity[content]", this.state.content)
    formData.set("activity[additional_info]", this.state.additional_info)
    formData.set("activity[addressLN1]", this.state.addressLN1)
    formData.set("activity[city]", this.state.city)
    formData.set("activity[state]", this.state.state)
    formData.set("activity[zip]", this.state.zip)
    formData.set("activity[start_date]", this.state.start_date)
    formData.set("activity[end_date]", this.state.end_date)

    await this.props.editActivity(formData, config, this.props.match.params.id)
    this.props.history.push(`/activities/${this.props.match.params.id}`)
  }

  render() {
    return (
      <div className="second-create-activity-form-container">
        <h1>Create Your Experience</h1>
        <form onSubmit={this.handleSubmit} className="date-className second-create-activity-form-css">
          <div className="second-activity-new-personal-info-container">
            <input className="red-border new-activity-name" type="text" name="activity[activity_name]" placeholder="NAME*" onChange={this.handleChange("activity_name")} value={this.state.activity_name}/>
            <input className="red-border new-activity-email" type="email" name="activity[contact_email]" placeholder="EMAIL*" onChange={this.handleChange("contact_email")} value={this.state.contact_email}/>
            <input className="red-border new-activity-number" type="text" name="activity[contact_number]" placeholder="CONTACT NUMBER*" onChange={this.handleChange("contact_number")} value={this.state.contact_number}/>
          </div>

          <div className="second-activity-new-price-info-container">
            <input className="red-border second-activity-new-cost" type="text" name="activity[cost]" placeholder="PRICE*" onChange={this.handleChange("cost")} value={this.state.cost}/>
            <input className="red-border second-activity-new-capacity" type="text" name="activity[capacity]" placeholder="MAX ATTENDEES*" onChange={this.handleChange("capacity")} value={this.state.capacity}/>

            <label>
              <select className="red-border second-activity-new-recurring" name="activity[recurring_schedule]" onChange={this.handleChange("recurring_schedule")}>
                <option value="">One-Time*</option>
                <option value="weekly">Weekly</option>
                <option value="bi-weekly">Bi-Weekly</option>
              </select>
            </label>
          </div>

          <div className="red-border second-activity-new-about-container">
            <textarea className="second-activity-new-about" name="activity[content]" onChange={this.handleChange("content")} placeholder="ABOUT SERVICE*" value={this.state.content}></textarea>
            <textarea className="second-activity-new-bring" name="activity[additional_info]" onChange={this.handleChange("additional_info")} placeholder="WHAT TO BRING*" value={this.state.additional_info}></textarea>
          </div>

          <div className="red-border second-activity-new-location-container">
            <input className="second-activity-new-location-address" type="text" name="activity[addressLN1]" placeholder="ADDRESS*" onChange={this.handleChange("addressLN1")} value={this.state.addressLN1}/>
            <input className="second-activity-new-location-city" type="text" name="activity[city]" placeholder="CITY*" onChange={this.handleChange("city")} value={this.state.city}/>
            <input className="second-activity-new-location-state" type="text" name="activity[state]" placeholder="STATE*" onChange={this.handleChange("state")} value={this.state.state}/>
            <input className="second-activity-new-location-zip" type="text" name="activity[zip]" placeholder="ZIPCODE*" onChange={this.handleChange("zip")} value={this.state.zip}/>
          </div>

          <div className="second-activity-new-date-container">
            <label>
              <div className="second-activity-new-date-text-start">Start Date:*</div>
              <input type="datetime-local" className="start-datetime start-datetime-input-container datetime-input-container red-border second-activity-new-date-start" placeholder="format: 00/00/0000 00:00AM" onChange={this.handleChange("start_date")} value={this.state.start_date}/>
              <input className="start-datetime-value start-date" type="hidden" name="activity[start_date]" value=""/>
            </label>

            <label>
              <div className="second-activity-new-date-text-end">End Date:*</div>
              <input type="datetime-local" className="end-datetime end-datetime-input-container datetime-input-container red-border second-activity-new-date-end" placeholder="format: 00/00/0000 00:00AM" onChange={this.handleChange("end_date")} value={this.state.end_date}/>
            </label>
          </div>

          <div className="second-activity-new-images-container">
            <div className="margin-right-label">
              <div className="bold-it">Main Image*:</div>
              <input onClick={this.clickFileImage} readOnly type="text" className="red-border second-activity-new-image" placeholder="UPLOAD IMAGE"/>
              <div className="max-file-size">Max File Size 15MB</div>
              <input onChange={this.isImgAttached} className="dont-display-image" type="file" accept="image/*" value=""/>
            </div>
            <label>
              <div className="Make-normal">Other Images:</div>
              <input onClick={this.clickFileImages} readOnly type="text" className="red-border activity-new-images" placeholder="UPLOAD IMAGES"/>
              <div className="max-file-size">Max File Size 15MB</div>
              <input onChange={this.isImgsAttached} className="dont-display-images" type="file" accept="image/*" value="" multiple/>
            </label>
          </div>

          <input className="best-btn" type="submit" value="Create Experience"/>
        </form>
      </div>
    )
  }
}

EditActivityForm.propTypes = {
  getActivity: PropTypes.func.isRequired,
  editActivity: PropTypes.func.isRequired,
  activity: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  let values = {
    errors: state.errors,
    activity: state.activity.activity
  }
  return values
}

export default connect(mapStateToProps, { getActivity, editActivity })(EditActivityForm)
