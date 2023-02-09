import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 24,
    alignSelf: 'center',
  },
  titleStyle: {
    color: colors.defaultWhite,
  },
});
