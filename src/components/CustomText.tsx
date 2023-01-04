import React, {ReactNode} from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {fonts} from 'src/constants/fonts';

type Props = {
  style?: TextStyle | TextStyle[];
  children: ReactNode;
};

const CustomText = ({style, children}: Props) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.regular,
  },
});
