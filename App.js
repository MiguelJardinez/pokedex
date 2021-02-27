import React, {useState, useEffect} from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import AnimatedSplash from 'react-native-animated-splash-screen';
import {colors} from './src/styles/Colors';
import {getfavoritesAction} from './src/redux/actions/favorites/getFavoritesAction';
import {useDispatch} from 'react-redux';

export default function App() {
  const dispatch = useDispatch();
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    dispatch(getfavoritesAction());
    setTimeout(() => {
      setShowSplash(true);
    }, 2000);
  }, []);
  return (
    <AnimatedSplash
      isLoaded={showSplash}
      backgroundColor={colors.red_pokemon}
      logoWidth={250}
      logoImage={require('./src/assets/logo.png')}>
      <AppNavigation />
    </AnimatedSplash>
  );
}
