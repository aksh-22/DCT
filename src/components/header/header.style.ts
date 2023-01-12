import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.buttonColor1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    // paddingVertical: 25,
  },
  heading: {
    color: colors.defaultWhite,
  },
  rightIconArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  price: {
    marginLeft: 5,
    color: colors.defaultWhite,
    fontFamily: 'none',
  },
});
