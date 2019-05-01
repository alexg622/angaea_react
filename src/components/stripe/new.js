import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/stripe/stripe.scss"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateCurrentUser } from "../../actions/session/auth"
import axios from "axios"

class NewStripe extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit = (e) => {
    let {currentUser} = this.props
    let id = currentUser.id
    let url = `https://www.angaea.com/api/stripe/${currentUser.id}/create`
    e.preventDefault()
    this.props.updateCurrentUser(url)
    .then(res => this.props.history.push(`/stripe/${id}/terms/new`))
  }

  render() {
    window.currentUser = this.props.currentUser
    return (
      <div className="create-stripe-accnt-form-container">
        <div className="create-stripe-new-text">Before creating a service lets get started with setting up your payment information to get you paid!
          We use Stripe as a third party payment service to keep your information safe!
        </div>
        <form onSubmit={this.handleSubmit} className="create-stripe-account-form">
          <img src="https://github.com/alexg622/angaea_heroku/blob/master/app/assets/images/the_angaea_final_symbol.png?raw=true"/>
          <input id="get-you-paid-submit" type="submit" value="Continue"/>
        </form>
      </div>
    )
  }
}

NewStripe.propTypes = {
  currentUser: PropTypes.object.isRequired,
  updateCurrentUser: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  let values = {
    currentUser: state.auth.currentUser || {}
  }
  return values
}

export default connect(mapStateToProps, { updateCurrentUser })(NewStripe)
