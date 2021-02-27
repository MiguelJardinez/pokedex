export const modeEvolution = (evolution) => {
  let nivel = true;
  let objeto = false;
  let amistad = false;
  let intercambio = false;
  let preAmistad = false;
  let haveNextEvolution = false;
  let dia = false;

  let nextEvolutionObject = false;
  let nextEvolutionTrade = false;

  const needSun = evolution.evolution_details[0].time_of_day;
  const nextEvolutionState = evolution.evolves_to.length > 0;
  const needPreAmistad = evolution.evolution_details[0].min_happiness;
  const typeEvolution = evolution.evolution_details[0].trigger.name;

  if (evolution.evolves_to.length > 0) {
    const needHappines =
      evolution.evolves_to[0].evolution_details[0].min_happiness;
    const needChange =
      evolution.evolves_to[0].evolution_details[0].trigger.name;
    const nextEvolutionItem =
      evolution.evolves_to[0].evolution_details[0].trigger.name;

    if (nextEvolutionItem === 'use-item') {
      nextEvolutionObject = true;
    }

    if (needHappines !== null) {
      amistad = true;
    }
    if (needChange === 'trade') {
      nextEvolutionTrade = true;
    }
  }

  if (nextEvolutionState) {
    haveNextEvolution = true;
  }

  if (needPreAmistad !== null) {
    preAmistad = true;
  }

  if (needSun === 'day') {
    dia = true;
  }

  if (typeEvolution === 'use-item') {
    objeto = true;
  } else if (typeEvolution === 'trade') {
    intercambio = true;
  }

  return {
    amistad,
    nivel,
    objeto,
    haveNextEvolution,
    preAmistad,
    dia,
    intercambio,
    nextEvolutionObject,
    nextEvolutionTrade,
  };
};
