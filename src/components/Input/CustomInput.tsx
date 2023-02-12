import React, {useState} from 'react';
import {
  KeyboardTypeOptions,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {} from 'react-native-vector-icons';
import colors from 'src/constants/colors';
import globalStyles from 'src/constants/globalStyles';
import {customFontFamilyType, fontFamilyType} from 'typings/icon-family-tyoe';
import CustomIcon from '../CustomIcon';
import CustomText from '../CustomText';
import VectorIcon from '../IconsFamily';
import inputStyle from './input.style';

type Props = {
  iconName?: string;
  iconFamily?: fontFamilyType;
  placeholder?: string;
  value?: string | number | any;
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  mainContainerStyle?: ViewStyle;
  mainIconStyle?: ViewStyle;
  label?: string;
  showLabel?: boolean;
  multiline?: boolean;
  inputBoxStyle?: TextStyle;
  errorMessage?: string;
  editable?: boolean;
  customIconName?: customFontFamilyType;
};

const CustomInput = ({
  iconName,
  iconFamily,
  placeholder,
  value,
  keyboardType,
  onChangeText,
  secureTextEntry,
  mainContainerStyle,
  label,
  showLabel,
  multiline,
  inputBoxStyle,
  errorMessage,
  editable,
  customIconName,
  mainIconStyle,
}: Props) => {
  const [secure, setSecure] = useState(secureTextEntry);

  console.log('mainIconStyle', mainIconStyle);

  const onEyePress = () => {
    setSecure(prev => !prev);
  };

  return (
    <View style={[inputStyle.mainContainer, mainContainerStyle]}>
      {label || showLabel ? (
        <CustomText style={globalStyles.mb_5}>
          {label ?? placeholder}
        </CustomText>
      ) : null}
      <View
        style={[
          inputStyle.subContainer,
          {borderColor: errorMessage ? colors.red : colors.borderColor},
        ]}>
        {iconName && (
          <View style={[inputStyle.mainIcon, mainIconStyle]}>
            <VectorIcon
              family={iconFamily}
              name={iconName}
              color={errorMessage ? colors.red : colors.defaultWhite}
              size={15}
            />
          </View>
        )}
        {customIconName && (
          <View style={[inputStyle.mainIcon, mainIconStyle]}>
            <CustomIcon name={customIconName} />
          </View>
        )}
        <TextInput
          value={value}
          placeholder={placeholder}
          style={[
            inputStyle.inputField,
            {color: errorMessage ? colors.red : colors.defaultWhite},
            inputBoxStyle,
          ]}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          secureTextEntry={secure}
          placeholderTextColor={colors.placeholderColor}
          multiline={multiline}
          textAlignVertical={multiline ? 'top' : 'auto'}
          editable={editable}
        />
        {secureTextEntry && (
          <VectorIcon
            style={inputStyle.icon}
            name={secure ? 'eye-outline' : 'eye-off-outline'}
            onPress={onEyePress}
            color={colors.defaultWhite}
          />
        )}
      </View>
      {errorMessage ? (
        <CustomText style={inputStyle.error}>{errorMessage}</CustomText>
      ) : null}
    </View>
  );
};

export default CustomInput;
