import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import CustomHeader from 'src/components/header/CustomHeader';
import TransactionIcon from 'src/components/TransactionIcon';
import colors from 'src/constants/colors';
import {fonts} from 'src/constants/fonts';
import {WalletStackName} from 'src/constants/routeNames';
import Approved from 'src/screens/wallet/history/Approved';
import Pending from 'src/screens/wallet/history/Pending';
import Withdrawal from 'src/screens/wallet/withdrawal/Withdrawal';
import {BottomStackProps} from './types/navigation';

const Tab = createMaterialTopTabNavigator();

const WalletStack = ({navigation}: BottomStackProps) => {
  return (
    <>
      <CustomHeader heading="Wallet" />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {backgroundColor: colors.buttonColor1},
          tabBarLabelStyle: {fontFamily: fonts.regular},
        }}>
        <Tab.Screen name={WalletStackName.WITHDRAWAL} component={Withdrawal} />
        <Tab.Screen name={WalletStackName.PENDING} component={Pending} />
        <Tab.Screen name={WalletStackName.APPROVED} component={Approved} />
      </Tab.Navigator>
      <TransactionIcon
        onPress={() => navigation.navigate(WalletStackName.WALLET_HISTORY)}
      />
    </>
  );
};

export default WalletStack;
