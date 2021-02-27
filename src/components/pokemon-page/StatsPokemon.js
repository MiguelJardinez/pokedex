import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DataTable, Title} from 'react-native-paper';
import {useSelector} from 'react-redux';

export default function StatsPokemon() {
  const {seleccionado} = useSelector((state) => state.pokemons);
  return (
    <>
      <View style={styles.viewDetails}>
        <Title>Stats:</Title>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title numeric>Base</DataTable.Title>
          </DataTable.Header>
          {seleccionado?.stats.map((status) => (
            <DataTable.Row key={status.stat.name}>
              <DataTable.Cell>{status.stat.name}</DataTable.Cell>
              <DataTable.Cell numeric>{status.base_stat} Points</DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  viewDetails: {
    marginBottom: 24,
  },
});
