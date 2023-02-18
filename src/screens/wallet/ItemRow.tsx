import React from 'react';
import {View} from 'react-native';
import CustomText from 'src/components/CustomText';
import colors from 'src/constants/colors';
import walletStyle from './wallet.style';

type Props = {
  item: any;
  index: number;
};

const ItemRow = ({item, index}: Props) => {
  const isEven = index % 2 === 0;
  return (
    <View
      style={[
        walletStyle.labelRow,
        {backgroundColor: isEven ? colors.background2 : colors.transparent},
      ]}>
      <CustomText style={walletStyle.sNoStyle} size={12}>
        {item.sNo}
      </CustomText>
      <CustomText style={walletStyle.labelRowItem} size={12}>
        {item.transactionType}
      </CustomText>
      <CustomText style={walletStyle.labelRowItem} size={12}>
        {item.amount}
      </CustomText>
      <CustomText style={walletStyle.labelRowItem} size={12}>
        {item.description}
      </CustomText>
      <View>
        <CustomText style={walletStyle.labelRowItem} size={12}>
          {item.date}
        </CustomText>
        <CustomText
          style={[walletStyle.labelRowItem, {marginTop: -15}]}
          size={9}>
          {item.time}
        </CustomText>
      </View>
    </View>
  );
};

export default ItemRow;
