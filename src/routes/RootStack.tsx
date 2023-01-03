import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackName} from 'src/constants/routeNames';
import AuthStack from './AuthStack';

type Props = {};

const Stack = createNativeStackNavigator();

const RootStack = ({}: Props) => {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={RootStackName.AUTH_STACK} component={AuthStack} />
    </Navigator>
  );
};

export default RootStack;
