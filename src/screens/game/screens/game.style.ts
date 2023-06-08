import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  boxArea: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  box1: {
    width: 67,
    height: 58,
    borderRadius: 28.5,
    backgroundColor: colors.background2,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
