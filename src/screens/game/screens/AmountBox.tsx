import React from 'react';
import {View} from 'react-native';
import CustomText from 'src/components/CustomText';
import CustomButton from 'src/components/button/CustomButton';
import gameStyle from './game.style';
import {useKeyboard} from 'src/hooks/useKeyboard';
import {padding} from 'src/constants/globalStyles';
import {showMessage} from 'src/components/MessageModal';
import {useRequest} from 'src/constants/useRequest';
import {formatGame1Data} from '../list/getGameData';

type Props = {
  total: number;
  navigation: any;
  bidData: any;
  params: any;
};

const AmountBox = ({total, navigation, bidData, params}: Props) => {
  const {isKeyboardVisible} = useKeyboard({delay: 300});
  const onSuccess = fData => {
    showMessage({modalType: 'Success', message: 'Bid placed successfully'});
    console.log('fData', JSON.stringify(fData, null, 2));
    navigation.goBack();
  };

  const {sendRequest, isLoading} = useRequest({
    endpoint: 'bids/add',
    requestType: 'POST',
    onSuccess,
  });
  const onPlaceBid = () => {
    if (!Object.keys(bidData).length) {
      showMessage({modalType: 'Error', message: 'At least place a bid'});
    } else {
      const data = formatGame1Data(bidData, params);
      sendRequest(data);
    }
  };
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
