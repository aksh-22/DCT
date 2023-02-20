import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useRequest} from 'src/constants/useRequest';
import {setShareLink} from 'src/store/reducer/userReducer';
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

  const onSuccess = (fData: {data: marketDataType}) => {
    dispatch(setShareLink(fData.data.share_link));
    setMarketData(fData?.data?.markets);
  };

  const onPlayNowPress = (index: number) => {
    setCurrIndex(index);
  };

  const onOpenPress = () => {
    // navigate(GameStackName.GAME_LIST);
  };
  const onClosePress = () => {};

  const onCancel = () => {
    setCurrIndex(null);
  };

  const {isLoading, sendRequest}: RProps = useRequest({
    endpoint: 'markets',
    callApiByDefault: true,
    onSuccess: onSuccess,
  });

  return {
    isLoading,
    marketData,
    sendRequest,
    onPlayNowPress,
    currIndex,
    onOpenPress,
    onClosePress,
    onCancel,
  };
};

export default useHome;
