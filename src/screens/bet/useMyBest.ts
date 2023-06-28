import {useRequest} from 'src/constants/useRequest';

type Props = {};

const useMyBest = ({}: Props = {}) => {
  const {
    dataFetched,
    isLoading,
    onRefresh: ref,
    sendRequest,
  } = useRequest({
    endpoint: 'bids',
    paginationKey: 'bids',
    callApiByDefault: true,
  });

  const onRefresh = () => {
    ref();
    sendRequest();
  };

  return {
    bidData: dataFetched?.data?.bids,
    isLoading,
    onRefresh,
  };
};

export default useMyBest;
