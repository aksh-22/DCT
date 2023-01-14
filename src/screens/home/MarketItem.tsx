import React from 'react';
import {View} from 'react-native';
import CustomText from 'src/components/CustomText';
import colors from 'src/constants/colors';
import globalStyles from 'src/constants/globalStyles';
import homeStyle from './home.style';

type Props = {
  item: any;
};

const MarketItem = ({}: Props) => {
  return (
    <View style={[homeStyle.depositBox, globalStyles.mb_20]}>
      <View style={homeStyle.marketItemTop}>
        <View>
          <CustomText style={homeStyle.marketText}>Open-Bids</CustomText>
          <CustomText style={homeStyle.marketText}>11:15 AM</CustomText>
        </View>
        <View style={homeStyle.verticalLine} />
        <View>
          <CustomText style={homeStyle.marketText}>Close-Bids</CustomText>
          <CustomText style={homeStyle.marketText}>11:15 AM</CustomText>
        </View>
      </View>
      <CustomText size={20}>Capital Morning</CustomText>
      <CustomText size={16}>550-02-246</CustomText>
      <CustomText size={14} color={colors.red}>
        Bid is closed for today
      </CustomText>
    </View>
  );
};

export default MarketItem;
