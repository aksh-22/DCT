import {useRequest} from 'src/constants/useRequest';

type Props = {
  type?: 'pending' | 'completed';
};

const useHistory = ({type = 'pending'}: Props = {}) => {
  const params = {
    type,
  };

  const {isLoading, dataFetched, onEndReached, sendRequest} = useRequest({
    endpoint: 'withdrawals',
    params,
    callApiByDefault: true,
    paginationKey: 'withdrawals',
  });

  const onRefresh = () => {
    sendRequest();
  };

  console.log('dataFetched', JSON.stringify(dataFetched, null, 2));

  return {
    isLoading,
    data: dataFetched?.data?.withdrawals,
    onRefresh,
    onEndReached,
  };
};

export default useHistory;
