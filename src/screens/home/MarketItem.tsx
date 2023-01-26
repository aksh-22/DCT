import React from 'react';
import {View} from 'react-native';
import CustomText from 'src/components/CustomText';
import colors from 'src/constants/colors';
import globalStyles from 'src/constants/globalStyles';
import {marketsItemType} from 'typings/market-data-type';
import homeStyle from './home.style';

type Props = {
  item: marketsItemType;
};

const MarketItem = ({item}: Props) => {
  return (
    <View style={[homeStyle.depositBox, globalStyles.mb_20]}>
      <View style={homeStyle.marketItemTop}>
        <View>
          <CustomText style={homeStyle.marketText}>Open-Bids</CustomText>
          <CustomText style={homeStyle.marketText}>{item.open_time}</CustomText>
        </View>
        <View style={homeStyle.verticalLine} />
        <View>
          <CustomText style={homeStyle.marketText}>Close-Bids</CustomText>
          <CustomText style={homeStyle.marketText}>
            {item.close_time}
          </CustomText>
        </View>
      </View>
      <CustomText size={20}>{item.name}</CustomText>
      <CustomText size={16}>
        {item.result_string ? item.result_string : '--'}
      </CustomText>
      <CustomText size={14} color={colors.red}>
        {item.status}
      </CustomText>
    </View>
  );
};

export default MarketItem;
