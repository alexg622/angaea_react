import React, { Component } from 'react'
 import Loader from 'react-loader-spinner'
import axios from 'axios'
import '../../styles/layout/newContact.scss'

class NewContact extends Component {
  state = {
    text: "",
    email: "",
    loading: false,
  }
  
  handleChange = e => {
    e.preventDefault()
    let loader = document.querySelector(".load-it")
    this.setState({email: "", text: ""})
    loader.style.display = "flex"
    let formData = new FormData()
    formData.append("email", this.state.email)
    formData.append("text", this.state.text)
    axios.defaults.xsrfCookieName = "CSRF-TOKEN";
    axios.defaults.xsrfHeaderName = "X-CSRF-Token";
    axios.defaults.withCredentials = true;
    axios.post('https://www.angaea.com/api/contact_ron', formData)
    .then(res => {
      loader.style.display = "none"
      let goodMessage = document.querySelector(".cu-ms-sent")
      goodMessage.style.display = "flex"
      console.log(res.data.success);

      setTimeout(() => {
        goodMessage.style.display = "none"
      }, 6000)
    })
    .catch(err => {
      loader.style.display = "none"
      console.log(err);
    })
  }

  render() {
    return(
      <div className="cu-container">
        <div className="cu-upper-text">Contact us!</div>
        <form onSubmit={this.handleChange} className="cu-form">
          <div className="load-it">
            <Loader
             type="CradleLoader"
             color="#00BFFF"
             height="50px"
             width="100"
            />
          </div>
          <div className="cu-ms-sent">Message Sent!</div>
          <textarea className="cu-text-input" type="text" onChange={(e) => this.setState({text: e.target.value})} value={this.state.text} />
          <div className="cuf-lower-container">
            <input className="cu-email" type="email" placeholder="email" onChange={(e) => this.setState({email: e.target.value})} value={this.state.email} />
            <input className="cu-submit" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default NewContact
