/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import AnimatedLottieView from 'lottie-react-native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import colors from 'src/constants/colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'src/constants/deviceInfo';
import {fonts} from 'src/constants/fonts';
import globalStyles from 'src/constants/globalStyles';

interface props {
  isVisible?: boolean;
  message: string;
  modalType?: 'Error' | 'Success' | 'Info';
  onPress?: () => void;
}

const color = {
  Error: colors.red,
  Success: colors.green,
  Info: colors.Candlelight,
};

const lottiePath = {
  Error: require('src/assets/lottie/errorExclamation.json'),
  Success: require('src/assets/lottie/success.json'),
  Info: require('src/assets/lottie/infoLottie.json'),
};

export let showMessage = ({
  isVisible = true,
  message = '',
  modalType = 'Info',
  onPress = () => null,
}: props) => null;

const MessageModal = ({children}: {children: any}) => {
  const [controller, setController] = useState<props>({
    message: '',
    isVisible: false,
    modalType: 'Info',
  });

  useEffect(() => {
    showMessage = ({
      isVisible = true,
      message = '',
      modalType = 'Info',
      onPress,
    }: props) => {
      setController({message, modalType, isVisible, ...(onPress && {onPress})});
    };
  }, []);

  const closeModal = () => {
    controller?.onPress && controller?.onPress();
    setController(prev => {
      return {
        ...prev,
        isVisible: false,
      };
    });
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      {children}
      {controller?.isVisible === true ? (
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.wrapper}>
            <View style={styles.container}>
              <View style={styles.top}>
                <AnimatedLottieView
                  source={lottiePath[controller?.modalType]}
                  autoPlay
                  loop={true}
                  style={styles.lottie}
                />
              </View>
              <Text numberOfLines={15} style={styles.messageText}>
                {controller?.message}
              </Text>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.pressableText}
                onPress={closeModal}>
                <Text
                  style={[styles.text, {color: color[controller?.modalType]}]}>
                  OK
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      ) : null}
    </View>
  );
};

export default MessageModal;

const styles = StyleSheet.create({
  wrapper: {
    height: SCREEN_HEIGHT,
    backgroundColor: colors.blackOpacity,
    width: SCREEN_WIDTH,
    position: 'absolute',
    justifyContent: 'center',
  },
  container: {
    padding: 20,
    alignSelf: 'center',
    maxHeight: 900,
    backgroundColor: colors.defaultWhite,
    width: SCREEN_WIDTH - 120,
    borderRadius: 13,
    ...globalStyles.shadow,
  },
  top: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: -15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottie: {
    height: 50,
    width: 50,
    alignSelf: 'center',
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
    color: colors.defaultBlack,
    textAlign: 'center',
    paddingBottom: 10,
    fontFamily: fonts.regular,
  },
  pressableText: {
    alignItems: 'center',
    paddingTop: 7,
    width: '100%',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.linkWater,
    marginBottom: -9,
  },
  text: {
    fontSize: 20,
    fontFamily: fonts.regular,
  },
});
