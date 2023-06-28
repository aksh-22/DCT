import {useState} from 'react';
import {AuthorizedStackProps} from 'src/routes/types/navigation';
import {useAppSelector} from 'src/utils/reducer';
import {formatGame1Data} from '../../list/getGameData';
import {useRequest} from 'src/constants/useRequest';

const useGame1 = ({route}: AuthorizedStackProps) => {
  const {key}: any = route?.params;

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
    const data = formatGame1Data(bidData, route?.params);
    console.log('data', JSON.stringify(data, null, 2));
    // sendRequest(data);
  };

  const numberData = numbers?.[key];

  return {onChange, total, numberData, onPlaceBid, isLoading};
};

export default useGame1;
