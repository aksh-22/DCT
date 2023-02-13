import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';

export default StyleSheet.create({
  item: {
    // height: 100,
    // marginBottom: 5,
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderTopLeftRadius: 54,
    borderBottomRightRadius: 54,
    backgroundColor: colors.purple,
    marginBottom: 20,
  },
  svgWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  descriptionStyle: {
    opacity: 0.7,
  },
});
