import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {RootStackName} from 'src/constants/routeNames';
import Splash from 'src/screens/splash/Splash';
import {useAppSelector} from 'src/utils/reducer';
import AuthorizeStack from './AuthorizeStack';
import AuthStack from './AuthStack';

type Props = {};

const Stack = createNativeStackNavigator();

const RootStack = ({}: Props) => {
  const {Navigator, Screen} = Stack;
  const [showLottie, setShowLottie] = useState(true);

  const isLoggedIn = useAppSelector(state => state.userReducer.isLoggedIn);

  useEffect(() => {
    setTimeout(() => {
      setShowLottie(false);
    }, 2000);
  }, []);

  return (
    <Navigator screenOptions={{headerShown: false}}>
      {showLottie && <Screen name={RootStackName.SPLASH} component={Splash} />}
      {!isLoggedIn ? (
        <Screen name={RootStackName.AUTH_STACK} component={AuthStack} />
      ) : (
        <Screen
          name={RootStackName.AUTHORIZED_STACK}
          component={AuthorizeStack}
        />
      )}
    </Navigator>
  );
};

export default RootStack;
