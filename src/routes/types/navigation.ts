import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  AuthorizedStackName,
  AuthStackName,
  BottomStackName,
  MoreStackName,
  RootStackName,
  WalletStackName,
} from 'src/constants/routeNames';

export type RootStackParamList = {
  [RootStackName.AUTH_STACK]: NavigatorScreenParams<AuthStackParamList>;
  [RootStackName.BOTTOM_TAB_STACK]: NavigatorScreenParams<any>;
};

export type AuthStackParamList = {
  [AuthStackName.LOGIN]: undefined;
  [AuthStackName.SIGN_UP]: undefined;
  [AuthStackName.OTP]: undefined;
  [AuthStackName.FORGOT_PASSWORD]: undefined;
  [BottomStackName.HOME]: undefined;
  [RootStackName.BOTTOM_TAB_STACK]: NavigatorScreenParams<any>;
};

export type AuthorizedStackParamList = {
  [AuthorizedStackName.BOTTOM_TAB_STACK]: NavigatorScreenParams<BottomStackParamList>;
};

export type BottomStackParamList = {
  [BottomStackName.HOME]: undefined;
  [BottomStackName.MORE_STACK]: undefined;
  [BottomStackName.MY_BET]: undefined;
  [BottomStackName.WITHDRAWAL]: undefined;
  [WalletStackName.WALLET_HISTORY]: undefined;
  [MoreStackName.PROFILE_UPDATE]: undefined;
};

export type AuthStackProps = NativeStackScreenProps<AuthStackParamList>;
export type BottomStackProps = NativeStackScreenProps<BottomStackParamList>;
export type AuthorizedStackProps =
  NativeStackScreenProps<AuthorizedStackParamList>;
