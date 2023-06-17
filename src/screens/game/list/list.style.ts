import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  item: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  row: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  iconWrapper: {
    position: 'absolute',
    zIndex: 10,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 40,
    width: 40,
  },
});
