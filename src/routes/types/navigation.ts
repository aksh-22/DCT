import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  AuthorizedStackName,
  AuthStackName,
  BottomStackName,
  RootStackName,
} from 'src/constants/routeNames';

export type RootStackParamList = {
  [RootStackName.AUTH_STACK]: NavigatorScreenParams<AuthStackParamList>;
  [RootStackName.BOTTOM_TAB_STACK]: NavigatorScreenParams<any>;
  [RootStackName.CUSTOMER_DETAILS]: undefined;
  [RootStackName.RESET_PASSWORD]: undefined;
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
  [AuthorizedStackName.SEARCH]: undefined;
  [AuthorizedStackName.SUBCATEGORY_DETAILS]: undefined;
  [AuthorizedStackName.PRODUCT_DETAILS]: undefined;
  [AuthorizedStackName.CART]: undefined;
  [AuthorizedStackName.PAYMENT]: undefined;
  [AuthorizedStackName.PROFILE]: undefined;
  [AuthorizedStackName.NOTIFICATION_LIST]: undefined;
};

export type BottomStackParamList = {
  [BottomStackName.HOME]: undefined;
  [BottomStackName.DELIVERY]: undefined;
  [BottomStackName.E_KART]: undefined;
  [BottomStackName.OFFERS]: undefined;
  [BottomStackName.ACCOUNT]: undefined;
};

export type AuthStackProps = NativeStackScreenProps<AuthStackParamList>;
export type BottomStackProps = NativeStackScreenProps<BottomStackParamList>;
export type AuthorizedStackProps =
  NativeStackScreenProps<AuthorizedStackParamList>;
