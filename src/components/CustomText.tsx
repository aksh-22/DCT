import React, {ReactNode} from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {fonts} from 'src/constants/fonts';

type Props = {
  style?: TextStyle | TextStyle[];
  children: ReactNode;
  size?: number;
  color?: string;
};

const CustomText = ({style, children, size, color}: Props) => {
  return (
    <Text style={[styles.text, {fontSize: size, color}, style]}>
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
