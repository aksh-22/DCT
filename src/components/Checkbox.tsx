import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from 'src/constants/colors';
import VectorIcon from './IconsFamily';

type Props = {};

const Checkbox = ({}: Props) => {
  return (
    <View style={styles.box}>
      <VectorIcon
        name="check"
        color={colors.active}
        size={13}
        family="Entypo"
      />
    </View>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  box: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: colors.active,
    borderRadius: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
