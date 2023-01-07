import React from 'react';
import CustomText from 'src/components/CustomText';
import CustomInput from 'src/components/Input/CustomInput';
import {fonts} from 'src/constants/fonts';
import Container from 'src/container/Container';
import GradientContainer from 'src/container/GradientContainer';
import loginStyle from './login.style';

type Props = {};

const Login = ({}: Props) => {
  return (
    <Container>
      <GradientContainer style={loginStyle.container}>
        <CustomText style={{fontSize: 25, fontFamily: fonts.regular}}>
          Login
        </CustomText>
        <CustomInput iconName="help" placeholder="User Name" />
      </GradientContainer>
    </Container>
  );
};

export default Login;
