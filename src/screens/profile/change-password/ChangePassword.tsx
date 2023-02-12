import React from 'react';
import CustomButton from 'src/components/button/CustomButton';
import CustomHeader from 'src/components/header/CustomHeader';
import CustomInput from 'src/components/Input/CustomInput';
import {margin, padding} from 'src/constants/globalStyles';
import Container from 'src/container/Container';
import {BottomStackProps} from 'src/routes/types/navigation';

const ChangePassword = ({}: BottomStackProps) => {
  return (
    <>
      <CustomHeader isBack heading="Change Password" />
      <Container contentContainerStyle={padding('0', '20')}>
        <CustomInput
          mainContainerStyle={margin(0, 20)}
          placeholder="Old Password"
          customIconName="lock"
        />
        <CustomInput
          mainContainerStyle={margin(0, 20)}
          placeholder="New Password"
          customIconName="lock"
        />
        <CustomInput
          mainContainerStyle={margin(0, 20)}
          placeholder="Confirm Password"
          customIconName="lock"
        />
        <CustomButton title="Save" width="40%" />
      </Container>
    </>
  );
};

export default ChangePassword;
