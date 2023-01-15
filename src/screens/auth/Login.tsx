import React from 'react';
import {useTranslation} from 'react-i18next';
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

  const {t} = useTranslation();

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
          {t('auth:login')}
        </CustomText>
        <CustomInput
          mainContainerStyle={authStyle.inputContainer}
          iconName="person-outline"
          placeholder={t('auth:userName')}
        />
        <CustomInput
          mainContainerStyle={authStyle.inputContainer}
          iconName="lock-closed-outline"
          placeholder={t('auth:password')}
          secureTextEntry
        />
        <TouchableOpacity onPress={onForgotPasswordPress}>
          <CustomText style={authStyle.forgotPassText}>
            {t('auth:forgot')}
          </CustomText>
        </TouchableOpacity>
        <CustomButton
          style={authStyle.buttonStyle}
          onPress={loginPress}
          title={t('auth:login')}
        />
        <TouchableOpacity onPress={onSignUpPress}>
          <CustomText style={authStyle.signUp}>
            {t('auth:noAccount')} <CustomText>{t('auth:signUp')}</CustomText>
          </CustomText>
        </TouchableOpacity>
      </GradientContainer>
    </Container>
  );
};

export default Login;
