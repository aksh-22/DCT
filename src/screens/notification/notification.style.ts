import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  iconWrapper: {
    height: 40,
    width: 40,
    backgroundColor: colors.wrapperBackground,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginRight: 15,
  },
  topRow: {
    flex: 1,
  },
});
