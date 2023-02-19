import React from 'react';
import {View} from 'react-native';
import DepositSvg from 'src/assets/svg/homeDeposit.svg';
import CustomIcon from 'src/components/CustomIcon';
import CustomText from 'src/components/CustomText';
import {margin} from 'src/constants/globalStyles';
import homeStyle from './home.style';

const SIZE = 70;

const Deposit = () => {
  return (
    <View style={homeStyle.depositBox}>
      <DepositSvg width={'100%'} style={homeStyle.rectangleIcon} height={113} />
      <CustomIcon
        name="Whatsapp"
        fill="#fff"
        style={homeStyle.whiteWhatsapp}
        height={SIZE}
        width={SIZE}
      />
      <View style={homeStyle.textArea}>
        <CustomIcon name="Whatsapp" />
        <View style={margin(0, 0, 10, 0)}>
          <CustomText size={12}>Click to deposit point</CustomText>
          <CustomText color="black">+91-1234567890</CustomText>
        </View>
      </View>
    </View>
  );
};

export default Deposit;
