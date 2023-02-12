import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    // marginTop: 40,
    // backgroundColor: 'red',
  },
  column: {
    flex: 1,
    alignItems: 'center',
    height: 70,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.background2,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
    borderRadius: 15,
  },
  lineArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
