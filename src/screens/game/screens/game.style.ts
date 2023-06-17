import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';
import {SCREEN_HEIGHT} from 'src/constants/deviceInfo';
import {shadow} from 'src/constants/globalStyles';

const SIZE = (SCREEN_HEIGHT - 40) * 0.04;

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
    borderRadius: 25.5,
    backgroundColor: colors.background2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    width: SIZE,
    height: SIZE,
    borderRadius: 25.5,
    backgroundColor: colors.background2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountArea: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.background,
    paddingBottom: 20,
    ...shadow(),
    borderTopWidth: 1,
    borderTopColor: colors.white,
    paddingVertical: 10,
  },
  boxHeaderArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerBox: {
    backgroundColor: colors.purple,
    height: SIZE,
    width: SIZE,
    borderRadius: 19,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 19,
  },
  headerBoxWrapper: {
    overflow: 'hidden',
    height: SIZE,
    width: SIZE,
    marginRight: 1,
  },
});
