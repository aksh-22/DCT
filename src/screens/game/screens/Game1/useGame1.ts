import {useState} from 'react';

type Props = {};

const useGame1 = ({}: Props = {}) => {
  const [bidData, setBidData] = useState({});

  const onChange = val => {
    setBidData(prev => ({...prev, ...val}));
  };

  console.log('bidData', JSON.stringify(bidData, null, 2));

  let total = 0;
  Object.keys(bidData).forEach(el => {
    total += Number(bidData[el]);
  });

  return {onChange, total};
};

export default useGame1;
