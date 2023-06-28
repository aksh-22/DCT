import React from 'react';
import {View} from 'react-native';
import CustomText from 'src/components/CustomText';
import {margin} from 'src/constants/globalStyles';
import {marketsItemType} from 'typings/market-data-type';
import marketItemStyle from './marketItem.style';
import MarketItmStatus from './MarketItmStatus';

type Props = {
  item: marketsItemType;
  onPlayNowPress: () => void;
};

const MarketItem = ({item, onPlayNowPress}: Props) => {
  return (
    <View style={marketItemStyle.marketItem}>
      <View style={marketItemStyle.marketItemLeft}>
        <CustomText size={19}>{item.name}</CustomText>
        <CustomText size={17} color="active" style={margin(5, 10)}>
          {item.result_string?.result ?? '---'}
        </CustomText>
        <MarketItmStatus onPlayNowPress={onPlayNowPress} status={item.status} />
      </View>
      <View style={marketItemStyle.marketItemRight}>
        <View style={marketItemStyle.openBid}>
          <CustomText size={11}>Open-Bids</CustomText>
          <CustomText size={12}>{item.open_time}</CustomText>
        </View>
        <View style={marketItemStyle.horizontal} />
        <View style={marketItemStyle.openBid}>
          <CustomText size={11}>Close-Bids</CustomText>
          <CustomText size={12}>{item.close_time}</CustomText>
        </View>
      </View>
    </View>
  );
};

export default MarketItem;
