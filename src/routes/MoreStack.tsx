import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {MoreStackName} from 'src/constants/routeNames';
import Feedback from 'src/screens/feedback/Feedback';
import HowToPlay from 'src/screens/howToPlay/HowToPlay';
import More from 'src/screens/more/More';
import Profile from 'src/screens/profile/Profile';
import ProfileUpdate from 'src/screens/profile/profile-update/ProfileUpdate';
import Rate from 'src/screens/rate/Rate';
const Stack = createNativeStackNavigator();

type Props = {};

const MoreStack = ({}: Props) => {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name={MoreStackName.MORE} component={More} />
      <Screen name={MoreStackName.PROFILE} component={Profile} />
      <Screen name={MoreStackName.PROFILE_UPDATE} component={ProfileUpdate} />
      <Screen name={MoreStackName.GAME_RATE} component={Rate} />
      <Screen name={MoreStackName.FEEDBACK} component={Feedback} />
      <Screen name={MoreStackName.PLAY} component={HowToPlay} />
    </Navigator>
  );
};

export default MoreStack;
