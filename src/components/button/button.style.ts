import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  standard: {
    backgroundColor: colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 24,
    alignSelf: 'center',
  },
  outline: {
    backgroundColor: colors.transparent,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 24,
    alignSelf: 'center',
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
