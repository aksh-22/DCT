import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {RootStackName} from 'src/constants/routeNames';
import Splash from 'src/screens/splash/Splash';
import {useAppSelector} from 'src/utils/reducer';
import AuthStack from './AuthStack';
import BottomTabStack from './BottomTabStack';

type Props = {};

const Stack = createNativeStackNavigator();

const RootStack = ({}: Props) => {
  const {Navigator, Screen} = Stack;
  const [showLottie, setShowLottie] = useState(true);

  const isLoggedIn = useAppSelector(state => state.userReducer.isLoggedIn);

  const onAnimationFinish = () => {
    setShowLottie(false);
  };

  return (
    <Navigator screenOptions={{headerShown: false}}>
      {/* {showLottie && (
        <Screen
          name={RootStackName.SPLASH}
          children={() => <Splash onAnimationFinish={onAnimationFinish} />}
        />
      )} */}
      {!isLoggedIn ? (
        <Screen name={RootStackName.AUTH_STACK} component={AuthStack} />
      ) : (
        <Screen
          name={RootStackName.BOTTOM_TAB_STACK}
          component={BottomTabStack}
        />
      )}
    </Navigator>
  );
};

export default RootStack;
