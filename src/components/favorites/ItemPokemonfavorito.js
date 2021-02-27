import React from 'react';
import {View, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import {Title, Paragraph, Chip} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../styles/Colors';

export default function ItemPokemonfavorito(props) {
  const {item} = props;
  const navigation = useNavigation();

  const seeDataPokemon = () => {
    navigation.navigate('pokemon-stack', {item});
  };

  return (
    <TouchableWithoutFeedback onPress={() => seeDataPokemon()}>
      <View style={styles.viewContainer}>
        <Image
          resizeMode="contain"
          style={styles.img}
          source={{uri: item?.sprites?.front_default}}
        />
        <View>
          <Title>{item.name}</Title>
          <View style={styles.types}>
            {item?.type.map((tipo) => (
              <Chip
                style={[styles.chip, {backgroundColor: item?.color?.name}]}
                key={tipo?.type?.name}>
                <Paragraph style={styles.titleTypes}>
                  {tipo?.type?.name}
                </Paragraph>
              </Chip>
            ))}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
  },
  img: {
    width: 100,
    height: 100,
  },
  types: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chip: {
    marginRight: 16,
    marginTop: 8,
  },
  titleTypes: {
    color: colors.white,
  },
});
