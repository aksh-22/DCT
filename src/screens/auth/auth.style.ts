import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  container: {
    padding: 20,
  },
  inputContainer: {
    marginTop: 20,
  },
  buttonStyle: {
    marginVertical: 20,
  },
  textStyle: {
    textAlign: 'center',
  },
  forgotPassText: {
    textAlign: 'right',
    marginTop: 20,
  },
  resendText: {
    marginTop: 20,
    alignItems: 'center',
  },
  signUp: {
    textAlign: 'center',
    fontFamily: 'none',
  },
  otpInputStyle: {
    backgroundColor: colors.transparent,
    borderBottomWidth: 2,
    marginHorizontal: 0,
  },
});
