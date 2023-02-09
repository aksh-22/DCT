import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/constants/deviceInfo';

export default StyleSheet.create({
  circle: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    height: 300,
    zIndex: 1,
    top: 0,
  },
});
