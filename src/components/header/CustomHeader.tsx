import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import colors from 'src/constants/colors';
import {margin} from 'src/constants/globalStyles';
import {AuthorizeStackName} from 'src/constants/routeNames';
import {useAppSelector} from 'src/utils/reducer';
import CustomIcon from '../CustomIcon';
import CustomText from '../CustomText';
import headerStyle from './header.style';

type Props = {
  isBack?: boolean;
  leftSmallTitle?: string;
  leftTitle?: string;
  showWallet?: boolean;
  showBell?: boolean;
  heading?: string;
};

const CustomHeader = ({
  isBack,
  leftSmallTitle,
  leftTitle,
  showWallet = true,
  showBell = true,
  heading,
}: Props) => {
  // const {colors} = useTheme();
  const {goBack, navigate} = useNavigation<NativeStackNavigationProp<any>>();

  const user = useAppSelector(state => state.userReducer.user);

  console.log('user', user);

  const onBellIconPress = () => {
    navigate(AuthorizeStackName.NOTIFICATION);
  };
  const onWalletIconPress = () => {
    navigate(AuthorizeStackName.WALLET_HISTORY);
  };

  return (
    <View style={headerStyle.wrapper}>
      <View style={headerStyle.header}>
        {leftSmallTitle || leftTitle ? (
          <View>
            {leftSmallTitle ? (
              <CustomText size={13}>{leftSmallTitle}</CustomText>
            ) : null}
            {leftTitle ? <CustomText size={30}>{leftTitle}</CustomText> : null}
          </View>
        ) : null}
        {isBack ? (
          <TouchableOpacity
            onPress={goBack}
            style={headerStyle.backIconWrapper}>
            <CustomIcon name="back" color={colors.defaultWhite} />
          </TouchableOpacity>
        ) : null}
        <View style={headerStyle.rightIconArea}>
          {showWallet ? (
            <TouchableOpacity
              onPress={onWalletIconPress}
              style={headerStyle.icon}>
              <CustomIcon
                name="withdrawal"
                fill={colors.defaultBlack}
                height={20}
                width={20}
              />
              <CustomText size={10} color="black" style={margin(0, 0, 5)}>
                {user?.wallet}
              </CustomText>
            </TouchableOpacity>
          ) : null}
          {showBell ? (
            <TouchableOpacity onPress={onBellIconPress}>
              <CustomIcon
                name="bell"
                color={colors.defaultWhite}
                height={32}
                width={32}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      {heading ? (
        <CustomText size={30} style={margin(20, 20, 20)}>
          {heading}
        </CustomText>
      ) : null}
    </View>
  );
};

export default CustomHeader;
