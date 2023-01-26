import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import CustomText from 'src/components/CustomText';
import VectorIcon from 'src/components/IconsFamily';
import colors from 'src/constants/colors';
import globalStyles from 'src/constants/globalStyles';
import homeStyle from './home.style';

type Props = {
  customText: string;
};

const Deposit = ({customText}: Props) => {
  return (
    <View style={homeStyle.depositBox}>
      {customText ? (
        <CustomText size={18}>{customText}</CustomText>
      ) : (
        <ActivityIndicator />
      )}
      <View style={globalStyles.centerAlign}>
        <VectorIcon name="logo-whatsapp" color={colors.whatsAppGreen} />
        <CustomText style={homeStyle.phoneText} size={16}>
          +91-1234567890
        </CustomText>
      </View>
    </View>
  );
};

export default Deposit;
