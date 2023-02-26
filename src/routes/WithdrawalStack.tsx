import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import CustomHeader from 'src/components/header/CustomHeader';
import MyTabBar from 'src/components/TabBar';
import {WithdrawalStackName} from 'src/constants/routeNames';
import Approved from 'src/screens/withdrawal/history/Approved';
import Pending from 'src/screens/withdrawal/history/Pending';
import Withdrawal from 'src/screens/withdrawal/withdrawal/Withdrawal';

const Tab = createMaterialTopTabNavigator();

const WithdrawalStack = () => {
  return (
    <>
      <CustomHeader leftTitle="Withdrawal" showWallet={false} />
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen
          name={WithdrawalStackName.WITHDRAWAL}
          component={Withdrawal}
        />
        <Tab.Screen name={WithdrawalStackName.PENDING} component={Pending} />
        <Tab.Screen name={WithdrawalStackName.APPROVED} component={Approved} />
      </Tab.Navigator>
    </>
  );
};

export default WithdrawalStack;
