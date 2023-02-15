import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  rowItem: {
    flex: 1,
    borderColor: colors.active,
    borderStyle: 'dashed',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  circleStyle: {
    position: 'absolute',
    right: -10,
    top: 0,
  },
  rightCircleStyle: {
    position: 'absolute',
    left: -10,
    top: 0,
  },
});
