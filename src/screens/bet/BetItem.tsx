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

const BetItem = ({index, item}: Props) => {
  console.log('index', item);
  return (
    <View style={betStyle.item}>
      <CustomText size={19} style={margin('0', '10')}>
        Capital Morning
      </CustomText>
      <View style={globalStyles.row_spaceBetween}>
        <View style={betStyle.itemLower}>
          <CustomText size={12} color={colors.purple2}>
            Game Type
          </CustomText>
          <CustomText size={15}>Jodi</CustomText>
        </View>
        <View style={betStyle.itemLower}>
          <CustomText size={12} color={colors.purple2}>
            Bid
          </CustomText>
          <CustomText size={15}>100</CustomText>
        </View>
        <View style={[betStyle.itemLower, betStyle.lastItem]}>
          <CustomText size={12} color={colors.purple2}>
            Winning Amount
          </CustomText>
          <CustomText size={15}>11000</CustomText>
        </View>
      </View>
    </View>
  );
};

export default BetItem;
