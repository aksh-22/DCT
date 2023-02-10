import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import CustomButton from 'src/components/button/CustomButton';
import CustomText from 'src/components/CustomText';
import {showMessage} from 'src/components/MessageModal';
import OTPInput from 'src/components/OTPInput';
import colors from 'src/constants/colors';
import {margin} from 'src/constants/globalStyles';
import {useRequest} from 'src/constants/useRequest';
import Container from 'src/container/Container';
import GradientContainer from 'src/container/GradientContainer';
import {AuthStackProps} from 'src/routes/types/navigation';
import {setToken} from 'src/store/reducer/userReducer';
import authStyle from './auth.style';

const OTP = ({route}: AuthStackProps) => {
  console.log('route', route.params);
  const params: any = route.params;
  const {t} = useTranslation();
  const [otpVal, setOtpVal] = useState('');
  const [otpValError, setOtpValError] = useState('');

  const dispatch = useDispatch();

  const onVerifySuccess = data => {
    console.log('data', JSON.stringify(data, null, 2));
    const dataToSet = {
      token: data.auth_token,
      user: data.data.user,
    };
    dispatch(setToken(dataToSet));
  };

  const onResendSuccess = () => {};

  const {isLoading, sendRequest} = useRequest({
    endpoint: 'auth/verify-otp',
    onSuccess: onVerifySuccess,
    requestType: 'POST',
  });

  const {isLoading: resendLoading, sendRequest: resendSendRequest} = useRequest(
    {
      endpoint: 'auth/resend-otp',
      onSuccess: onResendSuccess,
      requestType: 'POST',
    },
  );

  const onSubmitPress = () => {
    if (otpVal.length !== 6) {
      setOtpValError('Invalid OTP');
    } else {
      const data = {
        mobile: params.mobile,
        otp: otpVal,
      };
      sendRequest(data);
    }
  };

  const onResendOtpPress = () => {
    showMessage({message: 'Coming soon', modalType: 'Success'});
    resendSendRequest();
  };

  return (
    <Container>
      <GradientContainer style={authStyle.container}>
        <CustomText size={30} center style={margin(0, 30)}>
          {t('auth:otp')}
        </CustomText>
        <OTPInput
          onChange={txt => {
            console.log('txt', txt);
            setOtpVal(txt);
            otpValError && setOtpValError('');
          }}
          error={otpValError}
          value={otpVal}
          LENGTH={6}
          inputStyle={authStyle.otpInputStyle}
        />
        <CustomButton
          isLoading={isLoading}
          title={t('auth:submit')}
          onPress={onSubmitPress}
          style={margin(30)}
        />
        <TouchableOpacity
          onPress={onResendOtpPress}
          style={authStyle.resendText}>
          {resendLoading ? (
            <ActivityIndicator color={colors.buttonColor1} />
          ) : (
            <CustomText>{t('auth:resend')}</CustomText>
          )}
        </TouchableOpacity>
      </GradientContainer>
    </Container>
  );
};

export default OTP;
