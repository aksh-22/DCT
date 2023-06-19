import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import colors from 'src/constants/colors';
import {margin, padding} from 'src/constants/globalStyles';
import {AuthorizeStackName, HomeStackName} from 'src/constants/routeNames';
import {useRequest} from 'src/constants/useRequest';
import CustomButton from '../button/CustomButton';
import CustomText from '../CustomText';
import LoadingContainer from '../loading/LoadingContainer';
import modalStyle from './modal.style';

export interface MarketModalProps {
  onCancel?: () => void;
  data?: any;
}

const DELAY_TIME = 500;

const MarketModal = ({onCancel, data}: MarketModalProps) => {
  const {dataFetched, isLoading} = useRequest({
    endpoint: `markets/status/${data?.id}`,
    callApiByDefault: ![null, undefined].includes(data?.id),
  });

  const {navigate} = useNavigation<NativeStackNavigationProp<any>>();

  const isOpenMarketOpen = !dataFetched?.data?.status?.open?.length;
  const isCloseMarketOpen = !dataFetched?.data?.status?.close?.length;

  const onOpenPress = () => {
    onCancel();
    setTimeout(() => {
      navigate(AuthorizeStackName.GAME_STACK, {
        screen: HomeStackName.GAME_LIST,
      });
    }, DELAY_TIME);
  };
  const onClosePress = () => {
    onCancel();
    setTimeout(() => {
      navigate(AuthorizeStackName.GAME_STACK, {
        screen: HomeStackName.GAME_LIST,
      });
    }, DELAY_TIME);
  };

  return (
    <View>
      {isLoading ? (
        <LoadingContainer containerSTyle={padding('100')} />
      ) : (
        <>
          <TouchableOpacity
            disabled={!isOpenMarketOpen}
            onPress={onOpenPress}
            style={[
              modalStyle.marketModalItem,
              !isOpenMarketOpen && modalStyle.disable,
            ]}>
            <CustomText center size={20}>
              Open
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={!isCloseMarketOpen}
            onPress={onClosePress}
            style={[
              modalStyle.marketModalItem,
              !isCloseMarketOpen && modalStyle.disable,
            ]}>
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
