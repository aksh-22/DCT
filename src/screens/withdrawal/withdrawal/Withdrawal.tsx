import React from 'react';
import {View} from 'react-native';
import CustomButton from 'src/components/button/CustomButton';
import CustomText from 'src/components/CustomText';
import CustomInput from 'src/components/Input/CustomInput';
import globalStyles, {margin} from 'src/constants/globalStyles';
import Container from 'src/container/Container';
import useAddWithdrawal from './useWithdrawal';
import withdrawalStyle from './withdrawal.style';

type Props = {};

const Withdrawal = ({}: Props) => {
  const {onChange, amount, balance, onSubmit, isLoading, amountError} =
    useAddWithdrawal();

  return (
    <Container contentContainerStyle={withdrawalStyle.container}>
      <CustomText size={17}>Add Withdrawal</CustomText>
      <View style={globalStyles.row_spaceBetween}>
        <CustomText size={17} color="active">
          Available Balance :
        </CustomText>
        <CustomText size={17} color="active">
          {balance}
        </CustomText>
      </View>
      <CustomInput
        value={amount}
        iconFamily="FontAwesome5"
        iconName="rupee-sign"
        mainContainerStyle={withdrawalStyle.input}
        placeholder="Amount"
        onChangeText={onChange}
        keyboardType="decimal-pad"
        errorMessage={amountError}
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
        onPress={onSubmit}
        isLoading={isLoading}
      />
    </Container>
  );
};

export default Withdrawal;
