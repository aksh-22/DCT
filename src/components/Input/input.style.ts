import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  mainContainer: {},
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.defaultBlack,
    borderWidth: 1,
    borderRadius: 10,
  },
  icon: {
    paddingHorizontal: 10,
  },
  inputField: {
    flex: 1,
  },
});
