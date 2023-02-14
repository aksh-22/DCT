import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  item: {
    backgroundColor: colors.background4,
    height: 120,
    borderRadius: 15,
    marginBottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  itemLower: {
    borderRightWidth: 1,
    borderColor: colors.purple2,
    // paddingRight: 30,
    borderStyle: 'dotted',
    flex: 1,
    // marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lastItem: {
    borderRightWidth: 0,
  },
});
