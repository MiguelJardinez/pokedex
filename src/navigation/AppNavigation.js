import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import Pokemon from '../pages/Pokemon';
import ErrorPage from '../pages/ErrorPage';
import {colors} from '../styles/Colors';
const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home-stack"
        component={Home}
        options={{
          title: 'Pokemones Kanto',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.red_pokemon,
          },
        }}
      />
      <Stack.Screen
        name="pokemon-stack"
        component={Pokemon}
        options={{
          title: '',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.red_pokemon,
          },
        }}
      />
      <Stack.Screen
        name="error-stack"
        component={ErrorPage}
        options={{
          title: 'Hubo un error',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.red_pokemon,
          },
        }}
      />
    </Stack.Navigator>
  );
}
