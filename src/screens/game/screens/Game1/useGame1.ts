import {useCallback, useMemo, useState} from 'react';
import {AuthorizedStackProps} from 'src/routes/types/navigation';
import {useAppSelector} from 'src/utils/reducer';

const useGame1 = ({route}: AuthorizedStackProps) => {
  const {key}: any = route?.params;

  const {numbers} = useAppSelector(state => state.numberReducer);

  const [bidData, setBidData] = useState({});

  const onChange = useCallback(val => {
    setBidData(prev => ({...prev, ...val}));
  }, []);

  let total = 0;
  Object.keys(bidData).forEach(el => {
    total += Number(bidData[el]);
  });

  const numberData = useMemo(() => numbers?.[key], [numbers, key]);

  return {onChange, total, numberData, bidData};
};

export default useGame1;
