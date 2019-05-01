import axios from "axios";
import { GET_ACTIVITY, GET_ERRORS } from "../types"

export const getActivity = (id) => dispatch => {
  axios.defaults.xsrfCookieName = "CSRF-TOKEN";
  axios.defaults.xsrfHeaderName = "X-CSRF-Token";
  axios.defaults.withCredentials = true;
  return axios.get(`https://www.angaea.com/api/activities/${id}`)
  .then(res => {
    return dispatch({
      type: GET_ACTIVITY,
      payload: res.data
    })
  })
  .catch(err => {
    return dispatch ({
      type: GET_ERRORS,
      payload: err
    })
  })
}

export const createActivity = (activity, config) => dispatch => {
  axios.defaults.xsrfCookieName = "CSRF-TOKEN";
  axios.defaults.xsrfHeaderName = "X-CSRF-Token";
  axios.defaults.withCredentials = true;
  return axios.post(`https://www.angaea.com/api/activities`, activity, config)
  .then(res => {
    console.log(res);
    return dispatch({
      type: GET_ACTIVITY,
      payload: res.data
    })
  })
  .catch(err => {
    return dispatch({
      type: GET_ERRORS,
      payload: err
    })
  })
}

export const editActivity = (activity, config, id) => dispatch => {
  return axios.put(`https://www.angaea.com/api/activities/${id}`, activity, config)
  .catch(err => {
    return dispatch({
      type: GET_ERRORS,
      payload: err
    })
  })
}
