import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Subheading} from 'react-native-paper';
import {OBTENER_POKEMON} from '../redux/types';
import {useDispatch} from 'react-redux';

export default function ItemListPokemon(props) {
  const dispatch = useDispatch();
  const {item} = props;
  const navigation = useNavigation();

  const navigatePokemonPage = () => {
    navigation.navigate('pokemon-stack', {item});
  };

  return (
    <TouchableWithoutFeedback onPress={navigatePokemonPage}>
      <View style={styles.container}>
        <Subheading>{item?.name}</Subheading>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
});
