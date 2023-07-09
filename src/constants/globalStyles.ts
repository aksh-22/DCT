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
    backgroundColor: colors.background,
  },
  container_center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
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
  pdb_100: {
    paddingBottom: 100,
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
  verticalLine: {
    width: 1,
    height: 50,
    backgroundColor: colors.defaultBlack,
    alignSelf: 'center',
  },
  zIndex_1: {
    zIndex: 1,
  },
  pd_200: {
    paddingBottom: 200,
  },
});

export const shadow = (t: number = 5) => {
  return {
    shadowColor: colors.white,
    shadowOffset: {
      width: 0,
      height: t,
    },
    shadowOpacity: 0.3,
    shadowRadius: t,
    elevation: t,
  };
};

export const margin = (
  marginTop?: number | string,
  marginBottom?: number | string,
  marginLeft?: number,
  marginRight?: number,
) => {
  if (typeof marginTop === 'string') {
    marginTop = Number(marginTop);

    if (typeof marginBottom === 'string') {
      marginBottom = Number(marginBottom);
      return {
        marginTop: marginTop,
        marginBottom: marginTop,
        marginLeft: marginBottom,
        marginRight: marginBottom,
      };
    }
    return {
      marginTop: marginTop,
      marginBottom: marginTop,
      marginLeft: marginTop,
      marginRight: marginTop,
    };
  }
  return {
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
  };
};

export const padding = (
  paddingTop?: number | string,
  paddingBottom?: number | string,
  paddingLeft?: number,
  paddingRight?: number,
) => {
  if (typeof paddingTop === 'string') {
    paddingTop = Number(paddingTop);

    if (typeof paddingBottom === 'string') {
      paddingBottom = Number(paddingBottom);
      return {
        paddingTop: paddingTop,
        paddingBottom: paddingTop,
        paddingLeft: paddingBottom,
        paddingRight: paddingBottom,
      };
    }
    return {
      paddingTop: paddingTop,
      paddingBottom: paddingTop,
      paddingLeft: paddingTop,
      paddingRight: paddingTop,
    };
  }

  return {
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
  };
};
