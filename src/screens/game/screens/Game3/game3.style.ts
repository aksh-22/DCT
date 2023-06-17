import {StyleSheet} from 'react-native';
import {SCREEN_WIDTH} from 'src/constants/deviceInfo';

export default StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBozArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputSTyle: {
    width: SCREEN_WIDTH * 0.25,
    marginRight: 10,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
