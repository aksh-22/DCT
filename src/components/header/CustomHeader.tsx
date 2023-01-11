import {View, Text} from 'react-native';
import React from 'react';
import headerStyle from './header.style';
import {useTheme} from '@react-navigation/native';

type Props = {};

const CustomHeader = ({}: Props) => {
  const {colors} = useTheme();
  console.log('colors', colors);

  return (
    <View style={headerStyle.header}>
      <Text>CustomHeader</Text>
    </View>
  );
};

export default CustomHeader;
