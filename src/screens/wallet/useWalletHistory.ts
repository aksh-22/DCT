import {useRequest} from 'src/constants/useRequest';

type Props = {};

const useWalletHistory = ({}: Props = {}) => {
  const {
    dataFetched,
    isLoading,
    onEndReached,
    sendRequest,
    onRefresh: onR,
  } = useRequest({
    endpoint: 'transactions',
    callApiByDefault: true,
    paginationKey: 'transactions',
  });

  const onRefresh = () => {
    sendRequest();
    onR();
  };

  const data = dataFetched?.data?.transactions;

  return {data, isLoading, onEndReached, onRefresh};
};

export default useWalletHistory;
