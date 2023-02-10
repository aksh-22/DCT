import React from 'react';
import {useTranslation} from 'react-i18next';
import CustomButton from 'src/components/button/CustomButton';
import CustomText from 'src/components/CustomText';
import CustomInput from 'src/components/Input/CustomInput';
import {margin} from 'src/constants/globalStyles';
import Container from 'src/container/Container';
import GradientContainer from 'src/container/GradientContainer';
import {AuthStackProps} from 'src/routes/types/navigation';
import authStyle from './auth.style';

const ForgotPassword = ({}: AuthStackProps) => {
  const {t} = useTranslation();

  const onSubmitPress = () => {};

  return (
    <Container>
      <GradientContainer style={authStyle.container}>
        <CustomText size={30} center style={margin(20)}>
          {t('auth:forgot')}
        </CustomText>
        <CustomText size={15} center style={margin(10)}>
          Enter your email address to get a code to create a new password.
        </CustomText>
        <CustomInput
          mainContainerStyle={margin(40)}
          iconName="mail-outline"
          placeholder={t('auth:email')}
        />
        <CustomButton
          onPress={onSubmitPress}
          title={t('auth:submit')}
          style={margin(40)}
        />
      </GradientContainer>
    </Container>
  );
};

export default ForgotPassword;
