import {
  getClientDashboard,
  removeFavorite,
} from '../services/clients';

export const setView = (view) => ({ type: 'SET_VIEW', payload: view });
export const setUserDashboard = (res) => ({ type: 'SET_USER_DASHBOARD', payload: res });
export const editUserDashboard = (obj) => ({ type: 'EDIT_USER_DASHBOARD', payload: obj });
export const setGlobalError = (err) => ({ type: 'SET_GLOBAL_ERROR', payload: err });

export const fetchClientDashboard = () => async (dispatch) => {
  try {
    const response = await getClientDashboard();
    dispatch(setUserDashboard(await response.json()));
  } catch (error) {
    dispatch(setGlobalError(error));
  }
};

export const fetchRemoveFavorite = (id, body) => async (dispatch) => {
  try {
    // Toca organizar el objeto para poder enviarlo al servidor y que borre efectivamente el array
    const response = await removeFavorite(id, body);
    dispatch(editUserDashboard(await response.json()));
  } catch (error) {
    dispatch(setGlobalError(error));
  }
};
