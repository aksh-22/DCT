import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import CustomText from 'src/components/CustomText';
import {showMessage} from 'src/components/MessageModal';
import CustomButton from 'src/components/button/CustomButton';
import {padding} from 'src/constants/globalStyles';
import {useRequest} from 'src/constants/useRequest';
import {updateWallet} from 'src/store/reducer/userReducer';
import {formatGameData} from '../list/getGameData';
import gameStyle from './game.style';

type Props = {
  total: number;
  navigation: any;
  bidData: any;
  params: any;
};

const AmountBox = ({total, navigation, bidData, params}: Props) => {
  const dispatch = useDispatch();

  const onSuccess = fData => {
    dispatch(updateWallet(fData.data?.wallet));
    showMessage({modalType: 'Success', message: 'Bid placed successfully'});
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
      const data = formatGameData(bidData, params);
      sendRequest(data);
    }
  };
  return !false ? (
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
