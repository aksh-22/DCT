import React from 'react';
import CustomHeader from 'src/components/header/CustomHeader';
import CustomInput from 'src/components/Input/CustomInput';
import globalStyles from 'src/constants/globalStyles';
import Container from 'src/container/Container';
import profileStyle from './../profile.style';
import {useAppSelector} from 'src/utils/reducer';
type Props = {};

const ProfileUpdate = ({}: Props) => {
  const user = useAppSelector(state => state.userReducer.user);

  return (
    <>
      <CustomHeader isBack />
      <Container contentContainerStyle={globalStyles.pd_20}>
        <CustomInput
          mainContainerStyle={profileStyle.input}
          showLabel
          label="Name"
          value={user.name}
          editable={false}
          customIconName="name"
        />
        <CustomInput
          mainContainerStyle={profileStyle.input}
          showLabel
          label="Email"
          value={user.email}
          editable={false}
          iconName="mail-outline"
        />
        <CustomInput
          mainContainerStyle={profileStyle.input}
          showLabel
          label="Mobile"
          value={user.mobile}
          editable={false}
          customIconName="mobile"
        />
        <CustomInput
          mainContainerStyle={profileStyle.input}
          showLabel
          label="Referral Code"
          value={user.name}
          editable={false}
        />
      </Container>
    </>
  );
};

export default ProfileUpdate;
