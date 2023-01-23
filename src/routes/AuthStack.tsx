import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AuthStackName} from 'src/constants/routeNames';
import ForgotPassword from 'src/screens/auth/ForgotPassword';
import Login from 'src/screens/auth/Login';
import OTP from 'src/screens/auth/OTP';
import SignUp from 'src/screens/auth/SignUp';
const Stack = createNativeStackNavigator();

type Props = {};

const AuthStack = ({}: Props) => {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={AuthStackName.LOGIN} component={Login} />
      <Screen name={AuthStackName.SIGN_UP} component={SignUp} />
      <Screen name={AuthStackName.FORGOT_PASSWORD} component={ForgotPassword} />
      <Screen name={AuthStackName.OTP} component={OTP} />
    </Navigator>
  );
};

export default AuthStack;
