import {useState} from 'react';

type Props = {};

const useGame4 = ({}: Props = {}) => {
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

export default useGame4;
