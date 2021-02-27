import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Title} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {colors} from '../../styles/Colors';
import {ATRAPAR_POKEMON, LIBERAR_POKEMON} from '../../redux/types/';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ActionsPokemon() {
  const pokemon = useRoute().params.item;
  const navigation = useNavigation();
  const [isGotcha, setisGotcha] = useState(false);
  const {seleccionado} = useSelector((pokemonState) => pokemonState.pokemons);
  const {atrapados} = useSelector((favoritos) => favoritos.favorites);
  const dispatch = useDispatch();
  const favorite = {
    name: pokemon?.name,
    url: pokemon?.url,
    type: seleccionado?.types,
    sprites: seleccionado?.sprites,
    color: seleccionado?.color,
  };

  const handleGotchaPokemon = async () => {
    try {
      dispatch({
        type: ATRAPAR_POKEMON,
        payload: favorite,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const freePokemon = async () => {
    const freePokemons = atrapados.filter((pokemon) => pokemon?.name !== favorite?.name);
    try {
      await AsyncStorage.setItem('favorites', JSON.stringify(freePokemons));
      setisGotcha(false);
      dispatch({
        type: LIBERAR_POKEMON,
        payload: freePokemons,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addStorageFavorites = async () => {
    const itemStorage = JSON.stringify(atrapados);
    try {
      await AsyncStorage.setItem('favorites', itemStorage);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(atrapados);
    if (atrapados.length > 0) {
      atrapados.find((pokemon) => {
        if (pokemon?.name === seleccionado?.name) {
          setisGotcha(true);
          return;
        }
      });
    }
  }, [atrapados, seleccionado]);

  useEffect(() => {
    addStorageFavorites();
  }, [atrapados]);

  if (seleccionado === null) {
    return null;
  }

  return (
    <View>
      {!isGotcha && (
        <Button
          onPress={handleGotchaPokemon}
          mode="contained"
          style={styles.btnAction}>{`Atrapar a ${seleccionado?.name}`}</Button>
      )}
      {isGotcha && (
        <>
          <Button
            onPress={() => navigation.navigate('favorite-stack')}
            style={styles.btnCongrats}
            mode="outlined">
            <Title style={styles.title}>
              ¡{`${seleccionado?.name} ya esta en tu equipo`}!
            </Title>
          </Button>
          <Button
            onPress={() => freePokemon()}
            style={styles.btnFree}
            mode="contained">
            <Title style={styles.titleFree}>
              {`¿Quieres liberar a ${seleccionado?.name} ?`}
            </Title>
          </Button>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  btnAction: {
    backgroundColor: colors.red_pokemon,
    marginVertical: 16,
  },
  btnCongrats: {
    borderWidth: 1,
    borderColor: colors.red_pokemon,
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    color: colors.red_pokemon,
  },
  btnFree: {
    backgroundColor: colors.red_pokemon,
    marginBottom: 16,
  },
  titleFree: {
    color: 'white',
    fontSize: 16,
  },
});
