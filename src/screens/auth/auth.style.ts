import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';
import {SCREEN_WIDTH} from 'src/constants/deviceInfo';

export default StyleSheet.create({
  container: {
    flex: 1,
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
  },
  otpInputStyle: {
    backgroundColor: colors.background2,
    marginHorizontal: 5,
  },
});
