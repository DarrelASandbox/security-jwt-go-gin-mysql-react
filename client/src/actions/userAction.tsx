import { USER_LOGIN_SUCCESS } from '../constants/userConstants';

export const login = (email: string, password: string) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_SUCCESS });
  } catch (e) {}
};
