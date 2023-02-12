import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  listArea: {
    marginTop: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    marginLeft: 20,
    justifyContent: 'space-between',
  },
  textArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
  },
  iconWrapper: {
    height: 30,
    width: 30,
    backgroundColor: colors.active,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
