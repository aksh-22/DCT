import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import React from 'react';
import {useColorScheme} from 'react-native';
import MessageModal from 'src/components/MessageModal';
import RootStack from 'src/routes/RootStack';
import {navigationRef} from 'src/utils/navigationRef';

const App = () => {
  const colorScheme = useColorScheme();

  return (
    <MessageModal>
      <NavigationContainer
        ref={navigationRef}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootStack />
      </NavigationContainer>
    </MessageModal>
  );
};

export default App;
