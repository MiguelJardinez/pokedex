import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {colors} from '../../styles/Colors';
import {ATRAPAR_POKEMON} from '../../redux/types/';

export default function ActionsPokemon() {
  const [isGotcha, setisGotcha] = useState(false);
  const {seleccionado} = useSelector((pokemon) => pokemon.pokemons);
  const {atrapados} = useSelector((favoritos) => favoritos.favorites);
  const dispatch = useDispatch();

  const handleGotchaPokemon = () => {
    dispatch({
      type: ATRAPAR_POKEMON,
      payload: seleccionado,
    });
  };

  useEffect(() => {
    if (atrapados.length > 0) {
      atrapados.find((pokemon) => {
        if (pokemon?.name === seleccionado?.name) {
          console.log('Son iguales', pokemon?.name === seleccionado?.name);
          setisGotcha(true);
          return;
        }
      });
    }
  }, [atrapados, seleccionado]);

  return (
    <View>
      {!isGotcha && (
        <Button
          onPress={handleGotchaPokemon}
          mode="contained"
          style={styles.btnAction}>{`Atrapar a ${seleccionado?.name}`}</Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  btnAction: {
    backgroundColor: colors.red_pokemon,
    marginVertical: 16,
  },
});
