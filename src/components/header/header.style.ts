import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: colors.background,
  },
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
  status: {
    borderWidth: 1,
    borderColor: colors.green,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
});
