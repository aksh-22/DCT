import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 24,
    alignSelf: 'center',
  },
  standard: {
    backgroundColor: colors.purple,
  },
  outline: {
    backgroundColor: colors.transparent,
    borderWidth: 1,
    borderColor: colors.purple,
  },
  standard_title: {
    color: colors.defaultWhite,
  },
  outline_title: {
    color: colors.purple,
  },
});
