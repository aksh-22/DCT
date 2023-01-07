import React from 'react';
import {TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from 'src/constants/colors';
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
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <LinearGradient
        colors={[colors.buttonColor2, colors.buttonColor1]}
        style={[buttonStyle.container, style]}>
        <CustomText style={[buttonStyle.titleStyle, titleStyle]}>
          {title}
        </CustomText>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;
