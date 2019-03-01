import {GET_ACTIVITY} from '../actions/types'

const initialState = {
  activities: [],
  activity: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ACTIVITY:
      console.log("in reducer activity");
      return {
        ...state,
        activity: action.payload
      }
    default:
      return state
  }
}
