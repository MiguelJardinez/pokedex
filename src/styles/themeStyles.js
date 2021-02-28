import {DefaultTheme} from 'react-native-paper';
import {colors} from '../styles/Colors';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.red_pokemon,
  },
};
