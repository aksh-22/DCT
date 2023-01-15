import {StyleSheet} from 'react-native';
import colors from './colors';
import {fonts} from './fonts';

export default StyleSheet.create({
  borderBottomRadius: {
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  borderTopRadius: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  shadow: {
    shadowColor: colors.defaultBlack,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  crossIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 30,
    width: 30,
    zIndex: 20,
  },
  container: {
    flex: 1,
  },
  container_center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mt_5: {
    marginTop: 5,
  },
  mb_5: {
    marginBottom: 5,
  },
  mb_20: {
    marginBottom: 20,
  },
  mt_10: {
    marginTop: 10,
  },
  mt_20: {
    marginTop: 20,
  },
  mt_40: {
    marginTop: 40,
  },
  mr_20: {
    marginRight: 20,
  },
  mr_30: {
    marginRight: 20,
  },
  mr_40: {
    marginRight: 20,
  },
  mh_20: {
    marginHorizontal: 20,
  },
  mv_20: {
    marginVertical: 20,
  },
  pd_20: {
    padding: 20,
  },
  headingText: {
    color: colors.defaultBlack,
    fontSize: 18,
    marginLeft: 20,
    marginTop: 10,
  },
  centerAlign: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizontalView: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  mainCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  strikeThrough: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  row_spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  background: {
    backgroundColor: colors.background,
  },
  heading: {
    fontFamily: fonts.regular,
    fontSize: 22,
    color: colors.defaultBlack,
    lineHeight: 28,
    textAlign: 'center',
    flex: 1,
  },
});
