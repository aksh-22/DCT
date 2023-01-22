import {useState} from 'react';
import {axiosInstance} from 'src/api/axiosInstance';

type RProps = {
  onSuccess?: (data: any) => void;
  onError?: (error?: any) => void;
  onFinally?: () => void;
  requestType?: 'GET' | 'POST' | 'DELETE';
  endpoint?: string;
  params?: any;
  data?: any;
};

export const useRequest = ({
  onSuccess,
  onError,
  onFinally,
  requestType,
  endpoint,
  params,
  data,
}: RProps = {}) => {
  const [isLoading, setIsLoading] = useState(false);

  const api: any = async () => {
    let res;
    switch (requestType) {
      case 'POST':
        res = await axiosInstance.post(endpoint, data);
        return res;
      default:
        return await axiosInstance.get(endpoint, {params});
    }
  };

  const sendRequest = async () => {
    setIsLoading(true);
    await api()
      .then(res => {
        onSuccess && onSuccess(res);
      })
      .catch(error => {
        onError && onError(error);
      })
      .finally(() => {
        setIsLoading(false);
        onFinally && onFinally();
      });
  };

  return {
    isLoading,
    sendRequest,
  };
};
