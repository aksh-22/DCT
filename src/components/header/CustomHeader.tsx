import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import colors from 'src/constants/colors';
import CustomText from '../CustomText';
import VectorIcon from '../IconsFamily';
import headerStyle from './header.style';

type Props = {
  heading?: string;
  isBack?: boolean;
};

const CustomHeader = ({heading, isBack}: Props) => {
  // const {colors} = useTheme();
  const {goBack} = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={headerStyle.header}>
      <TouchableOpacity onPress={goBack} disabled={!isBack}>
        <VectorIcon
          name="chevron-back-outline"
          color={isBack ? colors.defaultWhite : colors.buttonColor1}
          size={28}
        />
      </TouchableOpacity>
      {heading && (
        <CustomText style={[headerStyle.heading, {color: colors.defaultWhite}]}>
          {heading}
        </CustomText>
      )}
      <View style={headerStyle.rightIconArea}>
        {/* <TouchableOpacity style={headerStyle.icon}>
          <VectorIcon
            name="wallet-outline"
            color={colors.defaultWhite}
            size={20}
          />
          <CustomText size={10} style={headerStyle.price}>
            20.00
          </CustomText>
        </TouchableOpacity> */}
        <TouchableOpacity>
          <VectorIcon
            name="notifications-outline"
            color={colors.defaultWhite}
            size={28}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeader;
