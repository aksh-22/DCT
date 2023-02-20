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
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
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
    justifyContent: 'center',
    alignItems: 'center',
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
