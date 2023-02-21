import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import SvgBackground from 'src/components/SvgBackground';
import {gameDataType} from 'typings/game-type';

type Props = {
  item: gameDataType;
};

const ListItem = ({item}: Props) => {
  return (
    <TouchableOpacity
      style={{
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
      }}>
      <SvgBackground>{item.name}</SvgBackground>
      <SvgBackground bg="gameWrapper">{item.name}</SvgBackground>
    </TouchableOpacity>
  );
};

export default ListItem;
