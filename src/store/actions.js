import { isValidToken } from '../services/auth';

export const setView = (view) => ({ type: 'SET_VIEW', payload: view });
export const setUser = (res) => ({ type: 'SET_USER', payload: res });
export const setGlobalError = (err) => ({ type: 'SET_GLOBAL_ERROR', payload: err });

export const fetchClientProfile = () => async (dispatch) => {
  try {
    const response = await isValidToken();
    const data = await response.json();
    dispatch(setUser(data));
  } catch (error) {
    dispatch(setGlobalError(await error.json()));
  }
};
