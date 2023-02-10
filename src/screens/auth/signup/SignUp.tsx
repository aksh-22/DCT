import React from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity, View} from 'react-native';
import CustomButton from 'src/components/button/CustomButton';
import CustomText from 'src/components/CustomText';
import CustomInput from 'src/components/Input/CustomInput';
import globalStyles, {margin, padding} from 'src/constants/globalStyles';
import Container from 'src/container/Container';
import {AuthStackProps} from 'src/routes/types/navigation';
import authStyle from '../auth.style';
import useSignUp from './useSignUp';

const SignUp = ({navigation}: AuthStackProps) => {
  const {t} = useTranslation();

  const {
    details: {email, mobile, name, password, username},
    error: {emailError, mobileError, nameError, userNameError, passwordError},
    isLoading,
    onChangeEmail,
    onChangeMobile,
    onChangeName,
    onChangePassword,
    onChangeUserName,
    onLoginPress,
    onSignUpPress,
  } = useSignUp({navigate: navigation.navigate});

  return (
    <Container contentContainerStyle={globalStyles.container}>
      <View style={authStyle.container}>
        <CustomText size={30} center style={margin(30)}>
          {t('auth:signUp')}
        </CustomText>
        <CustomText size={15} center style={margin(10)}>
          {t('auth:belowDetails')}
        </CustomText>
        <View style={margin(50)}>
          <CustomInput
            value={name}
            mainContainerStyle={authStyle.inputContainer}
            customIconName="name"
            placeholder={t('auth:username')}
            onChangeText={onChangeName}
            errorMessage={nameError}
          />
          <CustomInput
            value={username}
            mainContainerStyle={authStyle.inputContainer}
            customIconName="person"
            placeholder={t('auth:username')}
            onChangeText={onChangeUserName}
            errorMessage={userNameError}
          />
          <CustomInput
            value={email}
            mainContainerStyle={authStyle.inputContainer}
            iconName="mail-outline"
            placeholder={t('auth:email')}
            onChangeText={onChangeEmail}
            errorMessage={emailError}
          />
          <CustomInput
            mainContainerStyle={authStyle.inputContainer}
            customIconName="mobile"
            placeholder={t('auth:mobile')}
            value={mobile}
            onChangeText={onChangeMobile}
            errorMessage={mobileError}
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
        <CustomButton
          style={margin(40)}
          onPress={onSignUpPress}
          title={t('auth:signUp')}
          isLoading={isLoading}
        />
      </View>
      <TouchableOpacity onPress={onLoginPress} style={padding(0, 30)}>
        <CustomText style={authStyle.signUp}>
          {t('auth:haveAccount')}
          <CustomText color="purple">{t('auth:login')}</CustomText>
        </CustomText>
      </TouchableOpacity>
    </Container>
  );
};

export default SignUp;
