import {
  ATRAPAR_POKEMON,
  LIBERAR_POKEMON,
  FAVORITOS_STORAGE,
  FAVORITOS_STORAGE_EXITO,
  FAVORITOS_STORAGE_ERROR,
} from '../../types';

const initialState = {
  atrapados: [],
  cargando: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FAVORITOS_STORAGE:
      return {
        ...state,
        cargando: action.payload,
        error: false,
      };

    case FAVORITOS_STORAGE_EXITO:
      return {
        ...state,
        cargando: false,
        atrapados: action.payload,
      };

    case FAVORITOS_STORAGE_ERROR:
      return {
        ...state,
        cargando: false,
        error: action.payload,
      };

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
