import {useRequest} from 'src/constants/useRequest';

type Props = {
  type?: 'pending' | 'completed';
};

const useHistory = ({type = 'pending'}: Props = {}) => {
  const params = {
    type,
  };

  const {isLoading, dataFetched} = useRequest({
    endpoint: 'withdrawals',
    params,
    callApiByDefault: true,
  });

  return {isLoading, data: dataFetched?.data?.withdrawals};
};

export default useHistory;
