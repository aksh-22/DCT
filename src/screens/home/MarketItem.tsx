import {View, Text} from 'react-native';
import React from 'react';
import homeStyle from './home.style';
import globalStyles from 'src/constants/globalStyles';
import CustomText from 'src/components/CustomText';

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
    </View>
  );
};

export default MarketItem;
