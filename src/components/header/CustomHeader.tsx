import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import CustomText from '../CustomText';
import headerStyle from './header.style';

type Props = {};

const CustomHeader = ({}: Props) => {
  const {colors} = useTheme();

  console.log('colors', JSON.stringify(colors, null, 2));

  return (
    <View style={headerStyle.header}>
      <CustomText style={[headerStyle.heading, {color: colors.text}]}>
        CustomHeader
      </CustomText>
    </View>
  );
};

export default CustomHeader;
