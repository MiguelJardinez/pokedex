import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getOnePokemonAction} from '../redux/actions/pokemons/getOnePokemonAction';
import LoaderPokemon from '../components/LoaderPokemon';
import ImageDescriptionPokemon from '../components/pokemon-page/ImageDescriptionPokemon';
import StatsPokemon from '../components/pokemon-page/StatsPokemon';
import ChainPokemon from '../components/pokemon-page/ChainPokemon';

export default function Pokemon() {
  const pokemon = useRoute().params.item;
  const navigation = useNavigation();
  const [visible, setVisible] = useState(true);
  const {seleccionado, error} = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const nombre = pokemon.name;
    const nameCapitalized = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    navigation.setOptions({
      title: nameCapitalized,
    });
    dispatch(getOnePokemonAction(pokemon.url));
    if (error && seleccionado?.name) {
      console.log(seleccionado?.name);
      navigation.navigate('error-stack');
    }
  }, [pokemon]);

  useEffect(() => {
    if (seleccionado !== null) {
      setTimeout(() => {
        setVisible(false);
      }, 500);
    }
  }, [seleccionado]);

  return (
    <>
      <LoaderPokemon visible={visible} />
      <ScrollView style={styles.container}>
        <ImageDescriptionPokemon />
        <StatsPokemon />
        <ChainPokemon />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
});
