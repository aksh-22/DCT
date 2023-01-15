import React from 'react';
import CustomHeader from 'src/components/header/CustomHeader';
import CustomInput from 'src/components/Input/CustomInput';
import globalStyles from 'src/constants/globalStyles';
import Container from 'src/container/Container';
import profileStyle from './profile.style';

type Props = {};

const Profile = ({}: Props) => {
  return (
    <>
      <CustomHeader isBack heading="Profile" />
      <Container contentContainerStyle={globalStyles.pd_20}>
        <CustomInput
          mainContainerStyle={profileStyle.input}
          showLabel
          label="Name"
        />
        <CustomInput
          mainContainerStyle={profileStyle.input}
          showLabel
          label="UserName"
        />
        <CustomInput
          mainContainerStyle={profileStyle.input}
          showLabel
          label="Mobile"
        />
        <CustomInput
          mainContainerStyle={profileStyle.input}
          showLabel
          label="Referral Code"
        />
      </Container>
    </>
  );
};

export default Profile;
