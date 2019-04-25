import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux"
import PropTypes from "prop-types"
import "../../styles/stripe/stripeAcct.scss"
import { deleteStripe } from "../../actions/session/auth"

class StripeAcct extends Component {
  constructor(props) {
    super(props)
  }

  userHasStripe = (currentUser) => {
    if(currentUser) {
      let id = currentUser.id
      if (currentUser.stripe_complete) {
        return [
          <div className="acct-number-container">
            <div>Bank Account Number:</div>
            <div className="strip-acct-account-number">{currentUser.stripe_account_number}</div>
          </div>,
          <div className="routing-number-container">
            <div>Routing Number:</div>
            <div className="stripe-acct-routing-number">{currentUser.stripe_routing_number}</div>
          </div>,
          <div className="new-stripe-account-how-to-container">
            To change your payment information please remove this payment information and re-submit the new one.
          </div>,
          <form onSubmit={this.handleSubmit} className="delete-stripe-acct-btn">
            <input className="best-btn" type="submit" value="Delete Account"/>
          </form>
        ]
      } else {
        return [
          <div className="get-started-stripe-text">
            Please submit your payment information before creating a service so that we can
            get you paid once the service has been completed!
          </div>,
          <Link className="best-btn get-started-stripe" to={`/stripe/${id}/new`}>Get Started</Link>
        ]
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    let { currentUser } = this.props
    let id = currentUser.id
    this.props.deleteStripe(id)
      .then(res => console.log("Deleted"))
      .catch(err => console.log("err"))
  }

  render() {
    let {currentUser} = this.props
    return (
      <div className="stripe-acct-container">
        <div className="stripe-acct-text">Account Information</div>
        <div className="stripe-acct-inner-container">
          {this.userHasStripe(currentUser)}
        </div>
      </div>

    )
  }
}

StripeAcct.propTypes = {
  currentUser: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  let values = {
    currentUser: state.auth.currentUser || {}
  }
  return values
}

export default connect(mapStateToProps, { deleteStripe })(StripeAcct)
