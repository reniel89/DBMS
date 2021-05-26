import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  userSigninReducer,
} from './reducers/userReducers.js';

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    },
};

const reducer = combineReducers({ 
    userSignin: userSigninReducer,
});

const middleware = [thunk];
const store = createStore(
  reducer, 
  initialState, 
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
