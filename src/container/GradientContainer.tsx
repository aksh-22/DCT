import React, {ReactNode} from 'react';
import {ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from 'src/constants/colors';
import globalStyles from 'src/constants/globalStyles';

type Props = {
  children: ReactNode;
  style?: ViewStyle;
};

const GradientContainer = ({children, style}: Props) => {
  return (
    <LinearGradient
      style={[globalStyles.container, style]}
      colors={[colors.defaultWhite, colors.primaryColor]}>
      {children}
    </LinearGradient>
  );
};

export default GradientContainer;
