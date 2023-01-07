import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import CustomButton from 'src/components/button/CustomButton';
import CustomText from 'src/components/CustomText';
import CustomInput from 'src/components/Input/CustomInput';
import {AuthStackName} from 'src/constants/routeNames';
import Container from 'src/container/Container';
import GradientContainer from 'src/container/GradientContainer';
import {AuthStackProps} from 'src/routes/types/navigation';
import {setIsLoggedIn} from 'src/store/reducer/userReducer';
import authStyle from './auth.style';

const Login = ({navigation}: AuthStackProps) => {
  const dispatch = useDispatch();

  const loginPress = () => {
    dispatch(setIsLoggedIn(true));
  };

  const onSignUpPress = () => {
    navigation.navigate(AuthStackName.SIGN_UP);
  };

  const onForgotPasswordPress = () => {
    navigation.navigate(AuthStackName.FORGOT_PASSWORD);
  };

  return (
    <Container>
      <GradientContainer style={authStyle.container}>
        <CustomText size={30} style={authStyle.textStyle}>
          Login
        </CustomText>
        <CustomInput
          mainContainer={authStyle.inputContainer}
          iconName="person-outline"
          placeholder="User Name"
        />
        <CustomInput
          mainContainer={authStyle.inputContainer}
          iconName="lock-closed-outline"
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity onPress={onForgotPasswordPress}>
          <CustomText style={authStyle.forgotPassText}>
            Forgot Password
          </CustomText>
        </TouchableOpacity>
        <CustomButton
          style={authStyle.buttonStyle}
          onPress={loginPress}
          title="Login"
        />
        <TouchableOpacity onPress={onSignUpPress}>
          <CustomText style={authStyle.signUp}>
            Don't have an account? <CustomText>Sign Up</CustomText>{' '}
          </CustomText>
        </TouchableOpacity>
      </GradientContainer>
    </Container>
  );
};

export default Login;
