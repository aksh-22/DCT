import React from 'react';
import CustomButton from 'src/components/button/CustomButton';
import CustomHeader from 'src/components/header/CustomHeader';
import CustomInput from 'src/components/Input/CustomInput';
import {margin, padding} from 'src/constants/globalStyles';
import Container from 'src/container/Container';
import {BottomStackProps} from 'src/routes/types/navigation';
import profileStyle from './../profile.style';
import useProfileUpdate from './useProfileUpdate';

const ProfileUpdate = ({navigation}: BottomStackProps) => {
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
    onUserNameChange,
  } = useProfileUpdate({goBack: navigation.goBack});

  return (
    <>
      <CustomHeader isBack heading="Update Profile" />
      <Container contentContainerStyle={padding('0', '20')}>
        <CustomInput
          mainContainerStyle={profileStyle.input}
          placeholder="Name"
          value={name?.value}
          errorMessage={name?.error}
          customIconName="name"
          onChangeText={onNameChange}
        />
        <CustomInput
          mainContainerStyle={profileStyle.input}
          placeholder="Email"
          value={email?.value}
          errorMessage={email?.error}
          iconName="mail-outline"
          onChangeText={onEmailChange}
        />
        <CustomInput
          mainContainerStyle={profileStyle.input}
          placeholder="Mobile"
          value={mobile?.value}
          errorMessage={mobile?.error}
          customIconName="mobile"
          onChangeText={onMobileChange}
        />
        <CustomInput
          mainContainerStyle={profileStyle.input}
          placeholder="User Name"
          value={userName?.value}
          errorMessage={userName?.error}
          customIconName="person"
          onChangeText={onUserNameChange}
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
