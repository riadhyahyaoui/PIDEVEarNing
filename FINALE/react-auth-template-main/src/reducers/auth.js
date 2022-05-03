
import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('profile')),
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export default (state = {authdata: null}, action) => {
    switch (action.type) {
      case 'auth':
      localStorage.setItem('profile', JSON.stringify({ ...action?.data.user }))
      const token = action.data.user.token;
      localStorage.setItem('token', token)
      return {...state, authdata:action?.data};
      case 'logout':
        localStorage.removeItem('profile');
        localStorage.removeItem('token');
        return { ...state, authdata: null};
        case'forget':
        return {...state, authdata:action?.data};
        case'reset':
        return {...state, authdata:action?.data};
      default:
        return state;
    }
  }