import React from 'react';
import {TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import CustomText from '../CustomText';
import buttonStyle from './button.style';

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  titleStyle?: TextStyle;
};

const CustomButton = ({title, onPress, disabled, style, titleStyle}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[buttonStyle.container, style]}>
      <CustomText style={[titleStyle]}>{title}</CustomText>
    </TouchableOpacity>
  );
};

export default CustomButton;
