import {useState} from 'react';
import {useRequest} from 'src/constants/useRequest';
import {useAppSelector} from 'src/utils/reducer';

const useAddWithdrawal = () => {
  const [amount, setAmount] = useState('');
  const [amountError, setAmountError] = useState('');

  const user = useAppSelector(state => state.userReducer.user);

  const onSuccess = () => {};

  const {isLoading, sendRequest} = useRequest({
    endpoint: 'withdrawals/create',
    onSuccess,
    requestType: 'POST',
  });

  const onChange = txt => {
    setAmount(txt);
    amountError && setAmountError('');
  };

  const onSubmit = () => {
    if (Number(amount) < 500) {
      setAmountError('Minimum amount must be at least 500.');
    } else {
      sendRequest({amount});
    }
  };

  return {
    onChange,
    amount,
    amountError,
    balance: user?.wallet,
    onSubmit,
    isLoading,
  };
};

export default useAddWithdrawal;
