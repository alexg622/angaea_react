import axios from "axios";
import { GET_ACTIVITY, GET_ERRORS } from "../types"

export const getActivity = (id) => dispatch => {
  return axios.get(`http://localhost:3001/api/activities/${id}`)
    .then(res => {
      console.log("In activity action");
      return dispatch({
        type: GET_ACTIVITY,
        payload: res.data
      })
    })
    .catch(err => {
      console.log("in activity error");
      return dispatch ({
        type: GET_ERRORS,
        paylaod: err
      })
    })
}
