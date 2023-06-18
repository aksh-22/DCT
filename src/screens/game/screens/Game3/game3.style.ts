import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';
import {SCREEN_WIDTH} from 'src/constants/deviceInfo';

export default StyleSheet.create({
  container: {
    marginTop: 20,
  },
  inputArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  inputBoxArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
    width: SCREEN_WIDTH * 0.35,
    marginRight: 10,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  listArea: {
    marginTop: 20,
  },
  listItem: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 30,
    padding: 15,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
});
