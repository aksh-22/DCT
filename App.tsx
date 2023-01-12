import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import React from 'react';
import {useColorScheme} from 'react-native';
import RootStack from 'src/routes/RootStack';
import {navigationRef} from 'src/utils/navigationRef';

const App = () => {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
