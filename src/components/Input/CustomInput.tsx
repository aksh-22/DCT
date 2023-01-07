import React from 'react';
import {KeyboardTypeOptions, TextInput, View} from 'react-native';
import {} from 'react-native-vector-icons';
import VectorIcon from '../IconsFamily';
import inputStyle from './input.style';

type Props = {
  iconName?: string;
  iconFamily?: string | any;
  placeholder?: string;
  value?: string | number | any;
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
};

const CustomInput = ({
  iconName,
  iconFamily,
  placeholder,
  value,
  keyboardType,
  onChangeText,
  secureTextEntry,
}: Props) => {
  return (
    <View style={inputStyle.mainContainer}>
      <View style={inputStyle.subContainer}>
        {iconName && (
          <VectorIcon
            style={inputStyle.icon}
            family={iconFamily}
            name={iconName}
          />
        )}
        <TextInput
          value={value}
          placeholder={placeholder}
          style={inputStyle.inputField}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};

export default CustomInput;
