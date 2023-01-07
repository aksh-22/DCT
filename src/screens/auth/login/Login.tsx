import React from 'react';
import CustomText from 'src/components/CustomText';
import CustomInput from 'src/components/Input/CustomInput';
import Container from 'src/container/Container';
import GradientContainer from 'src/container/GradientContainer';
import loginStyle from './login.style';

type Props = {};

const Login = ({}: Props) => {
  return (
    <Container>
      <GradientContainer style={loginStyle.container}>
        <CustomText>Login</CustomText>
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
      </GradientContainer>
    </Container>
  );
};

export default Login;
