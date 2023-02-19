import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  depositBox: {
    height: 100,
    overflow: 'hidden',
    borderBottomRightRadius: 24,
    marginTop: -10,
  },
  rectangleIcon: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  whiteWhatsapp: {
    position: 'absolute',
    right: -10,
    bottom: -10,
    opacity: 0.4,
    zIndex: 1,
  },
  textArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    marginTop: 15,
  },
});
