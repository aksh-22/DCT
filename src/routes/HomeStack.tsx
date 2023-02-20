import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeStackName} from 'src/constants/routeNames';
import GameList from 'src/screens/game/list/GameList';
import Home from 'src/screens/home/Home';
const Stack = createNativeStackNavigator();

type Props = {};

const HomeStack = ({}: Props) => {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={HomeStackName.HOME} component={Home} />
      <Screen name={HomeStackName.GAME_LIST} component={GameList} />
    </Navigator>
  );
};

export default HomeStack;
