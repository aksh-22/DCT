import axios from 'axios';
import {showMessage} from 'src/components/MessageModal';
// import {getModel, getVersion} from 'react-native-device-info';
// import {getTimeZone} from 'react-native-localize';
// import {showMessage} from 'src/components/MessageModal';
import {axiosError} from './axiosError';

const url = 'http://digi-markets.com/ggrocer/';

const axiosInstance = axios.create({
  timeout: 30000,
  timeoutErrorMessage:
    'Network request timed out. The app could not connect to the server. Please make sure you are connected with a good network.',
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
    // 'App-Version': getVersion(),
    // Timezone: getTimeZone(),
    // 'Device-Model': getModel(),
  },
  auth: {
    username: 'GgrDrmStl',
    password: 'G@4321@qwer',
  },
});
axiosInstance.interceptors.request.use(
  request => {
    request.baseURL = __DEV__ ? url : url;
    if (request.headers) {
      // request.headers.Authorization = `Bearer ${token}`;
      // request.headers.lng = language;
    }
    return request;
  },
  error => {
    throw error;
  },
);
// Add a response interceptor
axiosInstance.interceptors.response.use(
  res => {
    if (res.data?.status === true) {
      return res;
    } else {
      showMessage({
        message: res?.data?.message,
        modalType: 'Error',
      });
      throw Error;
    }
  },
  err => axiosError(err),
);
export {axiosInstance};
