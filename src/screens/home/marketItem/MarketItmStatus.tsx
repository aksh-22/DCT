import React from 'react';
import {View} from 'react-native';
import CustomButton from 'src/components/button/CustomButton';
import CustomText from 'src/components/CustomText';
import globalStyles from 'src/constants/globalStyles';
import marketItemStyle from './marketItem.style';

type Props = {
  status: string;
  onPlayNowPress: () => void;
};

const MarketItmStatus = ({status, onPlayNowPress}: Props) => {
  let isClosed = !status.includes('Closed');

  return (
    <View style={globalStyles.row_spaceBetween}>
      {isClosed ? (
        <View style={marketItemStyle.marketStatusWrapper}>
          <CustomText>{status}</CustomText>
        </View>
      ) : (
        <CustomText size={10} color="green">
          {status}
        </CustomText>
      )}
      {!isClosed && (
        <CustomButton
          onPress={onPlayNowPress}
          title="Play Now"
          style={marketItemStyle.playNow}
          titleSize={11}
        />
      )}
    </View>
  );
};

export default MarketItmStatus;
