import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ImageBackground, Keyboard, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import Logo from 'src/assets/svg/logo.svg';
import CustomButton from 'src/components/button/CustomButton';
import CustomText from 'src/components/CustomText';
import CustomInput from 'src/components/Input/CustomInput';
import {AuthStackName} from 'src/constants/routeNames';
import {useRequest} from 'src/constants/useRequest';
import Container from 'src/container/Container';
import GradientContainer from 'src/container/GradientContainer';
import {AuthStackProps} from 'src/routes/types/navigation';
import {setToken} from 'src/store/reducer/userReducer';
import authStyle from './auth.style';

const Login = ({navigation}: AuthStackProps) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('test2@dct.com');
  const [nameError, setNameError] = useState('');
  const [password, setPassword] = useState('12345678');
  const [passwordError, setPasswordError] = useState('');

  const {t} = useTranslation();

  const loginPress = () => {
    if (!name) {
      setNameError('User name is required');
    } else if (!password) {
      setPasswordError('Password is required');
    } else {
      Keyboard.dismiss();
      const data = {
        email: name,
        password,
      };
      sendRequest(data);
    }
  };

  const onLoginSuccess = data => {
    const dataToSet = {
      token: data.auth_token,
      user: data.data.user,
    };
    dispatch(setToken(dataToSet));
  };

  const {isLoading, sendRequest} = useRequest({
    endpoint: 'auth/login',
    onSuccess: onLoginSuccess,
    requestType: 'POST',
  });

  const onSignUpPress = () => {
    navigation.navigate(AuthStackName.SIGN_UP);
  };

  const onForgotPasswordPress = () => {
    navigation.navigate(AuthStackName.FORGOT_PASSWORD);
  };

  return (
    <Container>
      <GradientContainer style={authStyle.container}>
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
        <CustomInput
          value={name}
          mainContainerStyle={authStyle.inputContainer}
          iconName="person-outline"
          placeholder={t('auth:userName')}
          onChangeText={txt => {
            setName(txt);
            nameError && setNameError('');
          }}
          errorMessage={nameError}
          customIconName="person"
        />
        <CustomInput
          value={password}
          mainContainerStyle={authStyle.inputContainer}
          iconName="lock-closed-outline"
          placeholder={t('auth:password')}
          secureTextEntry
          onChangeText={txt => {
            setPassword(txt);
            passwordError && setPasswordError('');
          }}
          errorMessage={passwordError}
        />
        <TouchableOpacity onPress={onForgotPasswordPress}>
          <CustomText size={14} color="purple" style={authStyle.forgotPassText}>
            {t('auth:forgot')}
          </CustomText>
        </TouchableOpacity>
        <CustomButton
          isLoading={isLoading}
          style={authStyle.buttonStyle}
          onPress={loginPress}
          title={t('auth:login')}
        />
        <TouchableOpacity onPress={onSignUpPress}>
          <CustomText style={authStyle.signUp}>
            {t('auth:noAccount')}{' '}
            <CustomText size={16} color="purple">
              {t('auth:signUpNow')}
            </CustomText>
          </CustomText>
        </TouchableOpacity>
      </GradientContainer>
    </Container>
  );
};

export default Login;
