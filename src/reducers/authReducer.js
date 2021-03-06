import {FETCH_USER, LOGIN_USER} from '../actions/actionTypes';

export default function(state = null, action) {
  // console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case LOGIN_USER:
      return action.payload
    default:
      return state;
  }
}
