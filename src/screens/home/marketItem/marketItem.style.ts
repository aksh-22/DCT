import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  marketItem: {
    backgroundColor: colors.background2,
    marginVertical: 15,
    borderRadius: 15,
    flexDirection: 'row',
  },
  marketItemLeft: {
    flex: 1,
    padding: 20,
  },
  marketItemRight: {
    borderLeftWidth: 1,
    borderLeftColor: colors.placeholderColor,
  },
  marketStatusWrapper: {
    borderRadius: 16,
    paddingHorizontal: 15,
    backgroundColor: colors.red,
  },
  playNow: {
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 0,
    paddingHorizontal: 15,
    marginLeft: 15,
  },
  openBid: {
    // paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  horizontal: {
    height: 1,
    backgroundColor: colors.placeholderColor,
  },
});
