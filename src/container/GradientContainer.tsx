import React, {ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from 'src/constants/colors';
import globalStyles from 'src/constants/globalStyles';

type Props = {
  children: ReactNode;
  style?: ViewStyle;
};

const GradientContainer = ({children, style}: Props) => {
  return (
    // <LinearGradient
    //   style={[globalStyles.container, style]}
    //   colors={[colors.gradientColor1, colors.gradientColor2]}>
    //   {children}
    // </LinearGradient>
    <View>{children}</View>
  );
};

export default GradientContainer;
