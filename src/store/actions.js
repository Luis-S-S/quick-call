import { isValidToken } from '../services/auth';

export const setView = (view) => ({ type: 'SET_VIEW', payload: view });
export const setUser = (res) => ({ type: 'SET_USER', payload: res });
export const setGlobalError = (err) => ({ type: 'SET_GLOBAL_ERROR', payload: err });
export const emptyUser = () => ({ type: 'EMPTY_USER' });

export const fetchUserProfile = () => async (dispatch) => {
  try {
    const response = await isValidToken();
    const data = await response.json();
    if (data.error) { throw new Error(data.message); }
    dispatch(setUser(data));
  } catch (error) {
    window.localStorage.removeItem('user');
    dispatch(setGlobalError(error.message));
  }
};
