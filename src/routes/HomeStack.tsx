import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeStackName} from 'src/constants/routeNames';
import GameList from 'src/screens/game/list/GameList';
import Game1 from 'src/screens/game/screens/Game1';
import Game2 from 'src/screens/game/screens/Game2';
import Game3 from 'src/screens/game/screens/Game3';
import Game4 from 'src/screens/game/screens/Game4';
import Game5 from 'src/screens/game/screens/Game5';
import Home from 'src/screens/home/Home';
const Stack = createNativeStackNavigator();

type Props = {};

const HomeStack = ({}: Props) => {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={HomeStackName.HOME} component={Home} />
      <Screen name={HomeStackName.GAME_LIST} component={GameList} />
      <Screen name={HomeStackName.GAME1} component={Game1} />
      <Screen name={HomeStackName.GAME2} component={Game2} />
      <Screen name={HomeStackName.GAME3} component={Game3} />
      <Screen name={HomeStackName.GAME4} component={Game4} />
      <Screen name={HomeStackName.GAME5} component={Game5} />
    </Navigator>
  );
};

export default HomeStack;
