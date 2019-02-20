import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../styles/session/login.scss'
import {loginUser} from '../../actions/session/auth'
import  { Redirect } from 'react-router-dom'

class Login extends Component{
  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser(user).then(res => {
      console.log(res);
      if(res.type === "GET_ERRORS") {
        return
      } else {
        console.log("hers");
        return this.props.history.push("/users" + Object.keys(this.props.auth.user)[0])
      }
    })
  }

  render() {
    window.props = this.props
    return (
      <div className="login-container-better">
          <h1>Log Into My Portfolio</h1>
          <form className="login-form" onSubmit={this.onSubmit}>
            <input className="login-inputs" type="email" name="email" onChange={this.onChange} placeholder="EMAIL" value={this.state.email}/>
            <input className="login-inputs" type="password" name="password" onChange={this.onChange} placeholder="PASSWORD" value={this.state.password}/>

            <div width="100px">
              <input className="best-btn" type="submit" value="Log in"/>
            </div>
            <div className="login-signup-container">
              <div className="login-signup-text">New to The Site?</div>
              <a className="best-btn no-underline" href=' <%=new_user_path%> '>Create My Portfolio</a>
              <div className="login-signup-center"></div>
            </div>
            <Link className="reset-password" to="/users/resetPasswordLink">Reset Password</Link>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
})

export default connect(mapStateToProps, { loginUser })(Login)
