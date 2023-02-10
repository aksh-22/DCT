import React, {useRef} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
} from 'react-native';
import colors from 'src/constants/colors';
import {fonts} from 'src/constants/fonts';

type Props = {
  onChange: (value: string) => void;
  error?: string;
  value: string;
  LENGTH?: number;
  inputStyle?: TextStyle;
};

const OTPInput = ({onChange, error, value, LENGTH = 4, inputStyle}: Props) => {
  let inputRef = useRef([]);

  const onChangeText = (text: string, index: number) => {
    const temp = value.split('');
    if (text.length === 1) {
      if (index + 1 < LENGTH) {
        inputRef.current[index + 1].focus();
      }
      if (index + 1 <= LENGTH) {
        temp[index] = text;
        onChange(temp.join(''));
      }
    } else if (text.length === LENGTH) {
      onChange(text.split('').join(''));
      inputRef.current[LENGTH - 1].focus();
    } else if (text.length > 1) {
      if (index + 1 < LENGTH) {
        inputRef.current[index + 1].focus();
      }
      temp[index] = temp[index];
      onChange(temp.join(''));
    } else {
      temp[index] = '';
      onChange(temp.join(''));
    }
  };

  return (
    <>
      <View style={styles.otpContainer}>
        {Array(LENGTH)
          .fill('')
          .map((el, index) => (
            <TextInput
              ref={ref => (inputRef.current[index] = ref)}
              // maxLength={1}
              keyboardType="number-pad"
              key={index}
              value={value.split('')[index]}
              style={[styles.otpInput, inputStyle]}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') {
                  if (index > 0) {
                    if (!value[index]) {
                      inputRef.current[index - 1].focus();
                    }
                  }
                }
              }}
              onChangeText={txt => onChangeText(txt, index)}
            />
          ))}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </>
  );
};

export default OTPInput;

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // marginHorizontal: 20,
  },
  otpInput: {
    height: 50,
    width: 50,
    backgroundColor: colors.background2,
    borderRadius: 10,
    // flex: 1,
    marginHorizontal: Platform.select({ios: 20, android: 15}),
    fontFamily: fonts.regular,
    textAlign: 'center',
    color: colors.defaultWhite,
    borderWidth: 1,
    borderColor: colors.defaultWhite,
  },
  error: {
    fontFamily: fonts.regular,
    fontSize: 15,
    paddingBottom: 10,
    color: colors.red,
    marginTop: 5,
  },
});
