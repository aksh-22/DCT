import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from 'src/constants/deviceInfo';

export default StyleSheet.create({
  split: {
    position: 'absolute',
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputBoxStyle: {
    width: SCREEN_WIDTH * 0.43,
    marginRight: 10,
  },
  inputBox2Style: {
    width: SCREEN_WIDTH * 0.3,
    marginRight: 10,
  },
  inputStyle: {
    fontSize: 14,
    paddingRight: 0,
    paddingHorizontal: 1,
    paddingLeft: 13,
  },
});
