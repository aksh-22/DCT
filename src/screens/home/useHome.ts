import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useRequest} from 'src/constants/useRequest';
import {updateNumber} from 'src/store/reducer/numberReducer';
import {setShareLink} from 'src/store/reducer/userReducer';
import {useAppSelector} from 'src/utils/reducer';
import {marketDataType} from 'typings/market-data-type';

type RProps = {
  isLoading: boolean;
  dataFetched: {
    data: marketDataType;
  };
  sendRequest: (data?: any) => void;
};

const useHome = ({}) => {
  const dispatch = useDispatch();
  const [marketData, setMarketData] = useState([]);
  const [currIndex, setCurrIndex] = useState(null);

  const data = useAppSelector(state => state.numberReducer);

  useEffect(() => {
    console.log('data', data?.numberData.numbers);
  }, [data]);

  const onSuccess = (fData: {data: marketDataType}) => {
    dispatch(setShareLink(fData.data.share_link));
    setMarketData(fData?.data?.markets);
  };

  const onPlayNowPress = (index: number) => {
    setCurrIndex(index);
  };

  const onCancel = () => {
    setCurrIndex(null);
  };

  const {isLoading, sendRequest}: RProps = useRequest({
    endpoint: 'markets',
    callApiByDefault: true,
    onSuccess: onSuccess,
  });

  const onNumberSuccess = dFetched => {
    dispatch(updateNumber(dFetched));
  };

  useRequest({
    endpoint: 'numbers',
    callApiByDefault: true,
    onSuccess: onNumberSuccess,
  });

  return {
    isLoading,
    marketData,
    sendRequest,
    onPlayNowPress,
    currIndex,
    onCancel,
  };
};

export default useHome;
