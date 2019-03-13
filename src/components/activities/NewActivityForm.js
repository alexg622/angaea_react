import React, { Component } from 'react'
import "../../styles/activities/new_activity_form.scss"
class NewActivityForm extends Component {
  constructor() {
    super()
    this.state = {
      activity_name: "",
      contact_email: "",
      contact_number: "",
      cost: "",
      capacity: "",
      category: "",
      recurring_schedule: "",
      content: "",
      additional_info: "",
      addressLN1: "",
      city: "",
      state: "",
      zip: "",
      start_date: "",
      end_date: "",
      image: "",
      images: ""
    }
  }

  handleChange(name) {
    return e => this.setState({[name]: e.target.value})
  }

  render() {
    return (
      <div className="display-it-none second-create-activity-form-container">
        <h1>Create Your Experience</h1>
        <form className="date-className second-create-activity-form-css">
          <div className="second-activity-new-personal-info-container">
            <input className="red-border new-activity-name" type="text" name="activity[activity_name]" placeholder="NAME*" onChange={this.handleChange("activity_name")} value={this.state.activity_name}/>
            <input className="red-border new-activity-email" type="email" name="activity[contact_email]" placeholder="EMAIL*" onChange={this.handleChange("contact_email")} value={this.state.contact_email}/>
            <input className="red-border new-activity-number" type="text" name="activity[contact_number]" placeholder="CONTACT NUMBER*" onChange={this.handleChange("contact_number")} value={this.state.contact_number}/>
          </div>

          <div className="second-activity-new-price-info-container">
            <input className="red-border second-activity-new-cost" type="text" name="activity[cost]" placeholder="PRICE*" onChange={this.handleChange("cost")} value={this.state.cost}/>
            <input className="red-border second-activity-new-capacity" type="text" name="activity[capacity]" placeholder="MAX ATTENDEES*" onChange={this.handleChange("capacity")} value={this.state.capacity}/>

              <select className="red-border second-activity-new-category" name="activity[category]">
                <option value="art">art*</option>
                <option value="music">music</option>
                <option value="food">food</option>
                <option value="dance">dance</option>
                <option value="theatre">theatre</option>
                <option value="comedy">comedy</option>
              </select>

            <label>
              <select className="red-border second-activity-new-recurring" name="activity[recurring_schedule]">
                <option value="">One-Time*</option>
                <option value="weekly">Weekly</option>
                <option value="bi-weekly">Bi-Weekly</option>
              </select>
            </label>
          </div>

          <div className="red-border second-activity-new-about-container">
            <textarea className="second-activity-new-about" name="activity[content]" placeholder="ABOUT SERVICE*"></textarea>
            <textarea className="second-activity-new-bring" name="activity[additional_info]" placeholder="WHAT TO BRING*"></textarea>
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
              <div className="start-datetime start-datetime-input-container datetime-input-container red-border second-activity-new-date-start">
                <div className="start-datetime datetime-input datetime-day">00</div>
                <div className="start-datetime datetime-input datetime-divider">/</div>
                <div className="start-datetime datetime-input datetime-month">00</div>
                <div className="start-datetime datetime-input datetime-divider">/</div>
                <div className="start-datetime datetime-input datetime-year">0000</div>
                <div className="start-datetime datetime-input datetime-hour"> 00</div>
                <div className="start-datetime datetime-input datetime-divider">:</div>
                <div className="start-datetime datetime-input datetime-minute">00</div>
                <div className="start-datetime datetime-input datetime-ampm">AM</div>
              </div>
              <input className="start-datetime-value start-date" type="hidden" name="activity[start_date]" value=""/>
            </label>

            <label>
              <div className="second-activity-new-date-text-end">End Date:*</div>
              <div className="end-datetime end-datetime-input-container datetime-input-container red-border second-activity-new-date-end">
                <div className="end-datetime datetime-input end-datetime-day">00</div>
                <div className="end-datetime datetime-input end-datetime-divider">/</div>
                <div className="end-datetime datetime-input end-datetime-month">00</div>
                <div className="end-datetime datetime-input end-datetime-divider">/</div>
                <div className="end-datetime datetime-input end-datetime-year">0000</div>
                <div className="end-datetime datetime-input end-datetime-hour left-hour">00</div>
                <div className="end-datetime datetime-input end-datetime-divider">:</div>
                <div className="end-datetime datetime-input end-datetime-minute">00</div>
                <div className="end-datetime datetime-input end-datetime-ampm">AM</div>
              </div>
              <input className="end-datetime-value end-date" type="hidden" name="activity[end_date]" value=""/>
            </label>
          </div>

          <div className="second-activity-new-images-container">
            <div className="margin-right-label">
              <div className="bold-it">Main Image*:</div>
              <input readonly type="text" className="red-border second-activity-new-image" placeholder="UPLOAD IMAGE"/>
              <div className="max-file-size">Max File Size 15MB</div>
              <input className="dont-display-image" type="file" type="hidden" name="activity[image]" value="" multiple="multiple"/>
            </div>
            <label>
              <div className="Make-normal">Other Images:</div>
              <input readonly type="text" className="red-border activity-new-images" placeholder="UPLOAD IMAGES"/>
              <div className="max-file-size">Max File Size 15MB</div>
              <input className="dont-display-images" type="file" name="activity[images][]" value="" multiple="multiple"/>
            </label>
          </div>

          <input className="best-btn" type="submit" value="Create Experience"/>
        </form>
      </div>
    )
  }
}

export default NewActivityForm
