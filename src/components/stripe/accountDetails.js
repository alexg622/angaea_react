import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import '../../styles/stripe/acctDetails.scss'
import { submitStripeAcct } from '../../actions/session/auth'

class AcctDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      routing_number: "110000000",
      account_number: "000123456789",
      ssn_last_4: "1234",
      entity_type: "individual",
      business_name: "",
      business_tax_id: "",
      first_name: "Bill",
      last_name: "Nye the science guy",
      dob_day: "22",
      dob_month: "06",
      dob_year: "1988",
      address_line1: "131 Lake Merced Hills",
      city: "San Francisco",
      state: "CA",
      postal_code: "94132"
    }
  }

  handleChange = (field) => {
    return e => this.setState({[field]: e.target.value})
  }

  handleSubmit = e => {

    e.preventDefault()

    let { currentUser } = this.props
    let id = currentUser.id
    let url = `http://localhost:3001/api/stripe/${currentUser.id}/stripe_acct_details`
    let formData = new FormData()

    formData.set("stripe_connect[routing_number]", this.state.routing_number)
    formData.set("stripe_connect[account_number]", this.state.account_number)
    formData.set("stripe_connect[ssn_last_4]", this.state.ssn_last_4)
    formData.set("stripe_connect[entity_type]", this.state.entity_type)
    formData.set("stripe_connect[business_name]", this.state.business_name)
    formData.set("stripe_connect[business_tax_id]", this.state.business_tax_id)
    formData.set("stripe_connect[first_name]", this.state.first_name)
    formData.set("stripe_connect[last_name]", this.state.last_name)
    formData.set("stripe_connect[dob_day]", this.state.dob_day)
    formData.set("stripe_connect[dob_month]", this.state.dob_month)
    formData.set("stripe_connect[dob_year]", this.state.dob_year)
    formData.set("stripe_connect[address_line1]", this.state.address_line1)
    formData.set("stripe_connect[city]", this.state.city)
    formData.set("stripe_connect[state]", this.state.state)
    formData.set("stripe_connect[postal_code]", this.state.postal_code)
    this.props.submitStripeAcct(url, formData)
    .then(res => this.props.history.push(`/stripe/${id}/stripe_acct`))
    .catch(err => console.log(err))
  }

  render() {
    window.currentUser = this.props.currentUser
    window.state = this.state
    return(
      <div className="new-user-container">
        <h1>Lets up Your Payment Information</h1>
        <form onSubmit={this.handleSubmit} encType="multipart/form-data" className="new-user-form" action="/stripe/<%=@user.id%>/stripe_acct_details">
          <div className="stripe-help-text">Account Information</div>
          <div className="new-user-email-city-container">
            <input className="second-new-user-email" type="text" name="stripe_connect[routing_number]" placeholder="ROUTING NUMBER*" onChange={this.handleChange("routing_number")} value={this.state.routing_number}/>
            <input className="second-new-user-city" type="text" name="stripe_connect[account_number]" placeholder="ACCOUNT NUMBER*" onChange={this.handleChange("account_number")} value={this.state.account_number}/>
          </div>

          <div className="new-user-email-city-container">
            <input className="second-new-user-email" type="password" name="stripe_connect[ssn_last_4]" placeholder="SSN LAST 4*" onChange={this.handleChange("ssn_last_4")} value={this.state.ssn_last_4}/>
              <select className="red-border stripe-entity-type-width" name="stripe_connect[entity_type]" onChange={this.handleChange("entity_type")} >
                <option value="individual">Individual*</option>
                <option value="company">Company*</option>
              </select>
          </div>

          <div className="new-user-email-city-container stripe-form-marg-bottom">
            <input className="second-new-user-email" type="text" name="stripe_connect[business_name]" placeholder="COMPANIES ONLY* - COMPANY NAME" onChange={this.handleChange("business_name")} value={this.state.business_name}/>
            <input className="second-new-user-city" type="text" name="stripe_connect[business_tax_id]" placeholder="COMPANIES ONLY* - COMPANY TAX ID" onChange={this.handleChange("business_tax_id")} value={this.state.business_tax_id}/>
          </div>

          <div className="stripe-help-text">Name Associated with Account</div>
          <div className="new-user-email-city-container">
            <input className="second-new-user-email" type="text" name="stripe_connect[first_name]" placeholder="FIRST NAME*" onChange={this.handleChange("first_name")} value={this.state.first_name}/>
            <input className="second-new-user-city" type="text" name="stripe_connect[last_name]" placeholder="LAST NAME*" onChange={this.handleChange("last_name")} value={this.state.last_name}/>
          </div>

          <div className="new-user-email-city-container">
            <input className="second-new-user-email" type="text" name="stripe_connect[dob_day]" placeholder="DOB DAY - 00*" onChange={this.handleChange("dob_day")} value={this.state.dob_day}/>
            <input className="second-new-user-city" type="text" name="stripe_connect[dob_month]" placeholder="DOB MONTH - 00*" onChange={this.handleChange("dob_month")} value={this.state.dob_month}/>
          </div>

          <div className="new-user-email-city-container stripe-form-marg-bottom">
            <input className="second-new-user-email stripe-dob-year" type="text" name="stripe_connect[dob_year]" placeholder="DOB YEAR - 0000*" onChange={this.handleChange("dob_year")} value={this.state.dob_year}/>
          </div>

          <div className="stripe-help-text">Address Associated with Account</div>
          <div className="new-user-email-city-container">
            <input className="second-new-user-email" type="text" name="stripe_connect[address_line1]" placeholder="ADDRESS*" onChange={this.handleChange("address_line1")} value={this.state.address_line1}/>
            <input className="second-new-user-city" type="text" name="stripe_connect[city]" placeholder="CITY*" onChange={this.handleChange("city")} value={this.state.city}/>
          </div>

          <div className="new-user-email-city-container">
            <input className="second-new-user-email" type="text" name="stripe_connect[state]" placeholder="STATE*" onChange={this.handleChange("state")} value={this.state.state}/>
            <input className="second-new-user-city" type="text" name="stripe_connect[postal_code]" placeholder="ZIPCODE*" onChange={this.handleChange("postal_code")} value={this.state.postal_code}/>
          </div>

          <input id="get-you-paid-submit" className="stripe-button-marg-top" type="submit" value="Done"/>

          <div className="stripe-explanation">
            <a id="link-to-stripe" href="https://stripe.com/docs/connect/required-verification-information">Stripe Required Verification Information</a>
          </div>
        </form>
      </div>
    )
  }
}

AcctDetails.propTypes = {
  currentUser: PropTypes.object.isRequired,
  submitStripeAcct: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  let values = {
    currentUser: state.auth.currentUser || {}
  }
  return values
}

export default connect(mapStateToProps, { submitStripeAcct })(AcctDetails)
