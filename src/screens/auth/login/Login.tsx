import React from 'react';
import {useTranslation} from 'react-i18next';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import Logo from 'src/assets/svg/logo.svg';
import CustomButton from 'src/components/button/CustomButton';
import CustomText from 'src/components/CustomText';
import CustomInput from 'src/components/Input/CustomInput';
import globalStyles, {margin, padding} from 'src/constants/globalStyles';
import Container from 'src/container/Container';
import {AuthStackProps} from 'src/routes/types/navigation';
import authStyle from '../auth.style';
import useLogin from './useLogin';

const Login = ({navigation}: AuthStackProps) => {
  const {t} = useTranslation();

  const {
    isLoading,
    loginPress,
    name,
    nameError,
    onChangeName,
    onChangePassword,
    onForgotPasswordPress,
    onSignUpPress,
    password,
    passwordError,
  } = useLogin({navigate: navigation.navigate});

  return (
    <Container contentContainerStyle={globalStyles.container}>
      <View style={authStyle.container}>
        <ImageBackground
          source={require('src/assets/img/login.png')}
          resizeMode="contain"
          style={authStyle.loginImage}>
          <Logo />
          <CustomText size={47}>{t('common:dct')}</CustomText>
        </ImageBackground>
        <CustomText size={30} center>
          {t('auth:login')}
        </CustomText>
        <CustomText size={15} center>
          {t('auth:enter')}
        </CustomText>
        <View style={margin(20)}>
          <CustomInput
            value={name}
            mainContainerStyle={authStyle.inputContainer}
            iconName="person-outline"
            placeholder={t('auth:userName')}
            onChangeText={onChangeName}
            errorMessage={nameError}
            customIconName="person"
          />
          <CustomInput
            value={password}
            mainContainerStyle={authStyle.inputContainer}
            customIconName="lock"
            placeholder={t('auth:password')}
            secureTextEntry
            onChangeText={onChangePassword}
            errorMessage={passwordError}
          />
        </View>
        <TouchableOpacity onPress={onForgotPasswordPress} style={margin(0, 10)}>
          <CustomText size={14} color="purple" style={authStyle.forgotPassText}>
            {t('auth:forgot')}
          </CustomText>
        </TouchableOpacity>
        <CustomButton
          isLoading={isLoading}
          style={margin(20, 40)}
          onPress={loginPress}
          title={t('auth:login')}
        />
        <TouchableOpacity onPress={onSignUpPress} style={padding(0, 30)}>
          <CustomText style={authStyle.signUp} size={16}>
            {t('auth:noAccount')}
            <CustomText size={16} color="purple">
              {t('auth:signUpNow')}
            </CustomText>
          </CustomText>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Login;
