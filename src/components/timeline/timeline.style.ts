import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from 'src/constants/deviceInfo';

export default StyleSheet.create({
  circleStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    borderRadius: 10,
    zIndex: 1,
    position: 'absolute',
    left: SCREEN_WIDTH * 0.5 - 10,
    alignItems: 'center',
    right: 0,
  },
});
