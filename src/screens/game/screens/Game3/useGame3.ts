import {useState} from 'react';
import {AuthorizedStackProps} from 'src/routes/types/navigation';
import {useAppSelector} from 'src/utils/reducer';

const useGame3 = ({route}: AuthorizedStackProps) => {
  const params = route?.params;
  const {numbers} = useAppSelector(state => state.numberReducer);
  const [bidData, setBidData] = useState([]);
  const [data, setData] = useState({
    group: '',
    points: '',
  });

  console.log('params', JSON.stringify(params, null, 2));

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

  console.log('numbers', JSON.stringify(numbers[params?.key], null, 2));

  return {onChange, total, onAdd, data};
};

export default useGame3;
