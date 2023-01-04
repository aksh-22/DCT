import Lottie from 'lottie-react-native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from 'src/constants/colors';
import {SCREEN_WIDTH} from 'src/constants/deviceInfo';
import globalStyles from 'src/constants/globalStyles';
import GradientContainer from 'src/container/GradientContainer';

const Splash = ({onAnimationFinish}) => {
  return (
    <View style={globalStyles.container}>
      <GradientContainer style={styles.container_center}>
        <Lottie
          autoPlay
          style={styles.lottie}
          source={require('src/assets/lottie/dice-roll.json')}
          autoSize
          resizeMode="cover"
          onAnimationFinish={onAnimationFinish}
          loop={false}
        />
      </GradientContainer>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  lottie: {
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
  },
  container_center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.inActiveDot,
    paddingBottom: 100,
  },
});
