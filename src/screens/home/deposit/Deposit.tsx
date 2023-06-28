import React from 'react';
import {Linking, Pressable, View} from 'react-native';
import DepositSvg from 'src/assets/svg/homeDeposit.svg';
import CustomIcon from 'src/components/CustomIcon';
import CustomText from 'src/components/CustomText';
import {margin} from 'src/constants/globalStyles';
import depositStyle from './deposit.style';

const SIZE = 70;

type Props = {
  whatsapp: string;
  mobile: string;
};

const Deposit = ({mobile, whatsapp}: Props) => {
  return (
    <Pressable
      onPress={() => {
        Linking.openURL(whatsapp);
      }}
      style={depositStyle.depositBox}>
      <DepositSvg
        width={'100%'}
        style={depositStyle.rectangleIcon}
        height={113}
      />
      <CustomIcon
        name="Whatsapp"
        fill="#fff"
        style={depositStyle.whiteWhatsapp}
        height={SIZE}
        width={SIZE}
      />
      <View style={depositStyle.textArea}>
        <CustomIcon name="Whatsapp" />
        <View style={margin(0, 0, 10, 0)}>
          <CustomText size={12}>Click to deposit point</CustomText>
          <CustomText color="black">{mobile}</CustomText>
        </View>
      </View>
    </Pressable>
  );
};

export default Deposit;
