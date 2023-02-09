import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';
import {SCREEN_WIDTH} from 'src/constants/deviceInfo';

export default StyleSheet.create({
  container: {
    padding: 20,
  },
  inputContainer: {
    marginTop: 20,
  },
  loginImage: {
    width: SCREEN_WIDTH - 20,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
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
