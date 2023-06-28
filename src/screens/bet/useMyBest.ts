import React, {useState} from 'react';
import {useRequest} from 'src/constants/useRequest';

type Props = {};

const useMyBest = ({}: Props = {}) => {
  const [first, setfirst] = useState('');
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
  console.log('dataFetched', JSON.stringify(dataFetched, null, 2));

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
