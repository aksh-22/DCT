import {useRequest} from 'src/constants/useRequest';

type Props = {
  type?: 'pending' | 'completed';
};

const useHistory = ({type = 'pending'}: Props = {}) => {
  const params = {
    type,
  };

  console.log('params', JSON.stringify(params, null, 2));

  const {isLoading, dataFetched} = useRequest({
    endpoint: 'withdrawals',
    params,
    callApiByDefault: true,
  });

  return {isLoading, data: dataFetched?.data?.withdrawals};
};

export default useHistory;
