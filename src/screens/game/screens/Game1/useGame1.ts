import {useState} from 'react';
import {AuthorizedStackProps} from 'src/routes/types/navigation';
import {useAppSelector} from 'src/utils/reducer';

const useGame1 = ({route}: AuthorizedStackProps) => {
  const {key}: any = route?.params;

  const {numbers} = useAppSelector(state => state.numberReducer);

  const [bidData, setBidData] = useState({});

  const onChange = val => {
    setBidData(prev => ({...prev, ...val}));
  };

  let total = 0;
  Object.keys(bidData).forEach(el => {
    total += Number(bidData[el]);
  });

  console.log('key', key);

  const numberData = numbers?.['single_ank'];

  return {onChange, total, numberData};
};

export default useGame1;
