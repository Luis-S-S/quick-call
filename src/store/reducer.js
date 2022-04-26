/* eslint-disable default-param-last */
const initialState = {
  userDashboard: {},
  view: 'Profile',
  error: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_VIEW':
      return {
        ...state,
        view: action.payload,
      };
    case 'SET_USER_DASHBOARD':
      return {
        ...state,
        userDashboard: action.payload,
      };
    case 'SET_GLOBAL_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'EDIT_USER_DASHBOARD':
      return {
        ...state,
        userDashboard: {
          ...state.userDashboard,
          [action.payload.key]: action.payload.value,
        },
      };
    default:
      return state;
  }
}

export default reducer;
