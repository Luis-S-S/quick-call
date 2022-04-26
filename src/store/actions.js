import {
  getClientDashboard,
} from '../services/clients';

export const setView = (view) => ({ type: 'SET_VIEW', payload: view });
export const setUserDashboard = (val) => ({ type: 'SET_USER_DASHBOARD', payload: val });
export const setGlobalError = (err) => ({ type: 'SET_GLOBAL_ERROR', payload: err });

export const fetchClientDashboard = (token) => async (dispatch) => {
  try {
    const response = await getClientDashboard(token);
    dispatch(setUserDashboard(response));
  } catch (error) {
    dispatch(setGlobalError(error));
  }
};
