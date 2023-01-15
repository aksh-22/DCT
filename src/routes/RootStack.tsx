import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {RootStackName, WalletStackName} from 'src/constants/routeNames';
import Splash from 'src/screens/splash/Splash';
import Withdrawal from 'src/screens/wallet/withdrawal/Withdrawal';
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
        <>
          <Screen
            name={RootStackName.BOTTOM_TAB_STACK}
            component={BottomTabStack}
          />
          <Screen
            name={WalletStackName.WALLET_HISTORY}
            component={Withdrawal}
            options={
              {
                // tabBarItemStyle: {display: 'none'},
                // tabBarStyle: {display: 'none'},
              }
            }
          />
        </>
      )}
    </Navigator>
  );
};

export default RootStack;
