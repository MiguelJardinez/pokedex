import {
  SIGUINTE_PAGINA,
  SIGUINTE_PAGINA_EXITO,
  SIGUINTE_PAGINA_ERROR,
} from '../../types';
import axios from 'axios';

export const nextPagePokemonAction = () => {
  return async (dispatch, getState) => {
    dispatch(nextPagePokemon(true));
    try {
      console.log('Siguiente pagina');
      const nextPage = await axios.get(getState().pokemons.pokemons.next);
      dispatch(nextPagePokemonSuccess(nextPage.data));
    } catch (error) {
      console.log(error);
      dispatch(nextPagePokemonFail(true));
    }
  };
};

const nextPagePokemon = (estado) => ({
  type: SIGUINTE_PAGINA,
  payload: estado,
});

const nextPagePokemonSuccess = (data) => ({
  type: SIGUINTE_PAGINA_EXITO,
  payload: data,
});

const nextPagePokemonFail = (estado) => ({
  type: SIGUINTE_PAGINA_ERROR,
  payload: estado,
});