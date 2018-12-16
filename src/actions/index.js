import axios from "axios";
import { FETCH_USER, LOGIN_USER } from "./actionTypes";

export const loginUser = (email, password) => {
  return function(dispatch){
      fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password }),
    })then(res => dispatch(res))
  }
};


export const fetchUser = () => {
  return function(dispatch) {
    axios
      .get("/api/test")
      .then(res => dispatch({ type: FETCH_USER, payload: res }));
  };
};
