import React, {ReactNode} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import CustomText from '../CustomText';
import MarketModal, {MarketModalProps} from './MarketModal';
import modalStyle from './modal.style';

interface Props extends MarketModalProps {
  isVisible: boolean;
  children?: ReactNode;
  modalType?: 'MarketModal';
  header?: string;
}

const CustomModal = ({
  isVisible,
  children,
  modalType,
  header,
  onCancel,
  onClosePress,
  onOpenPress,
}: Props) => {
  const renderItem = (): any => {
    switch (modalType) {
      case 'MarketModal':
        return (
          <MarketModal
            onCancel={onCancel}
            onClosePress={onClosePress}
            onOpenPress={onOpenPress}
          />
        );

      default:
        return children;
    }
  };

  return (
    <Modal isVisible={isVisible}>
      <View style={modalStyle.container}>
        {header ? (
          <View style={modalStyle.header}>
            <CustomText size={24}>{header}</CustomText>
          </View>
        ) : null}
        {renderItem()}
      </View>
    </Modal>
  );
};

export default CustomModal;
