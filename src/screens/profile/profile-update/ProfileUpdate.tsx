import React from 'react';
import CustomButton from 'src/components/button/CustomButton';
import CustomHeader from 'src/components/header/CustomHeader';
import CustomInput from 'src/components/Input/CustomInput';
import {margin, padding} from 'src/constants/globalStyles';
import Container from 'src/container/Container';
import profileStyle from './../profile.style';
import useProfileUpdate from './useProfileUpdate';
type Props = {};

const ProfileUpdate = ({}: Props) => {
  const {
    email,
    mobile,
    name,
    userName,
    onEmailChange,
    onMobileChange,
    onNameChange,
    isLoading,
    onUpdate,
  } = useProfileUpdate();

  return (
    <>
      <CustomHeader isBack heading="Update Profile" />
      <Container contentContainerStyle={padding('0', '20')}>
        <CustomInput
          mainContainerStyle={profileStyle.input}
          placeholder="Name"
          value={email?.value}
          customIconName="name"
          onChangeText={onEmailChange}
        />
        <CustomInput
          mainContainerStyle={profileStyle.input}
          placeholder="Email"
          value={email?.value}
          iconName="mail-outline"
          onChangeText={onMobileChange}
        />
        <CustomInput
          mainContainerStyle={profileStyle.input}
          placeholder="Mobile"
          value={mobile?.value}
          customIconName="mobile"
          onChangeText={onNameChange}
        />
        <CustomInput
          mainContainerStyle={profileStyle.input}
          placeholder="Referral Code"
          value={name?.value}
          customIconName="person"
        />
        <CustomButton
          isLoading={isLoading}
          title="Update Profile"
          style={margin(40)}
          onPress={onUpdate}
        />
      </Container>
    </>
  );
};

export default ProfileUpdate;
