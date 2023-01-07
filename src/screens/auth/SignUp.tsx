import React from 'react';
import {TouchableOpacity} from 'react-native';
import CustomButton from 'src/components/button/CustomButton';
import CustomText from 'src/components/CustomText';
import CustomInput from 'src/components/Input/CustomInput';
import {AuthStackName} from 'src/constants/routeNames';
import Container from 'src/container/Container';
import GradientContainer from 'src/container/GradientContainer';
import {AuthStackProps} from 'src/routes/types/navigation';
import authStyle from './auth.style';

const SignUp = ({navigation}: AuthStackProps) => {
  const onSignUpPress = () => {};
  const onLoginPress = () => {
    navigation.navigate(AuthStackName.LOGIN);
  };

  return (
    <Container>
      <GradientContainer style={authStyle.container}>
        <CustomText size={30} style={authStyle.textStyle}>
          Sign Up
        </CustomText>
        <CustomInput
          mainContainer={authStyle.inputContainer}
          iconName="person-outline"
          placeholder="Name"
        />
        <CustomInput
          mainContainer={authStyle.inputContainer}
          iconName="person-outline"
          placeholder="User Name"
        />
        <CustomInput
          mainContainer={authStyle.inputContainer}
          iconName="phone-portrait-outline"
          placeholder="Mobile Number"
        />
        <CustomInput
          mainContainer={authStyle.inputContainer}
          iconName="lock-closed-outline"
          placeholder="Password"
          secureTextEntry
        />
        <CustomButton
          style={authStyle.buttonStyle}
          onPress={onSignUpPress}
          title="Sign Up"
        />
        <TouchableOpacity onPress={onLoginPress}>
          <CustomText style={authStyle.signUp}>
            Already have an account? <CustomText>Login</CustomText>
          </CustomText>
        </TouchableOpacity>
      </GradientContainer>
    </Container>
  );
};

export default SignUp;
