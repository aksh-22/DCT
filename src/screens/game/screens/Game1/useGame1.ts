import {useState} from 'react';
import {showMessage} from 'src/components/MessageModal';
import {useRequest} from 'src/constants/useRequest';
import {AuthorizedStackProps} from 'src/routes/types/navigation';
import {useAppSelector} from 'src/utils/reducer';
import {formatGame1Data} from '../../list/getGameData';

const useGame1 = ({route, navigation}: AuthorizedStackProps) => {
  const {key, market}: any = route?.params;

  const {numbers} = useAppSelector(state => state.numberReducer);

  const [bidData, setBidData] = useState({});

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

  const onChange = val => {
    setBidData(prev => ({...prev, ...val}));
  };

  let total = 0;
  Object.keys(bidData).forEach(el => {
    total += Number(bidData[el]);
  });

  const onPlaceBid = () => {
    if (!Object.keys(bidData).length) {
      showMessage({modalType: 'Error', message: 'At least place a bid'});
    } else {
      const data = formatGame1Data(bidData, market, route?.params);
      sendRequest(data);
    }
  };

  const numberData = numbers?.[key];

  return {onChange, total, numberData, onPlaceBid, isLoading};
};

export default useGame1;
