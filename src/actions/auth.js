import axios from "axios";
import {SET_CURRENT_USER, GET_ERRORS} from "./types"

export const loginUser = userData => dispatch => {
  axios.defaults.xsrfCookieName = "CSRF-TOKEN";
  axios.defaults.xsrfHeaderName = "X-CSRF-Token";
  axios.defaults.withCredentials = true;
  axios
    .post('http://localhost:3001/api/session', userData)
    .then(res => {
      dispatch({
        type: SET_CURRENT_USER,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
