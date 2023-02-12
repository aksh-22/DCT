import React from 'react';
import {
  ActivityIndicator,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import colors from 'src/constants/colors';
import CustomText from '../CustomText';
import buttonStyle from './button.style';

type Props = {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  isLoading?: boolean;
  width?: number | string;
  variant?: 'standard' | 'outline';
  titleSize?: number;
};

const CustomButton = ({
  title,
  onPress,
  disabled,
  style,
  titleStyle,
  isLoading,
  width,
  variant = 'standard',
  titleSize = 17,
}: Props) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View style={[buttonStyle[variant], style, {width}]}>
        {isLoading ? (
          <ActivityIndicator color={colors.defaultWhite} />
        ) : (
          <CustomText
            size={titleSize}
            style={[buttonStyle[`${variant}_title`], titleStyle]}>
            {title}
          </CustomText>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
