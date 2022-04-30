/* eslint-disable default-param-last */
const initialState = {
  user: {},
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
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'SET_GLOBAL_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'EMPTY_USER':
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
}

export default reducer;
