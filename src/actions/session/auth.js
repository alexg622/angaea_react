import axios from "axios";
import {SET_CURRENT_USER, GET_ERRORS, CLEAR_ERRORS, CLEAR_CURRENT_USER} from "../types"

export const loginUser = userData => dispatch => {
  axios.defaults.xsrfCookieName = "CSRF-TOKEN";
  axios.defaults.xsrfHeaderName = "X-CSRF-Token";
  axios.defaults.withCredentials = true;
  return axios
    .post('http://localhost:3001/api/session', userData)
    .then(res => {
      localStorage.setItem("isAuthenticated", "true")
      localStorage.setItem("currentUser", JSON.stringify(res.data.currentUser))
      return dispatch({
        type: SET_CURRENT_USER,
        payload: res.data
      });
    })
    .catch(err => {
      return dispatch({
        type: GET_ERRORS,
        payload: err
      })
    }
    );
};

export const logoutUser = userId => dispatch => {
  axios.defaults.xsrfCookieName = "CSRF-TOKEN";
  axios.defaults.xsrfHeaderName = "X-CSRF-Token";
  axios.defaults.withCredentials = true;
  localStorage.setItem("isAuthenticated", "false")
  localStorage.setItem("currentUser", "")
  return axios.delete("http://localhost:3001/api/session", userId)
    .then(res => {
      return dispatch({
        type: CLEAR_CURRENT_USER
      })
    })
    .catch(err => {
      return dispatch({
        type: GET_ERRORS,
        payload: err
      })
    })
}

export const clearErrors = () => dispatch => {
  return dispatch({
    type: CLEAR_ERRORS
  })
}