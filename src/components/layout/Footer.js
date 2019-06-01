import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from "../../actions/session/auth"
import '../../styles/layout/header.scss'

class Header extends Component {

  loginLink() {
    if(!this.props.auth.isAuthenticated) {
      return (
        <Link className="header-contact header-right" to="/login">Artist Portfolio</Link>
      )
    }
  }

  logoutLink() {
    if(this.props.auth.isAuthenticated) {
      return (
        <div className="header-account header-right" onClick={() => this.props.logoutUser(this.props.currentUser.id)}>Logout</div>
      )
    }
  }

  showAccount() {
    if(this.props.auth.isAuthenticated) {
      return [
        <Link key={"showAuthOne"} className="header-account header-right" to={`/users/${this.props.currentUser.id}`}>Account</Link>,
        <Link key={"showAuthTwo"} className="header-account header-right" to={`/stripe/${this.props.currentUser.id}/stripe_acct`}>Payments</Link>
      ]
    }
  }


  render() {
    return(
      <div className="header-container">
        <div className="left-header">
          <img className="angaea-footer-image" alt="" width="25px" height="25px" src="https://github.com/alexg622/angaea_heroku/blob/master/app/assets/images/the_angaea_final_symbol.png?raw=true"/>
          <Link className="header-title" to="/">Angaea</Link>
        </div>
        <div className="right-footer">
          <Link className="header-services header-right" to="/experiences">Experiences</Link>
          <Link className="header-about header-right" to="/about">About</Link>
          <Link className="header-contact header-right" to="/contact">Contact</Link>
          {this.loginLink()}
          {this.logoutLink()}
          {this.showAccount()}
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors,
  currentUser: state.auth.currentUser || {},
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(Header)
