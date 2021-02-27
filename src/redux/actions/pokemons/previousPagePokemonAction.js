import {
  ANTERIOR_PAGINA,
  ANTERIOR_PAGINA_EXITO,
  ANTERIOR_PAGINA_ERROR,
} from '../../types';
import axios from 'axios';

export const previousPagePokemonAction = () => {
  return async (dispatch, getState) => {
    dispatch(previousPage(true));
    try {
      const previousPokemon = await axios.get(getState().pokemons.pokemons.previous);
      dispatch(previousPageSuccess(previousPokemon.data));
    } catch (error) {
      console.log(error);
      dispatch(previousPageFail(true));
    }
  };
};

const previousPage = (estado) => ({
  type: ANTERIOR_PAGINA,
  payload: estado,
});

const previousPageSuccess = (data) => ({
  type: ANTERIOR_PAGINA_EXITO,
  payload: data,
});

const previousPageFail = (estado) => ({
  type: ANTERIOR_PAGINA_ERROR,
  payload: estado,
});