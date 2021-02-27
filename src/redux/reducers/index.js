import {combineReducers} from 'redux';
import pokemonReducer from './pokemons/pokemonReducer';
import favoritesReducer from '../reducers/pokemons/favoritesReducer';

export default combineReducers({
  pokemons: pokemonReducer,
  favorites: favoritesReducer,
});
