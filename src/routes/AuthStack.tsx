import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AuthStackName} from 'src/constants/routeNames';
import Login from 'src/screens/auth/login/Login';
const Stack = createNativeStackNavigator();

type Props = {};

const AuthStack = ({}: Props) => {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={AuthStackName.LOGIN} component={Login} />
    </Navigator>
  );
};

export default AuthStack;
