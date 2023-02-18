import React from 'react';
import {View} from 'react-native';
import CustomButton from 'src/components/button/CustomButton';
import CustomText from 'src/components/CustomText';
import CustomInput from 'src/components/Input/CustomInput';
import globalStyles, {margin} from 'src/constants/globalStyles';
import Container from 'src/container/Container';
import withdrawalStyle from './withdrawal.style';

type Props = {};

const Withdrawal = ({}: Props) => {
  const onPress = () => {};

  return (
    <Container contentContainerStyle={withdrawalStyle.container}>
      <CustomText size={17}>Add Withdrawal</CustomText>
      <View style={globalStyles.row_spaceBetween}>
        <CustomText size={17} color="active">
          Available Balance :
        </CustomText>
        <CustomText size={17} color="active">
          10.00
        </CustomText>
      </View>
      <CustomInput
        iconFamily="FontAwesome5"
        iconName="rupee-sign"
        mainContainerStyle={withdrawalStyle.input}
        placeholder="Amount"
      />
      <CustomText style={margin(20)} color="placeholderColor">
        Note: Please share your request on whatsapp.
      </CustomText>
      <CustomText color="placeholderColor">
        (Minimum amount should be 500.)
      </CustomText>
      <CustomButton
        style={withdrawalStyle.button}
        title="Proceed"
        onPress={onPress}
      />
    </Container>
  );
};

export default Withdrawal;
