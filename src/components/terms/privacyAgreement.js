import React, { Component } from 'react'
import '../../styles/terms/termsAndConditions.scss'

const PrivacyAgreement = () => {
  console.log("here");
  return (
    <div class="show-terms-and-conditions-container">
        <iframe class="terms-and-conditions" width="816px" height="816px" src="https://docs.google.com/document/d/e/2PACX-1vRKpa1LjqK9Q0DNQuNeLOE_FY466jLuokBQzPozxLOJhpief--0mgxi1pmwN7oNFetgnNcZ10hknWQg/pub?embedded=true"></iframe>
    </div>
  )
}

export default PrivacyAgreement
