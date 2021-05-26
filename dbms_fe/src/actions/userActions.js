import axios from 'axios'
import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNOUT,
  } from '../constants/userConstants.js'
  
export const signin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNIN_REQUEST })
    const { data } = await axios.post('http://localhost:5000/api/users/', { email, password })
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data })
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({ 
      type: USER_SIGNIN_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    })
  }
}

export const signout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_SIGNOUT });
  document.location.href = '/';
};