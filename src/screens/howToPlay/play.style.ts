import {StyleSheet} from 'react-native';
import colors from 'src/constants/colors';
import {fonts} from 'src/constants/fonts';

export default StyleSheet.create({
  timeStyle: {display: 'none'},
  descriptionStyle: {
    color: colors.lightBlack,
    fontFamily: fonts.regular,
  },
  circleStyle: {marginLeft: -52},
  listViewContainerStyle: {marginTop: 30, paddingBottom: 130},
  titleStyle: {marginTop: -10, fontFamily: fonts.regular},
});
