import React from 'react';
import {View} from 'react-native';
import CustomText from 'src/components/CustomText';
import VectorIcon from 'src/components/IconsFamily';
import colors from 'src/constants/colors';
import globalStyles from 'src/constants/globalStyles';
import marketItemStyle from './marketItem.style';

type Props = {
  status: string;
  onPlayNowPress: () => void;
};

const MarketItmStatus = ({status, onPlayNowPress}: Props) => {
  let isClosed = status.includes('Closed');

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
        <VectorIcon
          name="play"
          style={marketItemStyle.playNow}
          color={colors.green}
          size={35}
          family="AntDesign"
          onPress={onPlayNowPress}
        />
      )}
    </View>
  );
};

export default MarketItmStatus;
