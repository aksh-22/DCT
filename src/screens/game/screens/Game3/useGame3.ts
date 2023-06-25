import {useState} from 'react';
import {AuthorizedStackProps} from 'src/routes/types/navigation';

const useGame3 = ({route}: AuthorizedStackProps) => {
  const params = route?.params;
  const [bidData, setBidData] = useState([]);
  const [data, setData] = useState({
    group: '',
    points: '',
  });

  console.log('params', JSON.stringify(params, null, 2));

  const onChange = (key, val) => {
    setData(prev => ({...prev, [key]: val}));
  };

  const onAdd = val => {
    setBidData(prev => ({...prev, ...val}));
  };

  let total = 0;
  Object.keys(bidData).forEach(el => {
    total += Number(bidData[el]);
  });

  return {onChange, total, onAdd, data};
};

export default useGame3;
