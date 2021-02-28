import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {TextInput, Divider} from 'react-native-paper';
import {getPokemonsActions} from '../redux/actions/pokemons/getPokemonsActions';
import {useDispatch, useSelector} from 'react-redux';
import ItemListPokemon from '../components/ItemListPokemon';
import {useNavigation} from '@react-navigation/native';
import ButtonHeader from '../components/ButtonHeader';

export default function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {pokemons} = useSelector((pokemones) => pokemones.pokemons);
  const [searchPokemons, setSearchPokemons] = useState(pokemons);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <ButtonHeader />,
    });
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
        onChangeText={(text) => handleSearchPokemon(text)}
        placeholder="Busca un pokemon..."
        left={<TextInput.Icon name="magnify" />}
      />
      <FlatList
        data={searchPokemons}
        renderItem={(pokemon) => <ItemListPokemon {...pokemon} />}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <Divider />}
      />
    </View>
  );
}
