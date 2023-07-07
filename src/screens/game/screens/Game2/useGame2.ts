import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useMemo, useState} from 'react';
import {AuthorizedStackProps} from 'src/routes/types/navigation';
import {useAppSelector} from 'src/utils/reducer';

const useGame2 = ({route}: AuthorizedStackProps) => {
  const {key}: any = route?.params;
  const [bidData, setBidData] = useState({});
  const [showData, setShowData] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        setShowData(true);
      }, 0);
    }, []),
  );

  const {numbers} = useAppSelector(state => state.numberReducer);

  const onChange = useCallback(val => {
    setBidData(prev => ({...prev, ...val}));
  }, []);

  let total = 0;
  Object.keys(bidData).forEach(el => {
    total += Number(bidData[el]);
  });

  const numberData = useMemo(() => numbers?.[key], [numbers, key]);

  return {onChange, total, numberData, bidData, showData};
};

export default useGame2;
