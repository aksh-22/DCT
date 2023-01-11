import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import colors from 'src/constants/colors';
import RootStack from 'src/routes/RootStack';
import {navigationRef} from 'src/utils/navigationRef';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primaryColor,
    textColor: colors.defaultBlack,
  },
};

const App = () => {
  return (
    <NavigationContainer ref={navigationRef} theme={MyTheme}>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
