import {
  OBTENER_POKEMON,
  OBTENER_POKEMON_EXITO,
  OBTENER_POKEMON_ERROR,
} from '../../types';
import axios from 'axios';

export const getOnePokemonAction = (url) => {
  return async (dispatch) => {
    try {
      const pokemonData = await axios.get(url);
      const species = await axios.get(pokemonData.data.species.url);
      const fromPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${pokemonData.data.id}`);
      const evolution = await axios.get(species.data.evolution_chain.url);
      const allINformationPokemon = {
        ...pokemonData.data,
        ...species.data,
        ...evolution.data,
        ...fromPokemon.data,
      };
      dispatch(getOnePokemonSuccess(allINformationPokemon));
    } catch (error) {
      console.log(error);
      dispatch(getOnePokemonFail(true));
    }
  };
};

const getOnePokemonSuccess = (data) => ({
  type: OBTENER_POKEMON_EXITO,
  payload: data,
});

const getOnePokemonFail = (estado) => ({
  type: OBTENER_POKEMON_ERROR,
  payload: estado,
});