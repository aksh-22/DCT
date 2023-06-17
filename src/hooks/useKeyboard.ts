import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

type Props = {
  delay?: number;
};

export const useKeyboard = ({delay = 0}: Props = {}) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setTimeout(() => {
          setKeyboardVisible(true); // or some other action
        }, delay);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setTimeout(() => {
          setKeyboardVisible(false); // or some other action
        }, delay);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [delay]);
  return {isKeyboardVisible};
};
