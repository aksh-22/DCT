import {useState} from 'react';
import {AuthorizedStackProps} from 'src/routes/types/navigation';
import {useAppSelector} from 'src/utils/reducer';
import {formatGame1Data} from '../../list/getGameData';
import {useRequest} from 'src/constants/useRequest';
import {showMessage} from 'src/components/MessageModal';

const useGame1 = ({route}: AuthorizedStackProps) => {
  const {key, market}: any = route?.params;

  const {numbers} = useAppSelector(state => state.numberReducer);

  const [bidData, setBidData] = useState({});

  const {sendRequest, isLoading} = useRequest({
    endpoint: 'bids/add',
    requestType: 'POST',
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
