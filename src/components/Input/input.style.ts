import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';
import {fonts} from 'src/constants/fonts';

export default StyleSheet.create({
  mainContainer: {},
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 28,
    backgroundColor: colors.background2,
  },
  icon: {
    marginRight: 30,
    borderRadius: 20,
  },
  mainIcon: {
    position: 'absolute',
    right: -10,
    backgroundColor: colors.purple,
    borderRadius: 20,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    flex: 1,
    fontFamily: fonts.regular,
    paddingLeft: 20,
  },
  error: {
    color: colors.red,
    marginLeft: 15,
    marginBottom: -15,
  },
});
