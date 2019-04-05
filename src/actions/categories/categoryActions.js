import axios from "axios";
import { GET_CATEGORIES, GET_ERRORS, GET_CATEGORY } from "../types"

export const getCategories = () => dispatch => {
  axios.defaults.xsrfCookieName = "CSRF-TOKEN";
  axios.defaults.xsrfHeaderName = "X-CSRF-Token";
  axios.defaults.withCredentials = true;
  return axios.get("http://localhost:3001/api/categories")
  .then(res => {
    return dispatch({
      type: GET_CATEGORIES,
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

export const getCategory = (id) => dispatch => {
  axios.defaults.xsrfCookieName = "CSRF-TOKEN";
  axios.defaults.xsrfHeaderName = "X-CSRF-Token";
  axios.defaults.withCredentials = true;
  return axios.get("http://localhost:3001/api/categories/" + id)
  .then(res => {
    return dispatch({
      type: GET_CATEGORY,
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
