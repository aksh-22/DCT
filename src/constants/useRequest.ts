/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';
import {axiosInstance} from 'src/api/axiosInstance';

type RProps = {
  onSuccess?: (data: any) => void;
  onError?: (error?: any) => void;
  onFinally?: () => void;
  requestType?: 'GET' | 'POST' | 'DELETE' | 'PATCH';
  endpoint?: string;
  params?: any;
  data?: any;
  callApiByDefault?: boolean;
  hideKeyboard?: boolean;
};

export const useRequest = ({
  onSuccess,
  onError,
  onFinally,
  requestType,
  endpoint,
  params,
  data,
  callApiByDefault,
  hideKeyboard = true,
}: RProps = {}) => {
  const [isLoading, setIsLoading] = useState(callApiByDefault);
  const [dataFetched, setDataFetched] = useState(null);

  const api: any = async (dataToSend: any) => {
    let res;

    switch (requestType) {
      case 'POST':
        return await axiosInstance.post(endpoint, dataToSend ?? data);

      case 'PATCH':
        return await axiosInstance.patch(endpoint, dataToSend ?? data);

      default:
        res = axiosInstance.get(endpoint, {params});
        return res;
    }
  };

  const sendRequest = async (dataToSend?: any) => {
    setIsLoading(true);
    await api(dataToSend)
      .then(res => {
        onSuccess && onSuccess(res.data);
        setDataFetched(res.data);
      })
      .catch(error => {
        onError && onError(error);
      })
      .finally(() => {
        setIsLoading(false);
        onFinally && onFinally();
        hideKeyboard && Keyboard.dismiss();
      });
  };

  useEffect(() => {
    callApiByDefault && sendRequest();
  }, [callApiByDefault]);

  return {
    isLoading,
    sendRequest,
    dataFetched,
  };
};
