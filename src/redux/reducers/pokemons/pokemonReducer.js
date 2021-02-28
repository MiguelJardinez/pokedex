import {
  OBTENER_POKEMONES,
  OBTENER_POKEMONES_EXITO,
  OBTENER_POKEMONES_ERROR,
  OBTENER_POKEMON,
  OBTENER_POKEMON_EXITO,
  OBTENER_POKEMON_ERROR,
} from '../../types';

const initialState = {
  pokemons: null,
  seleccionado: null,
  error: null,
  cargando: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OBTENER_POKEMON:
    case OBTENER_POKEMONES:
      return {
        ...state,
        cargando: action.payload,
        seleccionado: null,
      };

    case OBTENER_POKEMONES_EXITO:
      return {
        ...state,
        cargando: false,
        pokemons: action.payload,
      };

    case OBTENER_POKEMON_ERROR:
    case OBTENER_POKEMONES_ERROR:
      return {
        ...state,
        cargando: false,
        error: true,
      };

    case OBTENER_POKEMON_EXITO:
      return {
        ...state,
        cargando: false,
        seleccionado: action.payload,
      };

    default:
      return state;
  }
};
