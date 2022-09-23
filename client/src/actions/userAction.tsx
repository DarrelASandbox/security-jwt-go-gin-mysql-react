import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from '../constants/userConstants';
import { RootState } from '../store';

export const login =
  (
    email: String,
    password: String
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });

      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      const userData = { firstName: data.first_name, lastName: data.last_name };

      dispatch({ type: USER_LOGIN_SUCCESS, payload: userData });
      localStorage.setItem('userInfo', JSON.stringify(userData));
    } catch (e) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          e.response && e.response.data.message ? e.response.data.message : e.message,
      });
    }
  };

export const logout =
  (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
    dispatch({ type: USER_LOGOUT });
    localStorage.removeItem('userInfo');
    await fetch('/api/logout', {
      headers: { 'Content-Type': 'application/json', credentials: 'include' },
    });
  };
