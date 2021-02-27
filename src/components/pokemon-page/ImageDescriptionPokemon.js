import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Title, Paragraph, Headline} from 'react-native-paper';
import {colors} from '../../styles/Colors';
import {useSelector} from 'react-redux';
import ChipTypePokemon from './ChipTypePokemon';

export default function ImageDescriptionPokemon() {
  const {seleccionado} = useSelector((state) => state.pokemons);
  const verdeHoja = seleccionado?.flavor_text_entries.filter(
    (description) => description.version.name === 'leafgreen',
  );
  return (
    <>
      {seleccionado !== null && (
        <View>
          <View style={styles.viewContainer}>
            <Image
              resizeMode="contain"
              style={styles.img}
              source={{uri: seleccionado?.sprites?.front_default}}
            />
            <Image
              resizeMode="contain"
              style={styles.img}
              source={{uri: seleccionado?.sprites?.back_default}}
            />
          </View>
          <ChipTypePokemon />
          <View style={styles.viewDetails}>
            <Title>Name:</Title>
            <Headline style={styles.title}>{seleccionado?.name}</Headline>
          </View>
          <View style={styles.viewDetails}>
            <Title>Description:</Title>
            <Paragraph style={styles.details}>
              {verdeHoja[0].flavor_text}
            </Paragraph>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  img: {
    width: '30%',
    height: 180,
  },
  title: {
    color: colors.red_pokemon,
    fontSize: 32,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  details: {
    fontSize: 16,
    paddingRight: 8,
  },
  viewDetails: {
    marginBottom: 16,
  },
});
