import React from 'react';
import {Text} from 'react-native';
import {fonts} from 'src/constants/fonts';
import Container from 'src/container/Container';
import GradientContainer from 'src/container/GradientContainer';
import loginStyle from './login.style';

type Props = {};

const Login = ({}: Props) => {
  return (
    <Container>
      <GradientContainer style={loginStyle.container}>
        <Text style={{fontSize: 25, fontFamily: fonts.regular}}>Login</Text>
      </GradientContainer>
    </Container>
  );
};

export default Login;
