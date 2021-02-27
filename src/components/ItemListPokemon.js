import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Subheading} from 'react-native-paper';

export default function ItemListPokemon(props) {
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
    borderWidth: 0.2,
    borderBottomColor: 'gray',
  },
});
