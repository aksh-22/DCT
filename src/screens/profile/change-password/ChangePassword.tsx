import React from 'react';
import CustomButton from 'src/components/button/CustomButton';
import CustomHeader from 'src/components/header/CustomHeader';
import CustomInput from 'src/components/Input/CustomInput';
import {margin, padding} from 'src/constants/globalStyles';
import Container from 'src/container/Container';
import {BottomStackProps} from 'src/routes/types/navigation';
import usePasswordChange from './usePasswordChange';

const ChangePassword = ({navigation}: BottomStackProps) => {
  const {
    newPassword,
    oldPassword,
    confirmPassword,
    onNewPasswordChange,
    onOldPasswordChange,
    onConfirmPasswordChange,
    isLoading,
    onUpdate,
  } = usePasswordChange({goBack: navigation.goBack});

  return (
    <>
      <CustomHeader isBack heading="Change Password" />
      <Container contentContainerStyle={padding('0', '20')}>
        <CustomInput
          mainContainerStyle={margin(0, 20)}
          placeholder="Old Password"
          customIconName="lock"
          value={oldPassword.value}
          errorMessage={oldPassword.error}
          onChangeText={onOldPasswordChange}
        />
        <CustomInput
          mainContainerStyle={margin(0, 20)}
          placeholder="New Password"
          customIconName="lock"
          value={newPassword.value}
          errorMessage={newPassword.error}
          onChangeText={onNewPasswordChange}
        />
        <CustomInput
          mainContainerStyle={margin(0, 20)}
          placeholder="Confirm Password"
          customIconName="lock"
          value={confirmPassword.value}
          errorMessage={confirmPassword.error}
          onChangeText={onConfirmPasswordChange}
        />
        <CustomButton
          onPress={onUpdate}
          isLoading={isLoading}
          title="Save"
          width="40%"
        />
      </Container>
    </>
  );
};

export default ChangePassword;
