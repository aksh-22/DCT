import React, {ReactNode} from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {fonts} from 'src/constants/fonts';

type Props = {
  style?: TextStyle | TextStyle[];
  children: ReactNode;
  size?: number;
};

const CustomText = ({style, children, size}: Props) => {
  return <Text style={[styles.text, {fontSize: size}, style]}>{children}</Text>;
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.regular,
  },
});
