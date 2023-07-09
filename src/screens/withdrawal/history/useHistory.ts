import {useRequest} from 'src/constants/useRequest';

type Props = {
  type?: 'pending' | 'completed';
};

const useHistory = ({type = 'pending'}: Props = {}) => {
  const params = {
    type,
  };

  const {
    isLoading,
    dataFetched,
    onEndReached,
    sendRequest,
    onRefresh: onR,
  } = useRequest({
    endpoint: 'withdrawals',
    params,
    callApiByDefault: true,
    paginationKey: 'withdrawals',
  });

  const onRefresh = () => {
    onR();
    sendRequest();
  };

  return {
    isLoading,
    data: dataFetched?.data?.withdrawals,
    onRefresh,
    onEndReached,
  };
};

export default useHistory;
