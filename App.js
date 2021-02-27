import React, {useState, useEffect} from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import AnimatedSplash from 'react-native-animated-splash-screen';
import {colors} from './src/styles/Colors';

export default function App() {
  const [showSplash, setShowSplash] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(true);
      console.log('quitando splash');
    }, 1000);
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
