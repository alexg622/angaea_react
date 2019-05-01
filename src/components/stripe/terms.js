import React, {Component} from "react"
import '../../styles/stripe/terms.scss'
import axios from "axios"
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { updateCurrentUser } from '../../actions/session/auth'

class Terms extends Component {
  
  handleSubmit = (e) => {
    let { currentUser } = this.props
    let id = currentUser.id
    let url = `https://www.angaea.com/api/stripe/${id}/terms/create`
    e.preventDefault()
    this.props.updateCurrentUser(url)
      .then(res => this.props.history.push(`/stripe/${id}/stripe_acct_details`))
      .catch(err => console.log(err))
  }

  render() {
    window.currentUser = this.props.currentUser
    return(
      <div className="terms-and-conditions-container">
        <div className="position-end">
          <iframe className="stripe-terms-and-conditions" width="816px" height="816px" src="https://docs.google.com/document/d/e/2PACX-1vRsUX9mu43vSrwlgKhDZJEEgaSG3WlXbulASPQEDGJ9gb9xu4CG1lFBxXHyM1aYykVnCi6Ofj3kbAxr/pub?embedded=true"></iframe>
          <form onSubmit={this.handleSubmit} className="stripe-terms">
            <div>Stripe's terms and conditions</div>
            <input className="submit-terms-and-conditions" type="submit" value="Agree"/>
          </form>
        </div>
      </div>
    )
  }
}

Terms.propTypes = {
  currentUser: PropTypes.object.isRequired,
  updateCurrentUser: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  let values = {
    currentUser: state.auth.currentUser || {}
  }
  return values
}

export default connect(mapStateToProps, { updateCurrentUser })(Terms)
