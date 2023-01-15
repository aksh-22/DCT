import React from 'react';
import CustomButton from 'src/components/button/CustomButton';
import CustomText from 'src/components/CustomText';
import CustomInput from 'src/components/Input/CustomInput';
import colors from 'src/constants/colors';
import Container from 'src/container/Container';
import withdrawalStyle from './withdrawal.style';

type Props = {};

const Withdrawal = ({}: Props) => {
  const onPress = () => {};

  return (
    <Container
      barStyle="light-content"
      statusBarColor={colors.buttonColor1}
      contentContainerStyle={withdrawalStyle.container}>
      <CustomText size={30}>Add Withdrawal</CustomText>
      <CustomText removeFontFamily size={18}>
        Available Balance : 10.00
      </CustomText>
      <CustomInput
        iconFamily="FontAwesome5"
        iconName="rupee-sign"
        mainContainerStyle={withdrawalStyle.input}
        placeholder="Amount"
      />
      <CustomText style={withdrawalStyle.noteStyle}>
        Note: Please share your request on whatsapp.(Minimum amount should be
        500.)
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
