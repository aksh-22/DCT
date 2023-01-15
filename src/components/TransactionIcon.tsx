import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Transaction from 'src/assets/svg/transaction-history.svg';
import colors from 'src/constants/colors';
import globalStyles from 'src/constants/globalStyles';

type Props = {
  onPress: () => void;
};

const TransactionIcon = ({onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <Transaction height={30} width={30} fill="#fff" />
    </TouchableOpacity>
  );
};

export default TransactionIcon;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    backgroundColor: colors.primaryColor,
    zIndex: 10,
    ...globalStyles.shadow,
    borderRadius: 100,
    padding: 10,
  },
});
