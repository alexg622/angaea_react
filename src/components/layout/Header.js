import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/layout/header.scss'

export default () => {
  return(
    <div className="header-container">
      <div className="left-header">
        <img className="angaea-footer-image" width="25px" height="25px" src="https://github.com/alexg622/angaea_heroku/blob/master/app/assets/images/the_angaea_final_symbol.png?raw=true"/>
        <div className="header-title">Angaea</div>
      </div>
      <div className="right-header">
        <Link className="header-services header-right" to="/">Services</Link>
        <Link className="header-dashboard header-right" to="/dashboard">Dashbaord</Link>
        <Link className="header-about header-right" to="/about">About</Link>
        <Link className="header-contact header-right" to="/contact">Contact</Link>
        <Link className="header-contact header-right" to="/login">My Portfolio</Link>
        <Link className="header-account header-right" to="/account">Account</Link>
      </div>
    </div>
  )
}
