import {useState} from 'react';
import {AuthorizedStackProps} from 'src/routes/types/navigation';
import {useAppSelector} from 'src/utils/reducer';

const useGame2 = ({route}: AuthorizedStackProps) => {
  const {key}: any = route?.params;
  const [bidData, setBidData] = useState({});

  const {numbers} = useAppSelector(state => state.numberReducer);

  const onChange = val => {
    setBidData(prev => ({...prev, ...val}));
  };

  let total = 0;
  Object.keys(bidData).forEach(el => {
    total += Number(bidData[el]);
  });

  const numberData = numbers?.[key];

  return {onChange, total, numberData, bidData};
};

export default useGame2;
