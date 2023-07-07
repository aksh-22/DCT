import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import colors from 'src/constants/colors';
import VectorIcon from './IconsFamily';

type Props = {
  onPress: () => void;
  isChecked: boolean;
};

const Checkbox = ({isChecked, onPress}: Props) => {
  return (
    <Pressable hitSlop={30} onPress={onPress} style={styles.box}>
      {isChecked && (
        <VectorIcon
          name="check"
          color={colors.active}
          size={13}
          family="Entypo"
        />
      )}
    </Pressable>
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
