import React from 'react';
import {View} from 'react-native';
import CustomText from 'src/components/CustomText';
import colors from 'src/constants/colors';
import walletStyle from './wallet.style';

type Props = {
  labels?: string[];
};

const labelsData = [
  'S.No.',
  'Transaction Type',
  'Amount',
  'Description',
  'Date',
];

const LabelRow = ({labels = labelsData}: Props) => {
  return (
    <View
      style={[
        walletStyle.labelRow,
        {borderBottomWidth: 1, borderBottomColor: colors.placeholderColor},
      ]}>
      {labels?.map((el, i) => (
        <CustomText
          style={i === 0 ? walletStyle.sNoStyle : walletStyle.labelRowItem}
          size={11}
          color="placeholderColor"
          key={el}>
          {el}
        </CustomText>
      ))}
    </View>
  );
};

export default LabelRow;
