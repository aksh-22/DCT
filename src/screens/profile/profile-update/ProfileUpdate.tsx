import React from 'react';
import CustomButton from 'src/components/button/CustomButton';
import CustomHeader from 'src/components/header/CustomHeader';
import CustomInput from 'src/components/Input/CustomInput';
import {margin, padding} from 'src/constants/globalStyles';
import Container from 'src/container/Container';
import {useAppSelector} from 'src/utils/reducer';
import profileStyle from './../profile.style';
type Props = {};

const ProfileUpdate = ({}: Props) => {
  const user = useAppSelector(state => state.userReducer.user);

  return (
    <>
      <CustomHeader isBack heading="Update Profile" />
      <Container contentContainerStyle={padding('0', '20')}>
        <CustomInput
          mainContainerStyle={profileStyle.input}
          placeholder="Name"
          value={user.name}
          customIconName="name"
        />
        <CustomInput
          mainContainerStyle={profileStyle.input}
          placeholder="Email"
          value={user.email}
          iconName="mail-outline"
        />
        <CustomInput
          mainContainerStyle={profileStyle.input}
          placeholder="Mobile"
          value={user.mobile}
          customIconName="mobile"
        />
        <CustomInput
          mainContainerStyle={profileStyle.input}
          placeholder="Referral Code"
          value={user.name}
        />
        <CustomButton title="Update Profile" style={margin(40)} />
      </Container>
    </>
  );
};

export default ProfileUpdate;
