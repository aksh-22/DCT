import {View, Text} from 'react-native';
import React from 'react';
import CustomText from '../CustomText';

type Props = {};

const RenderDetail = ({data}: Props) => {
  return (
    <View>
      <CustomText>{data.title}</CustomText>
    </View>
  );
};

export default RenderDetail;
