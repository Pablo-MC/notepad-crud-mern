import { authActions } from './auth-slice';
import { notificationActions } from '../notification/notification-slice';

import clientAxios from '../../lib/axios';

export const register = (user) => {
  return async function (dispatch) {
    try {
      const res = await clientAxios.post('/api/auth/register', user);
      dispatch(notificationActions.notification({ message: res.data.message }));
    } catch (error) {
      dispatch(notificationActions.notification({ message: error.response.data.message }));
    }
    // Reset message value after 2 seconds.
    setTimeout(() => {
      dispatch(notificationActions.notification({ message: null }))
    }, 2000);
  }
}

export const login = (user) => {
  return async function (dispatch) {
    try {
      const res = await clientAxios.post('/api/auth/login', user);
      dispatch(authActions.login({ user: res.data }));
    } catch (error) {
      dispatch(notificationActions.notification({ message: error.response.data.message }));
      // Reset message value after 2 seconds.
      setTimeout(() => {
        dispatch(notificationActions.notification({ message: null }))
      }, 2000);
    }
  }
}
