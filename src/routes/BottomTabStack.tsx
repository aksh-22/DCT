import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import CustomIcon from 'src/components/CustomIcon';
import VectorIcon from 'src/components/IconsFamily';
import colors from 'src/constants/colors';
import {fonts} from 'src/constants/fonts';
import globalStyles from 'src/constants/globalStyles';
import {BottomStackName} from 'src/constants/routeNames';
import MyBet from 'src/screens/bet/MyBet';
import Home from 'src/screens/home/Home';
import MoreStack from './MoreStack';
import WalletStack from './WalletStack';

const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
  const {Navigator, Screen} = Tab;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.active,
        tabBarInactiveTintColor: colors.inactive,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        // tabBarShowLabel: false,
      }}>
      <Screen
        name={BottomStackName.HOME}
        component={Home}
        options={{
          tabBarIcon: color => <CustomIcon name="home" fill={color.color} />,
        }}
      />
      <Screen
        name={BottomStackName.MY_BET}
        component={MyBet}
        options={{
          tabBarIcon: color => <CustomIcon name="my-bet" fill={color.color} />,
        }}
      />
      <Screen
        name={BottomStackName.WITHDRAWAL}
        component={WalletStack}
        options={{
          tabBarIcon: color => (
            <CustomIcon name="withdrawal" fill={color.color} />
          ),
        }}
      />
      <Screen
        name={BottomStackName.MORE_STACK}
        component={MoreStack}
        options={{
          tabBarIcon: color => (
            <VectorIcon
              size={20}
              family="Feather"
              name="more-horizontal"
              color={color.color}
            />
          ),
        }}
      />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    bottom: 20,
    left: 30,
    right: 30,
    borderRadius: 20,
    height: 60,
    backgroundColor: colors.background3,
    ...globalStyles.shadow,
  },
  tabBarLabelStyle: {
    marginBottom: 8,
    marginTop: -8,
    fontFamily: fonts.regular,
    fontSize: 12,
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelWrapper: {
    position: 'absolute',
    left: 23,
    // backgroundColor: colors.defaultWhite,
    top: 3,
  },
  label: {
    // color: colors.defaultWhite,
    fontSize: 10,
    fontFamily: 'none',
    fontWeight: 'bold',
  },
});

export default BottomTabStack;
