import {
  FAVORITOS_STORAGE,
  FAVORITOS_STORAGE_EXITO,
  FAVORITOS_STORAGE_ERROR,
} from '../../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getfavoritesAction = () => {
  return async (dispatch) => {
    dispatch(getFavorite(true));
    try {
      const favoritesData = await AsyncStorage.getItem('favorites');
      const pokemonStorage = JSON.parse(favoritesData);
      dispatch(getfavoriteSuccess(pokemonStorage));
    } catch (error) {
      console.log(error);
      dispatch(getFavoritesFail(true));
    }
  };
};

const getFavorite = (estado) => ({
  type: FAVORITOS_STORAGE,
  payload: estado,
});

const getfavoriteSuccess = (data) => ({
  type: FAVORITOS_STORAGE_EXITO,
  payload: data,
});

const getFavoritesFail = (estado) => ({
  type: FAVORITOS_STORAGE_ERROR,
  payload: estado,
});
