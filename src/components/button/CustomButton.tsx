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
  title?: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  isLoading?: boolean;
  width?: number | string;
  variant?: 'standard' | 'outline';
  titleSize?: number;
  backgroundColor?: string;
  children?: any;
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
  backgroundColor,
  children,
}: Props) => {
  return (
    <TouchableOpacity disabled={disabled || isLoading} onPress={onPress}>
      <View
        style={[
          buttonStyle.button,
          buttonStyle[variant],
          backgroundColor && {backgroundColor},
          style,
          {width},
        ]}>
        {isLoading ? (
          <ActivityIndicator color={colors.defaultWhite} />
        ) : (
          children ?? (
            <CustomText
              size={titleSize}
              style={[buttonStyle[`${variant}_title`], titleStyle]}>
              {title}
            </CustomText>
          )
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
