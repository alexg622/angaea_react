import React, {Component} from "react"
import PropTypes from 'prop-types';
import { getActivity } from '../../actions/activities/activityActions'
import { connect } from 'react-redux';
import "../../styles/activities/new_activity_ticket.scss"
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios"

class NewActivityTicket extends Component {
  constructor(props) {
    super(props)
    this.state = {
      serviceFee: 0.10,
      numberOfSpots: 1,
      total: 0.0,
      startingTotal: 0.0,
      amount: 0.0,
      email: ""
    }
  }

  componentDidMount() {
    this.props.getActivity(this.props.match.params.id)
    .then(res => {
      let {activity} = this.props.activity
      let total = parseFloat(activity.cost)
      let startingTotal = total
      let serviceFee = Math.round((total*.1) * 100) / 100
      total += serviceFee
      let amount = total*100
      if(activity) this.setState({total, serviceFee, startingTotal, amount})
    })
  }

  sendToken = ( token, id ) => {
    let {total, email, numberOfSpots} = this.state
    let jsonToken = token
    axios.defaults.xsrfCookieName = "CSRF-TOKEN";
    axios.defaults.xsrfHeaderName = "X-CSRF-Token";
    axios.defaults.withCredentials = true;
    axios.post(
      `https://www.angaea.com/api/activities/${id}/activity_tickets`,
      {jsonToken, email, total, numberOfSpots}
    )
    .then(res => {
      return this.props.history.push(`/activities/${id}`)
    })
    .catch(err => {
      return {error: err}
    })
  }

  onToken = (token) => {
    let id = this.props.match.params.id
    this.sendToken(token, id)

  }

  showActivityName = ( activity ) => {
    if(activity) return activity.activity_name
  }

  showActivityCost = ( activity ) => {
    if(activity) return activity.cost
  }

  handleChange = ( e ) => {
    let numberOfSpots = e.target.value
    let total = numberOfSpots * this.state.startingTotal
    let serviceFee = Math.round((total*.1) * 100) / 100
    total += serviceFee
    let amount = total*100

    this.setState({ serviceFee, total, amount, numberOfSpots })
  }

  showDescription = (activity) => {
    let { total, numberOfSpots, startingTotal } = this.state
    if(activity) {
      if(numberOfSpots === 1) {
        return `Purchasing 1 spot for $${total}`
      } else {
        return `Purchasing ${numberOfSpots} spots for $${total}`
      }
      return `Spots: ${numberOfSpots} \n Total: $${total}`
    }
  }

  handleEmail = field => {
    return e => this.setState({[field]: e.target.value})
  }

  render() {
    let { activity } = this.props.activity
    let { serviceFee, total, amount, email } = this.state

    return (
      <div className="new-activity-ticket-container">
        <div className="checkout-text">Checkout</div>
        <div className="checkout-container">
          <div className="service-purchase-container">
            <div className="purchase-text">Service Purchasing:</div>
            <div className="service-name">{this.showActivityName(activity)}</div>
          </div>
          <div className="spots-container">
            <div className="spots-text">Total Number of Spots:</div>
            <select className="spots-select" onChange={this.handleChange} name="activity_tickets[spots_buying]">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="price-container">
            <div className="price-text">Price:</div>
            <div className="price">${this.showActivityCost(activity)}</div>
          </div>
          <div className="service-fee-container">
            <div className="service-fee-text">Service Fee:</div>
            <div className="service-fee">${serviceFee}</div>
          </div>
          <div className="total-container">
            <div className="total-text">Total:</div>
            <div className="total">${total}</div>
          </div>
          <div className="email-container">
            <div className="email-text">Please Enter an Email for Receipt:</div>
            <input className="email-input" type="email" onChange={this.handleEmail("email")} value={this.state.email} />
          </div>
          <div className="checkout-button-container">
            <StripeCheckout
            token={this.onToken}
            stripeKey="pk_test_5PyDLCL5P1YphotVNprAxyBR"
            amount={amount}
            name={"Angaea"}
            email={email}
            description={this.showDescription(activity)}
            />
          </div>
        </div>
      </div>
    )
  }
}

NewActivityTicket.propTypes = {
  getActivity: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  let values = {
    errors: state.errors,
    currentUser: state.auth.currentUser || {},
    activity: state.activity.activity
  }
  return values
}

export default connect(mapStateToProps, { getActivity })(NewActivityTicket)
