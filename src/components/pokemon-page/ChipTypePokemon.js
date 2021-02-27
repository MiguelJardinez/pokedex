import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {Chip, Text} from 'react-native-paper';
import {colors} from '../../styles/Colors';

export default function ChipTypePokemon() {
  const {seleccionado} = useSelector((state) => state.pokemons);
  return (
    <View style={styles.viewType}>
      {seleccionado?.types.map((type) => (
        <Chip style={styles.chip} key={type?.type.name}>
          <Text style={styles.chipText}>{type?.type.name}</Text>
        </Chip>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  viewType: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  chip: {
    marginHorizontal: 14,
    backgroundColor: colors.red_pokemon,
    color: colors.white,
  },
  chipText: {
    color: colors.white,
    fontSize: 16,
  },
});
