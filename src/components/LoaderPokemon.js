import React from 'react';
import {StyleSheet, View, Modal} from 'react-native';
import PropTypes from 'prop-types';
import LottieView from 'lottie-react-native';
import {colors} from '../styles/Colors';
import {Title} from 'react-native-paper';

export default function LoaderPokemon({visible}) {
  return (
    <Modal animationType="fade" visible={visible}>
      <View style={styles.container}>
        <LottieView
          autoPlay={true}
          source={require('../assets/lottie/poke_loader.json')}
        />
        <Title style={styles.title}>Cargando...</Title>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red_pokemon,
    flex: 1,
    position: 'relative',
  },
  title: {
    position: 'absolute',
    bottom: '30%',
    left: 0,
    right: 0,
    textAlign: 'center',
    color: colors.white,
    fontSize: 28,
  },
});

LoaderPokemon.prototype = {
  visible: PropTypes.bool.isRequired,
};
