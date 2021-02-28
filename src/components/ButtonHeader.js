import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../styles/Colors';

export default function ButtonHeader() {
  const navigation = useNavigation();
  return (
    <Button
      mode="outlined"
      style={styles.btnHeader}
      onPress={() => navigation.navigate('favorite-stack')}>
      <Text style={styles.textBtn}>Caught up</Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  btnHeader: {
    fontWeight: 'bold',
    marginRight: 16,
    fontSize: 18,
    borderColor: colors.white,
    borderWidth: 1,
  },
  textBtn: {
    color: colors.white,
  },
});
