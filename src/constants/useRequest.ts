/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
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
  paginationKey?: string;
  headers?: any;
};

const CancelToken = axios.CancelToken;
let requestToken = null;

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
  paginationKey,
  headers,
}: RProps = {}) => {
  const [isLoading, setIsLoading] = useState(callApiByDefault);
  const [dataFetched, setDataFetched] = useState(null);
  const [page, setPage] = useState(1);
  const [shouldNext, setShouldNext] = useState(true);

  const api: any = async (dataToSend: any) => {
    let res;

    switch (requestType) {
      case 'POST':
        return await axiosInstance.post(endpoint, dataToSend ?? data, {
          headers,
        });
      case 'DELETE':
        return await axiosInstance.delete(endpoint, dataToSend ?? data);
      case 'PATCH':
        return await axiosInstance.patch(endpoint, dataToSend ?? data);
      default:
        if (requestToken !== null) {
          requestToken();
        }
        res = axiosInstance.get(endpoint, {
          params: {...params, ...(paginationKey && {page})},
          cancelToken: new CancelToken(token => {
            requestToken = token;
          }),
        });
        return res;
    }
  };

  const sendRequest = async (dSend?: any) => {
    try {
      setIsLoading(true);
      let dataToSend = dSend;

      await api(dataToSend)
        .then(res => {
          if (paginationKey) {
            console.log('res.data.meta', res.data.meta);
            const {current_page, last_page}: any = res.data.meta;
            setShouldNext(current_page < last_page);
            if (current_page === 1) {
              onSuccess && onSuccess(res.data);
              setDataFetched(res.data);
            } else {
              onSuccess && onSuccess(res.data);
              setDataFetched(prev => {
                const temp = {...prev};
                const prevPaginateDataData = temp?.data?.[paginationKey]?.data;
                const newPaginateDataData =
                  res?.data.data?.[paginationKey]?.data;
                temp.data[paginationKey].data = [
                  ...prevPaginateDataData,
                  ...newPaginateDataData,
                ];
                return temp;
              });
            }
          } else {
            onSuccess && onSuccess(res.data);
            setDataFetched(res?.data);
          }
        })
        .catch(error => {
          onError && onError(error);
        })
        .finally(() => {
          setIsLoading(false);
          onFinally && onFinally();
          hideKeyboard && Keyboard.dismiss();
        });
    } catch (error) {
      onError && onError(error);
    }
  };

  const onRefresh = () => {
    console.log('on');
    setPage(1);
    setShouldNext(true);
    console.log('off');
  };

  useEffect(() => {
    if (page > 1) {
      sendRequest();
    } else {
      callApiByDefault && sendRequest();
    }
  }, [page, callApiByDefault]);

  const onEndReached = () => {
    if (shouldNext && !isLoading) {
      setPage(prev => {
        console.log('prev', prev);
        return prev + 1;
      });
    }
  };

  // useEffect(() => {
  //   callApiByDefault && sendRequest();
  // }, [callApiByDefault]);

  return {
    isLoading,
    sendRequest,
    dataFetched,
    onRefresh,
    onEndReached,
    page,
    shouldNext,
    setPage,
    setIsLoading,
  };
};
