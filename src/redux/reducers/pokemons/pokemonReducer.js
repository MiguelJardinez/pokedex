import {
  OBTENER_POKEMONES,
  OBTENER_POKEMONES_EXITO,
  OBTENER_POKEMONES_ERROR,
  OBTENER_POKEMON,
  OBTENER_POKEMON_EXITO,
  OBTENER_POKEMON_ERROR,
  SIGUINTE_PAGINA,
  SIGUINTE_PAGINA_EXITO,
  SIGUINTE_PAGINA_ERROR,
  ANTERIOR_PAGINA,
  ANTERIOR_PAGINA_EXITO,
  ANTERIOR_PAGINA_ERROR,
} from '../../types';

const initialState = {
  pokemons: null,
  seleccionado: null,
  error: null,
  cargando: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ANTERIOR_PAGINA:
    case SIGUINTE_PAGINA:
    case OBTENER_POKEMON:
    case OBTENER_POKEMONES:
      return {
        ...state,
        cargando: action.payload,
        seleccionado: null,
      };

    case ANTERIOR_PAGINA_EXITO:
    case SIGUINTE_PAGINA_EXITO:
    case OBTENER_POKEMONES_EXITO:
      return {
        ...state,
        cargando: false,
        pokemons: action.payload,
      };

    case ANTERIOR_PAGINA_ERROR:
    case SIGUINTE_PAGINA_ERROR:
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
}