import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import colors from 'src/constants/colors';
import {margin, padding} from 'src/constants/globalStyles';
import {useRequest} from 'src/constants/useRequest';
import CustomButton from '../button/CustomButton';
import CustomText from '../CustomText';
import LoadingContainer from '../loading/LoadingContainer';
import modalStyle from './modal.style';

export interface MarketModalProps {
  onOpenPress?: () => void;
  onClosePress?: () => void;
  onCancel?: () => void;
  data?: any;
}

const MarketModal = ({
  onClosePress,
  onOpenPress,
  onCancel,
  data,
}: MarketModalProps) => {
  const {dataFetched, isLoading} = useRequest({
    endpoint: `markets/status/${data?.id}`,
    callApiByDefault: ![null, undefined].includes(data?.id),
  });

  console.log('dataFetched', dataFetched);

  return (
    <View>
      {isLoading ? (
        <LoadingContainer containerSTyle={padding('100')} />
      ) : (
        <>
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
        </>
      )}
    </View>
  );
};

export default MarketModal;
