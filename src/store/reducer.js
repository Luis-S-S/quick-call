/* eslint-disable default-param-last */
const initiaState = {
  user: 'gonzalesJuan@hotmail.com',
  vista: 'Contratos',
  id: '',
};

function reducer(state = initiaState, action) {
  switch (action.type) {
    case 'trabajo':
      return {
        ...state,
        vista: action.payload,
      };
    case 'detalle':
      return {
        ...state,
        vista: action.payload[0],
        id: action.payload[1],
      };
    case 'MULTIPLICAR':
      return {
        ...state,
        count: state.count * 2,
      };
    default:
      return state;
  }
}

export default reducer;
