import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import colors from 'src/constants/colors';
import {margin} from 'src/constants/globalStyles';
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
  const {goBack} = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <>
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
            <TouchableOpacity style={headerStyle.icon}>
              <CustomIcon
                name="withdrawal"
                fill={colors.defaultBlack}
                height={20}
                width={20}
              />
              <CustomText size={10} color="black" style={margin(0, 0, 5)}>
                100.00
              </CustomText>
            </TouchableOpacity>
          ) : null}
          {showBell ? (
            <TouchableOpacity>
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
    </>
  );
};

export default CustomHeader;
