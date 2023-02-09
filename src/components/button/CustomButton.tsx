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
};

const CustomButton = ({
  title,
  onPress,
  disabled,
  style,
  titleStyle,
  isLoading,
}: Props) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View style={[buttonStyle.container, style]}>
        {isLoading ? (
          <ActivityIndicator color={colors.defaultWhite} />
        ) : (
          <CustomText size={17} style={[buttonStyle.titleStyle, titleStyle]}>
            {title}
          </CustomText>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
