import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {RootStackName, WalletStackName} from 'src/constants/routeNames';
import Notification from 'src/screens/notification/Notification';
import Splash from 'src/screens/splash/Splash';
import WalletHistory from 'src/screens/withdrawal/wallet/WalletHistory';
import {useAppSelector} from 'src/utils/reducer';
import AuthStack from './AuthStack';
import BottomTabStack from './BottomTabStack';

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
        <>
          <Screen
            name={RootStackName.BOTTOM_TAB_STACK}
            component={BottomTabStack}
          />
          <Screen
            name={WalletStackName.WALLET_HISTORY}
            component={WalletHistory}
          />
          <Screen name={RootStackName.NOTIFICATION} component={Notification} />
        </>
      )}
    </Navigator>
  );
};

export default RootStack;
