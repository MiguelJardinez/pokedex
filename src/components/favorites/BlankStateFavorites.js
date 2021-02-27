import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import {Title, Paragraph, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../styles/Colors';
const HEIGHT_SCREEN = Dimensions.get('window').height;

export default function BlankStateFavorites() {
  const navigation = useNavigation();
  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewImage}>
        <Image
          style={styles.img}
          resizeMode="contain"
          source={require('../../assets/blank_states/favorites_blank_state.png')}
        />
      </View>
      <View style={styles.viewDetails}>
        <Title style={styles.titleDetails}>No tienes pokemones</Title>
        <Paragraph style={styles.paragraphDetails}>
          No has caputado a ningún pokemon aún, regresa a la lista de pokemones
          y atrapa al tu primer compañero
        </Paragraph>
      </View>
      <View style={styles.viewActions}>
        <Button
          style={styles.btnAction}
          onPress={() => navigation.navigate('home-stack')}
          mode="contained">
          Atrapa tu primer pokemon
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    height: HEIGHT_SCREEN - 90,
    backgroundColor: colors.white,
  },
  viewImage: {
    flex: 0.5,
    justifyContent: 'flex-end',
  },
  viewDetails: {
    flex: 0.3,
    justifyContent: 'center',
  },
  titleDetails: {
    textAlign: 'center',
    fontSize: 28,
    color: colors.red_pokemon,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  paragraphDetails: {
    textAlign: 'center',
    fontSize: 16,
  },
  viewActions: {
    flex: 0.2,
    justifyContent: 'flex-end',
  },
  btnAction: {
    backgroundColor: colors.red_pokemon,
  },
  img: {
    width: '100%',
    height: 280,
  },
});
