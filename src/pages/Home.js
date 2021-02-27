import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {getPokemonsActions} from '../redux/actions/pokemons/getPokemonsActions';
import {nextPagePokemonAction} from '../redux/actions/pokemons/nextPagePokemonAction';
import {previousPagePokemonAction} from '../redux/actions/pokemons/previousPagePokemonAction';
import {useDispatch, useSelector} from 'react-redux';
import ItemListPokemon from '../components/ItemListPokemon';

export default function Home() {
  const dispatch = useDispatch();
  const {pokemons} = useSelector((pokemones) => pokemones.pokemons);
  const [searchPokemons, setSearchPokemons] = useState(pokemons);

  useEffect(() => {
    dispatch(getPokemonsActions());
  }, []);

  useEffect(() => {
    setSearchPokemons(pokemons?.results);
  }, [pokemons?.results]);

  const handleSearchPokemon = (namePokemon) => {
    const pokemonFilter = pokemons?.results.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(namePokemon.toLowerCase()),
    );
    setSearchPokemons(pokemonFilter);
  };

  return (
    <View>
      <TextInput
        style={styles.search}
        onChangeText={(text) => handleSearchPokemon(text)}
        placeholder="Busca un pokemon..."
      />
      <FlatList
        data={searchPokemons}
        renderItem={(pokemon) => <ItemListPokemon {...pokemon} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    marginTop: 8,
    marginBottom: 16,
  },
});
