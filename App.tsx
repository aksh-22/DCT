import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStack from 'src/routes/RootStack';
import {navigationRef} from 'src/utils/navigationRef';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
