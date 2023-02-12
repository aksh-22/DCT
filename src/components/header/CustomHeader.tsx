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
};

const CustomHeader = ({isBack, leftSmallTitle, leftTitle}: Props) => {
  // const {colors} = useTheme();
  const {goBack} = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={headerStyle.header}>
      <View>
        {leftSmallTitle ? (
          <CustomText size={13}>{leftSmallTitle}</CustomText>
        ) : null}
        {leftTitle ? <CustomText size={30}>{leftTitle}</CustomText> : null}
      </View>
      {isBack ? (
        <TouchableOpacity onPress={goBack} style={headerStyle.backIconWrapper}>
          <CustomIcon name="back" color={colors.defaultWhite} />
        </TouchableOpacity>
      ) : null}
      <View style={headerStyle.rightIconArea}>
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
        <TouchableOpacity>
          <CustomIcon
            name="bell"
            color={colors.defaultWhite}
            height={32}
            width={32}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeader;
