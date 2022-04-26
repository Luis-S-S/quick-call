/* eslint-disable default-param-last */
const initialState = {
  user: {},
  view: 'Profile',
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
    default:
      return state;
  }
}

export default reducer;
