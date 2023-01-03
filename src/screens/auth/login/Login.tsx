import {View, Text} from 'react-native';
import React from 'react';
import Container from 'src/container/Container';
import {fonts} from 'src/constants/fonts';
import LinearGradient from 'react-native-linear-gradient';
import colors from 'src/constants/colors';

type Props = {};

const Login = ({}: Props) => {
  return (
    <Container>
      <LinearGradient
        colors={[colors.defaultWhite, colors.primaryColor]}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25, fontFamily: fonts.regular}}>Login</Text>
      </LinearGradient>
    </Container>
  );
};

export default Login;
