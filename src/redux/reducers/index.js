import {combineReducers} from 'redux';
import pokemonReducer from './pokemons/pokemonReducer';

export default combineReducers({
  pokemons: pokemonReducer,
});
