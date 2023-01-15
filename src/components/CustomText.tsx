/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {fonts} from 'src/constants/fonts';

type Props = {
  style?: TextStyle | TextStyle[];
  children: ReactNode;
  size?: number;
  color?: string;
  removeFontFamily?: boolean;
};

const CustomText = ({
  style,
  children,
  size,
  color,
  removeFontFamily,
}: Props) => {
  return (
    <Text
      style={[
        styles.text,
        {
          fontSize: size,
          color,
          fontFamily: removeFontFamily ? 'none' : fonts.regular,
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
