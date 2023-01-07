import React from 'react';
import CustomButton from 'src/components/button/CustomButton';
import CustomText from 'src/components/CustomText';
import CustomInput from 'src/components/Input/CustomInput';
import Container from 'src/container/Container';
import GradientContainer from 'src/container/GradientContainer';
import loginStyle from './login.style';

type Props = {};

const Login = ({}: Props) => {
  const loginPress = () => {};
  return (
    <Container>
      <GradientContainer style={loginStyle.container}>
        <CustomText size={30} style={loginStyle.textStyle}>
          Login
        </CustomText>
        <CustomInput
          mainContainer={loginStyle.inputContainer}
          iconName="person-outline"
          placeholder="User Name"
        />
        <CustomInput
          mainContainer={loginStyle.inputContainer}
          iconName="lock-closed-outline"
          placeholder="Password"
          secureTextEntry
        />
        <CustomButton
          style={loginStyle.buttonStyle}
          onPress={loginPress}
          title="Login"
        />
      </GradientContainer>
    </Container>
  );
};

export default Login;
