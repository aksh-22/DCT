import {useState} from 'react';
import {AuthorizedStackProps} from 'src/routes/types/navigation';

const useGame1 = ({route}: AuthorizedStackProps) => {
  const params = route?.params;

  console.log('params', params);

  const [bidData, setBidData] = useState({});

  const onChange = val => {
    setBidData(prev => ({...prev, ...val}));
  };

  let total = 0;
  Object.keys(bidData).forEach(el => {
    total += Number(bidData[el]);
  });

  return {onChange, total};
};

export default useGame1;
