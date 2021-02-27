import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Title, DataTable} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {modeEvolution} from '../../helpers/typeEvolution';
import TypeEvolutionsPokemons from './evolution-pokemons/TypeEvolutionsPokemons';

export default function ChainPokemon() {
  const {seleccionado} = useSelector((state) => state.pokemons);
  if (seleccionado === null) {
    return null;
  }

  return (
    <View style={styles.evolution}>
      <Title>Chain evolution:</Title>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title numeric>Trigger</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell>{seleccionado?.chain?.species?.name}</DataTable.Cell>
          <DataTable.Cell numeric>base</DataTable.Cell>
        </DataTable.Row>
        {seleccionado?.chain.evolves_to.map((evolution) => {
          const {
            nivel,
            haveNextEvolution,
            objeto,
            amistad,
            preAmistad,
            dia,
            intercambio,
            nextEvolutionObject,
            nextEvolutionTrade,
          } = modeEvolution(evolution);
          return (
            <TypeEvolutionsPokemons
              evolution={evolution}
              nivel={nivel}
              haveNextEvolution={haveNextEvolution}
              objeto={objeto}
              amistad={amistad}
              preAmistad={preAmistad}
              dia={dia}
              intercambio={intercambio}
              nextEvolutionObject={nextEvolutionObject}
              nextEvolutionTrade={nextEvolutionTrade}
            />
          );
        })}
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  evolution: {
    marginBottom: 16,
  },
});
