import React from 'react';
import {useTranslation} from 'react-i18next';
import CustomButton from 'src/components/button/CustomButton';
import CustomText from 'src/components/CustomText';
import CustomInput from 'src/components/Input/CustomInput';
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
        <CustomText size={30} style={authStyle.textStyle}>
          {t('auth:forgot')}
        </CustomText>
        <CustomInput
          mainContainer={authStyle.inputContainer}
          iconName="mail-outline"
          placeholder={t('auth:email')}
        />
        <CustomButton
          style={authStyle.buttonStyle}
          onPress={onSubmitPress}
          title={t('auth:submit')}
        />
      </GradientContainer>
    </Container>
  );
};

export default ForgotPassword;
