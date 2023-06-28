import React from 'react';
import {View} from 'react-native';
import CustomText from 'src/components/CustomText';
import colors from 'src/constants/colors';
import globalStyles, {margin} from 'src/constants/globalStyles';
import betStyle from './bet.style';

type Props = {
  item: any;
  index: number;
};

const BetItem = ({item}: Props) => {
  return (
    <View style={betStyle.item}>
      <CustomText size={19} style={margin('0', '10')}>
        {item?.market?.name}
      </CustomText>
      <View style={globalStyles.row_spaceBetween}>
        <View style={betStyle.itemLower}>
          <CustomText size={12} color={colors.purple2}>
            Game Type
          </CustomText>
          <CustomText size={15}>{item?.game_type}</CustomText>
        </View>
        <View style={betStyle.itemLower}>
          <CustomText size={12} color={colors.purple2}>
            Bid : Point
          </CustomText>
          <CustomText size={15}>
            {item?.family_number}:{item?.point}
          </CustomText>
        </View>
        <View style={[betStyle.itemLower, betStyle.lastItem]}>
          <CustomText size={12} color={colors.purple2}>
            Winning Amount
          </CustomText>
          <CustomText size={15}>{item?.win_amount}</CustomText>
        </View>
      </View>
    </View>
  );
};

export default BetItem;
