import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {getPokemonsActions} from '../redux/actions/pokemons/getPokemonsActions';
import {nextPagePokemonAction} from '../redux/actions/pokemons/nextPagePokemonAction';
import {previousPagePokemonAction} from '../redux/actions/pokemons/previousPagePokemonAction';
import {useDispatch, useSelector} from 'react-redux';
import ItemListPokemon from '../components/ItemListPokemon';

export default function Home() {
  const dispatch = useDispatch();
  const {pokemons} = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemonsActions());
  }, []);

  return (
    <View>
      <FlatList
        data={pokemons?.results}
        renderItem={(pokemon) => <ItemListPokemon {...pokemon} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}
