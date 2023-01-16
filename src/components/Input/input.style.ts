import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';
import {fonts} from 'src/constants/fonts';

export default StyleSheet.create({
  mainContainer: {},
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 10,
  },
  icon: {
    paddingHorizontal: 10,
  },
  inputField: {
    flex: 1,
    fontFamily: fonts.regular,
  },
});
