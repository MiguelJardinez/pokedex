import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Button, Title, Paragraph} from 'react-native-paper';
import {colors} from '../styles/Colors';
import {useNavigation} from '@react-navigation/native';

export default function ErrorPage() {
  const navigation = useNavigation();
  return (
    <View style={styles.viewContainer}>
      <View>
        <View style={styles.viewImage}>
          <Image
            resizeMode="contain"
            style={styles.img}
            source={require('../assets/error.png')}
          />
        </View>
        <View style={styles.viewDetails}>
          <Title style={styles.title}>Hubo un problema</Title>
          <Paragraph style={styles.details}>
            Lo sentimos tuvimos un problema con la aplicación, por favor espere
            5 minutos e intente de nuevo
          </Paragraph>
        </View>
        <View style={styles.viewActions}>
          <Button
            onPress={() => navigation.navigate('home-stack')}
            mode="contained">
            Regresa a home
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  viewImage: {
    flex: 0.5,
    justifyContent: 'flex-end',
  },
  img: {
    width: '100%',
    height: 270,
  },
  viewDetails: {
    flex: 0.3,
    paddingTop: 16,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 16,
    color: colors.red_pokemon,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 18,
  },
  viewActions: {
    flex: 0.2,
    justifyContent: 'center',
  },
});
