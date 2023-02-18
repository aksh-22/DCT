import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AuthorizeStackName} from 'src/constants/routeNames';
import Notification from 'src/screens/notification/Notification';
import WalletHistory from 'src/screens/wallet/WalletHistory';
import BottomTabStack from './BottomTabStack';
const Stack = createNativeStackNavigator();

type Props = {};

const AuthorizeStack = ({}: Props) => {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen
        name={AuthorizeStackName.BOTTOM_TAB_STACK}
        component={BottomTabStack}
      />
      <Screen
        name={AuthorizeStackName.WALLET_HISTORY}
        component={WalletHistory}
      />
      <Screen name={AuthorizeStackName.NOTIFICATION} component={Notification} />
    </Navigator>
  );
};

export default AuthorizeStack;
