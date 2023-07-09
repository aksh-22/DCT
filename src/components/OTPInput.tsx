import React from 'react';
import {StyleSheet, Text, TextInput, TextStyle, View} from 'react-native';
import colors from 'src/constants/colors';
import {fonts} from 'src/constants/fonts';
import globalStyles from 'src/constants/globalStyles';
import CustomText from './CustomText';

type Props = {
  onChange: (value: string) => void;
  error?: string;
  value: string;
  length?: number;
  inputStyle?: TextStyle;
};

const OTPInput = ({onChange, error, value, length = 4}: Props) => {
  console.log('value', value);
  return (
    <>
      <View style={globalStyles.row_spaceBetween}>
        {Array(length)
          .fill('')
          .map((el, i) => {
            let borderColor = colors.black;
            if (value.trim().length > i) {
              borderColor = colors.Candlelight;
            }
            i === 0 && (borderColor = colors.Candlelight);
            return (
              <View
                style={[
                  styles.otpInput,
                  {
                    borderColor,
                  },
                ]}
                key={i}>
                <CustomText color="white">{value[i]}</CustomText>
              </View>
            );
          })}
      </View>
      <TextInput
        keyboardType="decimal-pad"
        onChangeText={onChange}
        value={value}
        maxLength={length}
        style={styles.input}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </>
  );
};

export default OTPInput;

const styles = StyleSheet.create({
  input: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0,
  },
  error: {
    fontFamily: fonts.regular,
    fontSize: 15,
    paddingBottom: 10,
    color: colors.red,
    marginTop: 5,
  },
  box: {
    borderColor: colors.black,
    borderBottomWidth: 1,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpInput: {
    height: 50,
    width: 50,
    backgroundColor: colors.background2,
    borderRadius: 10,
    // flex: 1,
    fontFamily: fonts.regular,
    textAlign: 'center',
    color: colors.defaultWhite,
    borderWidth: 1,
    borderColor: colors.defaultWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
