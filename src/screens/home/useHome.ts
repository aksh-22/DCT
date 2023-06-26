import {useState} from 'react';
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

  const {new_numbers} = useAppSelector(state => state.numberReducer);

  const onSuccess = (fData: {data: marketDataType}) => {
    dispatch(setShareLink(fData.data.share_link));
    setMarketData(fData?.data?.markets);
    console.log('fData?.data?.new_numbers', fData?.data?.new_numbers);
    console.log('new_numbers', new_numbers);
    console.log(
      'fData?.data?.new_numbers !== new_numbers',
      fData?.data?.new_numbers !== new_numbers,
    );
    if (fData?.data?.new_numbers !== new_numbers) {
      getNumbers();
    }
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
    const tempData = dFetched?.data;
    tempData.numbers['family_panel'] = [
      ...tempData?.numbers?.s_p_panel,
      ...tempData?.numbers?.d_p_panel,
      ...tempData?.numbers?.tp_panel,
    ];
    dispatch(updateNumber(dFetched?.data));
  };

  const {sendRequest: getNumbers} = useRequest({
    endpoint: 'numbers',
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
