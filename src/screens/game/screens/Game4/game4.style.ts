import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';
import {SCREEN_WIDTH} from 'src/constants/deviceInfo';

export default StyleSheet.create({
  typeBox: {
    borderWidth: 1,
    borderColor: colors.purple,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 30,
  },
  inputStyle: {
    width: SCREEN_WIDTH * 0.24,
    marginRight: 5,
  },
  inputBoxStyle: {
    fontSize: 12,
  },
});
