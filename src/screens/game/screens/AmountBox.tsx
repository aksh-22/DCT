import React from 'react';
import {View} from 'react-native';
import CustomText from 'src/components/CustomText';
import CustomButton from 'src/components/button/CustomButton';
import gameStyle from './game.style';
import {useKeyboard} from 'src/hooks/useKeyboard';
import {padding} from 'src/constants/globalStyles';

type Props = {
  total: number;
  onPlaceBid: () => void;
  isLoading: boolean;
};

const AmountBox = ({total, onPlaceBid, isLoading}: Props) => {
  const {isKeyboardVisible} = useKeyboard({delay: 300});
  return !isKeyboardVisible ? (
    <View style={gameStyle.amountArea}>
      <CustomText size={20} style={padding('10')} center color="purple">
        Total {total}
      </CustomText>
      <CustomButton
        isLoading={isLoading}
        onPress={onPlaceBid}
        title="Place bid"
      />
    </View>
  ) : (
    <></>
  );
};

export default AmountBox;
