import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import CustomHeader from 'src/components/header/CustomHeader';
import MyTabBar from 'src/components/TabBar';
import {WalletStackName} from 'src/constants/routeNames';
import Approved from 'src/screens/wallet/history/Approved';
import Pending from 'src/screens/wallet/history/Pending';
import Withdrawal from 'src/screens/wallet/withdrawal/Withdrawal';

const Tab = createMaterialTopTabNavigator();

const WalletStack = () => {
  return (
    <>
      <CustomHeader leftTitle="Withdrawal" showWallet={false} />
      <Tab.Navigator
        initialRouteName={WalletStackName.PENDING}
        tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name={WalletStackName.WITHDRAWAL} component={Withdrawal} />
        <Tab.Screen name={WalletStackName.PENDING} component={Pending} />
        <Tab.Screen name={WalletStackName.APPROVED} component={Approved} />
      </Tab.Navigator>
    </>
  );
};

export default WalletStack;
