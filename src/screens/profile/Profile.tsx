import React from 'react';
import {View} from 'react-native';
import CustomButton from 'src/components/button/CustomButton';
import CustomText from 'src/components/CustomText';
import CustomHeader from 'src/components/header/CustomHeader';
import {margin, padding} from 'src/constants/globalStyles';
import {MoreStackName} from 'src/constants/routeNames';
import Container from 'src/container/Container';
import {BottomStackProps} from 'src/routes/types/navigation';
import profileList from 'src/utils/profileList';
import {useAppSelector} from 'src/utils/reducer';
import profileStyle from './profile.style';

const Profile = ({navigation}: BottomStackProps) => {
  const user = useAppSelector(state => state.userReducer.user);

  const onUpdateProfilePress = () => {
    navigation.navigate(MoreStackName.PROFILE_UPDATE);
  };

  return (
    <>
      <CustomHeader isBack heading="Profile" />
      <Container contentContainerStyle={padding(0, 0, 20, 20)}>
        {profileList.map(el => (
          <View key={el.id}>
            <CustomText color="light_purple">{el.label}</CustomText>
            <CustomText size={18} style={margin(0, 25)}>
              {user?.[el.key] ?? '---'}
            </CustomText>
          </View>
        ))}
        <View style={profileStyle.buttonArea}>
          <CustomButton
            title="Change Password"
            variant="outline"
            titleSize={14}
          />
          <CustomButton
            onPress={onUpdateProfilePress}
            title="Update Profile"
            titleSize={14}
          />
        </View>
      </Container>
    </>
  );
};

export default Profile;
