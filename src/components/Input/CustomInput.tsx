import React, {useState} from 'react';
import {KeyboardTypeOptions, TextInput, View, ViewStyle} from 'react-native';
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
  mainContainer?: ViewStyle;
};

const CustomInput = ({
  iconName,
  iconFamily,
  placeholder,
  value,
  keyboardType,
  onChangeText,
  secureTextEntry,
  mainContainer,
}: Props) => {
  const [secure, setSecure] = useState(secureTextEntry);

  const onEyePress = () => {
    setSecure(prev => !prev);
  };

  return (
    <View style={[inputStyle.mainContainer, mainContainer]}>
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
          secureTextEntry={secure}
        />
        {secureTextEntry && (
          <VectorIcon
            style={inputStyle.icon}
            name={secure ? 'eye-outline' : 'eye-off-outline'}
            onPress={onEyePress}
          />
        )}
      </View>
    </View>
  );
};

export default CustomInput;
