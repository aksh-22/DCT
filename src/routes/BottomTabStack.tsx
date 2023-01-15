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
import WalletStack from './WalletStack';

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
        name={BottomStackName.WALLET}
        component={WalletStack}
        options={{
          tabBarIcon: color => (
            <VectorIcon size={20} name="wallet-outline" color={color.color} />
            // <View>
            //   <View style={styles.labelWrapper}>
            //     <CustomText style={[styles.label, {color: color.color}]}>
            //       {numberFormatter(1000)} {rupee}
            //     </CustomText>
            //   </View>
            // </View>
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
