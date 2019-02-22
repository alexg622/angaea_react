import { SET_CURRENT_USER, CLEAR_CURRENT_USER} from '../actions/types';

const initialState = {
  currentUser: {},
  isAuthenticated: false
}

export default function(state = initialState, action) {
  switch(action.type){
      case SET_CURRENT_USER:
        return {
          ...state,
          currentUser: action.payload.currentUser,
          isAuthenticated: true
        }
      case CLEAR_CURRENT_USER:
        return {
          ...state,
          currentUser: {},
          isAuthenticated: false
        }
    default:
      return state;
  }
}
