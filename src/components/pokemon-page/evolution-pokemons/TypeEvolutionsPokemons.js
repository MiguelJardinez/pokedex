import React from 'react';
import {DataTable} from 'react-native-paper';

export default function TypeEvolutionsPokemons(props) {
  const {
    evolution,
    haveNextEvolution,
    objeto,
    amistad,
    nivel,
    preAmistad,
    dia,
    intercambio,
    nextEvolutionTrade,
    nextEvolutionObject,
  } = props;

  return (
    <>
      {nivel && (
        <DataTable.Row>
          <DataTable.Cell>{evolution?.species?.name}</DataTable.Cell>
          {!preAmistad && !dia && !objeto && !intercambio && (
            <DataTable.Cell numeric>
              {evolution?.evolution_details[0]?.min_level} Level
            </DataTable.Cell>
          )}
          {objeto && (
            <DataTable.Cell numeric>
              {evolution?.evolution_details[0]?.item?.name}
            </DataTable.Cell>
          )}
          {preAmistad && (
            <DataTable.Cell numeric>Friend ship + Level</DataTable.Cell>
          )}
          {dia && <DataTable.Cell numeric>Day + Level</DataTable.Cell>}
          {intercambio && <DataTable.Cell numeric>Trade</DataTable.Cell>}
        </DataTable.Row>
      )}

      {haveNextEvolution && (
        <DataTable.Row>
          <DataTable.Cell>
            {evolution.evolves_to[0]?.species.name}
          </DataTable.Cell>
          {!nextEvolutionTrade && !amistad && !nextEvolutionObject && (
            <DataTable.Cell numeric>
              {evolution.evolves_to[0]?.evolution_details[0].min_level} Level
            </DataTable.Cell>
          )}
          {nextEvolutionObject && (
            <DataTable.Cell numeric>
              {evolution.evolves_to[0].evolution_details[0].item.name}
            </DataTable.Cell>
          )}
          {amistad && (
            <DataTable.Cell numeric>Friend ship + Level</DataTable.Cell>
          )}
          {nextEvolutionTrade && <DataTable.Cell numeric>Trade</DataTable.Cell>}
        </DataTable.Row>
      )}
    </>
  );
}
