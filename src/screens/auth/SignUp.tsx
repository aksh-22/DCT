import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Keyboard, TouchableOpacity} from 'react-native';
import CustomButton from 'src/components/button/CustomButton';
import CustomText from 'src/components/CustomText';
import CustomInput from 'src/components/Input/CustomInput';
import colors from 'src/constants/colors';
import {AuthStackName} from 'src/constants/routeNames';
import {useRequest} from 'src/constants/useRequest';
import Container from 'src/container/Container';
import GradientContainer from 'src/container/GradientContainer';
import {AuthStackProps} from 'src/routes/types/navigation';
import authStyle from './auth.style';

const SignUp = ({navigation}: AuthStackProps) => {
  const {t} = useTranslation();

  const [name, setName] = useState('Aksh Test 1');
  const [nameError, setNameError] = useState('');
  const [username, setUserName] = useState('akshTest001');
  const [userNameError, setUserNameError] = useState('');
  const [email, setEmail] = useState('test2@dct.com');
  const [emailError, setEmailError] = useState('');
  const [mobile, setMobile] = useState('9999999991');
  const [mobileError, setMobileError] = useState('');
  const [password, setPassword] = useState('12345678');
  const [passwordError, setPasswordError] = useState('');

  const onSignUpPress = () => {
    if (!name) {
      setNameError('Name is required');
    } else if (!username) {
      setUserNameError('User Name is required');
    } else if (!email) {
      setEmailError('Email is required');
    } else if (!mobile) {
      setMobileError('Phone number is required');
    } else if (!password) {
      setPasswordError('Password is required');
    } else {
      Keyboard.dismiss();
      const data = {
        name,
        email,
        password,
        mobile,
        username,
      };
      sendRequest(data);
    }
  };

  const onSignUpSuccess = data => {
    navigation.navigate(AuthStackName.OTP);
  };

  const {isLoading, sendRequest} = useRequest({
    endpoint: 'auth/register',
    onSuccess: onSignUpSuccess,
    requestType: 'POST',
  });

  const onLoginPress = () => {
    navigation.navigate(AuthStackName.LOGIN);
  };

  return (
    <Container barStyle="dark-content" statusBarColor={colors.defaultWhite}>
      <GradientContainer style={authStyle.container}>
        <CustomText size={30} style={authStyle.textStyle}>
          {t('auth:signUp')}
        </CustomText>
        <CustomInput
          value={name}
          mainContainerStyle={authStyle.inputContainer}
          iconName="person-outline"
          placeholder={t('auth:username')}
          onChangeText={txt => {
            setName(txt);
            nameError && setNameError('');
          }}
          errorMessage={nameError}
        />
        <CustomInput
          value={username}
          mainContainerStyle={authStyle.inputContainer}
          iconName="person-outline"
          placeholder={t('auth:username')}
          onChangeText={txt => {
            setUserName(txt);
            userNameError && setUserNameError('');
          }}
          errorMessage={userNameError}
        />
        <CustomInput
          value={email}
          mainContainerStyle={authStyle.inputContainer}
          iconName="mail-outline"
          placeholder={t('auth:email')}
          onChangeText={txt => {
            setEmail(txt);
            emailError && setEmailError('');
          }}
          errorMessage={emailError}
        />
        <CustomInput
          mainContainerStyle={authStyle.inputContainer}
          iconName="phone-portrait-outline"
          placeholder={t('auth:mobile')}
          value={mobile}
          onChangeText={txt => {
            setMobile(txt);
            mobileError && setMobileError('');
          }}
          errorMessage={mobileError}
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
        <CustomButton
          style={authStyle.buttonStyle}
          onPress={onSignUpPress}
          title={t('auth:signUp')}
          isLoading={isLoading}
        />
        <TouchableOpacity onPress={onLoginPress}>
          <CustomText style={authStyle.signUp}>
            {t('auth:haveAccount')} <CustomText>{t('auth:login')}</CustomText>
          </CustomText>
        </TouchableOpacity>
      </GradientContainer>
    </Container>
  );
};

export default SignUp;
