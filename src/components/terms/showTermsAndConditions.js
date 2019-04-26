import React, { Component } from 'react'
import '../../styles/terms/termsAndConditions.scss'

const ShowTermsAndConditions = () => {
  console.log("here");
  return (
    <div className="show-terms-and-conditions-container">
      <iframe className="terms-and-conditions" width="816px" height="816px" src="https://docs.google.com/document/d/e/2PACX-1vTaszJuYkCtyoF1BC5eeQEgQ88_ECAXmZAbOatFpN8zWLUbSctCAA7lqx2wH-c5HR2JRu0hO7CfARTc/pub?embedded=true"></iframe>
    </div>

  )
}

export default ShowTermsAndConditions
