import {View, Text} from 'react-native';
import React from 'react';
import Container from 'src/container/Container';
import GradientContainer from 'src/container/GradientContainer';
import colors from 'src/constants/colors';
import authStyle from './auth.style';
import CustomText from 'src/components/CustomText';
import {useTranslation} from 'react-i18next';

type Props = {};

const OTP = (props: Props) => {
  const {t} = useTranslation();

  return (
    <Container barStyle="dark-content" statusBarColor={colors.defaultWhite}>
      <GradientContainer style={authStyle.container}>
        <CustomText size={30} style={authStyle.textStyle}>
          {t('auth:login')}
        </CustomText>
      </GradientContainer>
    </Container>
  );
};

export default OTP;
