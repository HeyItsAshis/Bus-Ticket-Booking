import { LOGIN, LOGOUT } from './authActionTypes';

export const login = (userData) => {
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('user', JSON.stringify(userData));

  return {
    type: LOGIN,
    payload: userData
  };
};

export const logout = () => {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('user');

  return {
    type: LOGOUT
  };
};
