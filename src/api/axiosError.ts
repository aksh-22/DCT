import {AxiosError} from 'axios';
import {showMessage} from 'src/components/MessageModal';
import store from 'src/store/store';

export const axiosError = async (err: AxiosError<any>) => {
  console.error('err', JSON.stringify(err, null, 2));
  console.error('err', JSON.stringify(err.response.data.message, null, 2));
  if (err.response.status === 401) {
    store.dispatch({
      type: 'CLEAR_REDUX',
    });
  }
  showMessage({
    modalType: 'Error',
    message: err.response.data.message,
  });

  throw err;
};
