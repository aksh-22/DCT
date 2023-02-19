import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background4,
    borderRadius: 47,
    overflow: 'hidden',
  },
  header: {
    backgroundColor: colors.background5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  marketModalItem: {
    borderBottomWidth: 1,
    borderBottomColor: colors.background5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});
