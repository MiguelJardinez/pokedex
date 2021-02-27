import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {Divider} from 'react-native-paper';
import ItemPokemonfavorito from '../components/favorites/ItemPokemonfavorito';
import BlankStateFavorites from '../components/favorites/BlankStateFavorites';

export default function PokeFavorites() {
  const {atrapados} = useSelector((state) => state.favorites);
  return (
    <View>
      <FlatList
        data={atrapados}
        keyExtractor={(item) => item.name}
        renderItem={(item) => <ItemPokemonfavorito {...item} />}
        ListEmptyComponent={() => <BlankStateFavorites />}
        ItemSeparatorComponent={() => <Divider />}
      />
    </View>
  );
}
