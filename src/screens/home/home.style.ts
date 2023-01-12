import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  container: {
    margin: 15,
    paddingBottom: 100,
  },
  welcomeBox: {
    marginBottom: 15,
  },
  depositBox: {
    borderWidth: 1,
    borderColor: colors.buttonColor1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  phoneText: {
    margin: 10,
  },
  marketList: {
    marginTop: 20,
  },
  marketItemTop: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 10,
  },
  verticalLine: {
    width: 1,
    height: '100%',
    backgroundColor: colors.buttonColor1,
  },
  marketText: {
    textAlign: 'center',
  },
});
