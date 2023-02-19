import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import colors from 'src/constants/colors';
import {margin} from 'src/constants/globalStyles';
import CustomButton from '../button/CustomButton';
import CustomText from '../CustomText';
import modalStyle from './modal.style';

export interface MarketModalProps {
  onOpenPress: () => void;
  onClosePress: () => void;
  onCancel: () => void;
}

const MarketModal = ({
  onClosePress,
  onOpenPress,
  onCancel,
}: MarketModalProps) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onOpenPress}
        style={modalStyle.marketModalItem}>
        <CustomText center size={20}>
          Open
        </CustomText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onClosePress}
        style={modalStyle.marketModalItem}>
        <CustomText center size={20}>
          Close
        </CustomText>
      </TouchableOpacity>
      <CustomButton
        title="Cancel"
        backgroundColor={colors.active}
        style={margin('20')}
        onPress={onCancel}
      />
    </View>
  );
};

export default MarketModal;
