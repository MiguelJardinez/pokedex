import {
  OBTENER_POKEMONES,
  OBTENER_POKEMONES_EXITO,
  OBTENER_POKEMONES_ERROR,
} from '../../types';
import {POKEAPI} from '../../../API/configApi';
import {ENDPOINTS} from '../../../API/endpoints';

export const getPokemonsActions = () => {
  return async (dispatch) => {
    dispatch(getPokemon(true));
    try {
      const dataPokemon = await POKEAPI.get(ENDPOINTS.POKEMONES);
      dispatch(getPokemonSuccess(dataPokemon.data));
    } catch (error) {
      console.log(error);
      dispatch(getPokemonFail(true));
    }
  };
};

const getPokemon = (estado) => ({
  type: OBTENER_POKEMONES,
  payload: estado,
});

const getPokemonSuccess = (pokemones) => ({
  type: OBTENER_POKEMONES_EXITO,
  payload: pokemones,
});

const getPokemonFail = (estado) => ({
  type: OBTENER_POKEMONES_ERROR,
  payload: estado,
});
