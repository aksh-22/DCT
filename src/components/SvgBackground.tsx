import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import CustomText from './CustomText';
import Rect from 'src/assets/svg/rectangle.svg';
import GameWrapper from 'src/assets/svg/gameWrapper.svg';
import Single from 'src/assets/svg/single-ankda.svg';
import Jodi from 'src/assets/svg/jodi.svg';
import Panel from 'src/assets/svg/panel.svg';

type Props = {
  bg?: 'rectangle' | 'gameWrapper' | 'single' | 'jodi' | 'panel';
  children?: ReactNode;
  marginTop?: number;
};

const svg = {
  rectangle: <Rect />,
  gameWrapper: <GameWrapper />,
  single: <Single />,
  jodi: <Jodi />,
  panel: <Panel />,
};

const SvgBackground = ({bg = 'rectangle', children, marginTop = 5}: Props) => {
  return (
    <View style={styles.container}>
      {svg[bg]}
      <View style={[styles.content, {marginTop}]}>
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
    zIndex: 10,
  },
});
