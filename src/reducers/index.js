import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer'
import categoriesReducer from './categoriesReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  category: categoriesReducer
});
