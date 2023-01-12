import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import VectorIcon from 'src/components/IconsFamily';
import colors from 'src/constants/colors';
import globalStyles from 'src/constants/globalStyles';
import {BottomStackName} from 'src/constants/routeNames';
import MyBet from 'src/screens/bet/MyBet';
import Home from 'src/screens/home/Home';
import More from 'src/screens/more/More';
import Withdrawal from 'src/screens/withdrawal/Withdrawal';

const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
  const {Navigator, Screen} = Tab;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.Candlelight,
        tabBarInactiveTintColor: colors.primaryColor,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        // tabBarShowLabel: false,
      }}>
      <Screen
        name={BottomStackName.HOME}
        component={Home}
        options={{
          tabBarIcon: color => (
            <VectorIcon size={25} name="home" color={color.color} />
          ),
        }}
      />
      <Screen
        name={BottomStackName.MY_BET}
        component={MyBet}
        options={{
          tabBarIcon: color => (
            <VectorIcon
              size={25}
              family="MaterialCommunityIcons"
              name="dice-multiple"
              color={color.color}
            />
          ),
        }}
      />
      <Screen
        name={BottomStackName.WITHDRAWAL}
        component={Withdrawal}
        options={{
          tabBarIcon: color => (
            <VectorIcon size={20} name="wallet-outline" color={color.color} />
          ),
        }}
      />
      <Screen
        name={BottomStackName.MORE}
        component={More}
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
    backgroundColor: colors.buttonColor1,
    ...globalStyles.shadow,
  },
  tabBarLabelStyle: {
    marginBottom: 8,
    marginTop: -8,
  },
});

export default BottomTabStack;
