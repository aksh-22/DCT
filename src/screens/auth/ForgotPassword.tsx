import React from 'react';
import CustomButton from 'src/components/button/CustomButton';
import CustomText from 'src/components/CustomText';
import CustomInput from 'src/components/Input/CustomInput';
import Container from 'src/container/Container';
import GradientContainer from 'src/container/GradientContainer';
import {AuthStackProps} from 'src/routes/types/navigation';
import authStyle from './auth.style';

const ForgotPassword = ({}: AuthStackProps) => {
  const onSubmitPress = () => {};

  return (
    <Container>
      <GradientContainer style={authStyle.container}>
        <CustomText size={30} style={authStyle.textStyle}>
          Forgot Password
        </CustomText>
        <CustomInput
          mainContainer={authStyle.inputContainer}
          iconName="mail-outline"
          placeholder="Email"
        />
        <CustomButton
          style={authStyle.buttonStyle}
          onPress={onSubmitPress}
          title="Submit"
        />
      </GradientContainer>
    </Container>
  );
};

export default ForgotPassword;
