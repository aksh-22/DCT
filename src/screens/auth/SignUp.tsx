import React from 'react';
import {useTranslation} from 'react-i18next';
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
  const {t} = useTranslation();

  const onSignUpPress = () => {};
  const onLoginPress = () => {
    navigation.navigate(AuthStackName.LOGIN);
  };

  return (
    <Container>
      <GradientContainer style={authStyle.container}>
        <CustomText size={30} style={authStyle.textStyle}>
          {t('auth:signUp')}
        </CustomText>
        <CustomInput
          mainContainerStyle={authStyle.inputContainer}
          iconName="person-outline"
          placeholder={t('auth:name')}
        />
        <CustomInput
          mainContainerStyle={authStyle.inputContainer}
          iconName="person-outline"
          placeholder={t('auth:userName')}
        />
        <CustomInput
          mainContainerStyle={authStyle.inputContainer}
          iconName="phone-portrait-outline"
          placeholder={t('auth:mobile')}
        />
        <CustomInput
          mainContainerStyle={authStyle.inputContainer}
          iconName="lock-closed-outline"
          placeholder={t('auth:password')}
          secureTextEntry
        />
        <CustomButton
          style={authStyle.buttonStyle}
          onPress={onSignUpPress}
          title={t('auth:signUp')}
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
