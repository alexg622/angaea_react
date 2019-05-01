import axios from "axios";
import {GET_ERRORS, GET_USER} from "../types"

export const getUser = userId => dispatch => {
  axios.defaults.xsrfCookieName = "CSRF-TOKEN";
  axios.defaults.xsrfHeaderName = "X-CSRF-Token";
  axios.defaults.withCredentials = true;
  return axios.get(`https://www.angaea.com/api/users/${userId}`)
  .then(res => {
    return dispatch({
      type: GET_USER,
      payload: res.data
    })
  }).catch(err => {
    return dispatch({
      type: GET_ERRORS,
      payload: err
    })
  })
}
