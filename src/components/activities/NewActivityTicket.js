import React, {Component} from "react"
import PropTypes from 'prop-types';
import { getActivity } from '../../actions/activities/activityActions'
import { connect } from 'react-redux';
import "../../styles/activities/new_activity_ticket.scss"
import StripeCheckout from 'react-stripe-checkout';

class NewActivityTicket extends Component {
  constructor(props) {
    super(props)
    this.state = {
      serviceFee: 0.10,
      numberOfSpots: 1,
      total: 0.0,
      startingTotal: 0.0
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
      if(activity) this.setState({total, serviceFee, startingTotal})
    })
  }

  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }

  showActivityName = ( activity ) => {
    if(activity) return activity.activity_name
  }

  showActivityCost = ( activity ) => {
    if(activity) return activity.cost
  }

  handleChange = ( e ) => {
    let total = e.target.value * this.state.startingTotal
    let serviceFee = Math.round((total*.1) * 100) / 100
    total += serviceFee
    this.setState({ serviceFee, total })
  }

  render() {
    let {activity} = this.props.activity
    let {serviceFee, total} = this.state
    window.props = this.props
    window.activity = activity
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
            <div className="total-text">Total</div>
            <div className="total">${total}</div>
          </div>
          <div className="checkout-button-container">
            <StripeCheckout
            token={this.onToken}
            stripeKey="pk_test_5PyDLCL5P1YphotVNprAxyBR"
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

export default connect(mapStateToProps, {getActivity})(NewActivityTicket)
