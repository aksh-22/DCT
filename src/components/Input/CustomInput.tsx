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
import CustomText from '../CustomText';
import VectorIcon from '../IconsFamily';
import inputStyle from './input.style';

type Props = {
  iconName?: string;
  iconFamily?:
    | 'AntDesign'
    | 'Entypo'
    | 'EvilIcons'
    | 'Feather'
    | 'FontAwesome'
    | 'FontAwesome5'
    | 'Fontisto'
    | 'Foundation'
    | 'Ionicons'
    | 'MaterialCommunityIcons'
    | 'MaterialIcons'
    | 'Octicons'
    | 'SimpleLineIcons'
    | 'Zocial'
    | 'FontAwesome5Pro';
  placeholder?: string;
  value?: string | number | any;
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  mainContainerStyle?: ViewStyle;
  label?: string;
  showLabel?: boolean;
  multiline?: boolean;
  inputBoxStyle?: TextStyle;
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
}: Props) => {
  const [secure, setSecure] = useState(secureTextEntry);

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
          style={[inputStyle.inputField, inputBoxStyle]}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          secureTextEntry={secure}
          placeholderTextColor={colors.placeholderColor}
          multiline={multiline}
          textAlignVertical={multiline ? 'top' : 'auto'}
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
