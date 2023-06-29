import {useState} from 'react';
import {AuthorizedStackProps} from 'src/routes/types/navigation';
import {useAppSelector} from 'src/utils/reducer';

const useGame3 = ({route}: AuthorizedStackProps) => {
  const {key}: any = route?.params;
  const {numbers} = useAppSelector(state => state.numberReducer);
  const [bidData, setBidData] = useState([]);
  const [data, setData] = useState({
    group: '',
    points: '',
  });

  const onChange = (type, val) => {
    setData(prev => ({...prev, [type]: val}));
  };

  const onAdd = val => {
    setBidData(prev => ({...prev, ...val}));
  };

  let total = 0;
  Object.keys(bidData).forEach(el => {
    total += Number(bidData[el]);
  });

  const numberData = numbers?.[key];

  return {onChange, total, numberData, bidData, onAdd, data};
};

export default useGame3;
