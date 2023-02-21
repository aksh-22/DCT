import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import Rect from 'src/assets/svg/rectangle.svg';
import GameWrapper from 'src/assets/svg/gameWrapper.svg';
import CustomText from './CustomText';

type Props = {
  bg?: 'rectangle' | 'gameWrapper';
  children?: ReactNode;
};

const svg = {rectangle: <Rect />, gameWrapper: <GameWrapper />};

const SvgBackground = ({bg = 'rectangle', children}: Props) => {
  return (
    <View style={styles.container}>
      {svg[bg]}
      <View style={styles.content}>
        <CustomText>{children}</CustomText>
      </View>
    </View>
  );
};

export default SvgBackground;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
  },
  content: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
