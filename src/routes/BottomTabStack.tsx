import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {BottomStackName} from 'src/constants/routeNames';
import Home from 'src/screens/home/Home';

const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
  const {Navigator, Screen} = Tab;

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={BottomStackName.HOME} component={Home} />
    </Navigator>
  );
};

export default BottomTabStack;
