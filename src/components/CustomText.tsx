/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import colors from 'src/constants/colors';
import {fonts} from 'src/constants/fonts';

type Props = {
  style?: TextStyle | TextStyle[];
  children: ReactNode;
  size?: number;
  color?: 'white' | 'purple' | 'black';
  removeFontFamily?: boolean;
  center?: boolean;
  fontWeight?: TextStyle['fontWeight'];
  textColor?: string;
};

const CustomText = ({
  style,
  children,
  size,
  color = 'white',
  removeFontFamily,
  center,
  fontWeight = '400',
}: Props) => {
  return (
    <Text
      style={[
        styles.text,
        {
          fontSize: size,
          color: colors[color],
          fontFamily: removeFontFamily ? 'none' : fonts.regular,
          textAlign: center ? 'center' : null,
          fontWeight,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.regular,
  },
});
