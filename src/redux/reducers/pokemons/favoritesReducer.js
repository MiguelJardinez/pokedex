import {ATRAPAR_POKEMON, LIBERAR_POKEMON} from '../../types';

const initialState = {
  atrapados: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ATRAPAR_POKEMON:
      return {
        ...state,
        atrapados: [...state.atrapados, {...action.payload}],
      };

    case LIBERAR_POKEMON:
      return {
        ...state,
        atrapados: action.payload,
      };

    default:
      return state;
  }
};
