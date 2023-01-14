import {View, Text} from 'react-native';
import React from 'react';
import ContainerWithoutScroll from 'src/container/ContainerWithoutScroll';
import colors from 'src/constants/colors';
import CustomText from 'src/components/CustomText';

type Props = {};

const Withdrawal = ({}: Props) => {
  return (
    <ContainerWithoutScroll
      barStyle="light-content"
      statusBarColor={colors.buttonColor1}
      style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <CustomText size={30}>Coming soon</CustomText>
    </ContainerWithoutScroll>
  );
};

export default Withdrawal;
