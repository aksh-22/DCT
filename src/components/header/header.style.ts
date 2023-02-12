import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.background,
    paddingHorizontal: 20,
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
    marginRight: 5,
    backgroundColor: colors.active,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
  },
  price: {
    marginLeft: 5,
    color: colors.defaultWhite,
    fontFamily: 'none',
  },
  backIconWrapper: {
    backgroundColor: colors.purple,
    borderRadius: 6,
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
