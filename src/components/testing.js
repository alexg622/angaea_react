import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/session/auth';

class Testing extends Component {
  componentDidMount() {
    let user = {email: "alex.gm62288@gmail.com", password: "psword"}
    this.props.loginUser(user)
  }
  render() {
    return(
      <div>Testing works</div>
    )
  }
}

Testing.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Testing);
