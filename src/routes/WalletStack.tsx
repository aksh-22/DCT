import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {WalletStackName} from 'src/constants/routeNames';
import Withdrawal from 'src/screens/wallet/withdrawal/Withdrawal';

const Tab = createMaterialTopTabNavigator();

type Props = {};

const WalletStack = ({}: Props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={WalletStackName.WITHDRAWAL} component={Withdrawal} />
      <Tab.Screen name={WalletStackName.PENDING} component={Withdrawal} />
      <Tab.Screen name={WalletStackName.APPROVED} component={Withdrawal} />
    </Tab.Navigator>
  );
};

export default WalletStack;
