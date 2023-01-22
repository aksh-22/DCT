import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import CustomButton from 'src/components/button/CustomButton';
import CustomText from 'src/components/CustomText';
import CustomInput from 'src/components/Input/CustomInput';
import colors from 'src/constants/colors';
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
  const [password, setPassword] = useState('12345678');

  const {t} = useTranslation();

  const loginPress = () => {
    const data = {
      email: name,
      password,
    };
    sendRequest(data);
  };

  const onSignUpPress = () => {
    navigation.navigate(AuthStackName.SIGN_UP);
  };

  const onForgotPasswordPress = () => {
    navigation.navigate(AuthStackName.FORGOT_PASSWORD);
  };

  const onLoginSuccess = data => {
    console.log('data', JSON.stringify(data, null, 2));
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

  return (
    <Container barStyle="dark-content" statusBarColor={colors.defaultWhite}>
      <GradientContainer style={authStyle.container}>
        <CustomText size={30} style={authStyle.textStyle}>
          {t('auth:login')}
        </CustomText>
        <CustomInput
          value={name}
          mainContainerStyle={authStyle.inputContainer}
          iconName="person-outline"
          placeholder={t('auth:userName')}
        />
        <CustomInput
          value={password}
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
          isLoading={isLoading}
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
