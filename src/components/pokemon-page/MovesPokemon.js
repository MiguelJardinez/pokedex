import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Title, DataTable} from 'react-native-paper';

export default function MovesPokemon() {
  const {seleccionado} = useSelector((state) => state.pokemons);
  if (seleccionado === null) {
    return null;
  }
  return (
    <View style={styles.marginBottom}>
      <Title>List moves</Title>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name:</DataTable.Title>
          <DataTable.Title numeric>Level:</DataTable.Title>
          <DataTable.Title numeric>Learning:</DataTable.Title>
        </DataTable.Header>
        {seleccionado?.moves.map((move) => {
          if (move?.version_group_details[0]?.level_learned_at) {
            return (
              <DataTable.Row key={move?.move?.name}>
                <DataTable.Cell>{move?.move?.name}</DataTable.Cell>
                <DataTable.Cell numeric>
                  {move?.version_group_details[0]?.level_learned_at}
                </DataTable.Cell>
                <DataTable.Cell numeric>
                  {move?.version_group_details[0]?.move_learn_method?.name}
                </DataTable.Cell>
              </DataTable.Row>
            );
          }
        })}
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: 16,
  },
});
