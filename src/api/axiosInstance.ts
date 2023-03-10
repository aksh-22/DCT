import axios from 'axios';
import {showMessage} from 'src/components/MessageModal';
import store from 'src/store/store';
// import {getModel, getVersion} from 'react-native-device-info';
// import {getTimeZone} from 'react-native-localize';
// import {showMessage} from 'src/components/MessageModal';
import {axiosError} from './axiosError';

const url = 'http://cloudusweb.com/api/';

const axiosInstance = axios.create({
  timeout: 30000,
  timeoutErrorMessage:
    'Network request timed out. The app could not connect to the server. Please make sure you are connected with a good network.',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // 'App-Version': getVersion(),
    // Timezone: getTimeZone(),
    // 'Device-Model': getModel(),
    // Platform: Platform.OS,
  },
});
axiosInstance.interceptors.request.use(
  request => {
    let token = store.getState()?.userReducer?.token;

    request.baseURL = __DEV__ ? url : url;
    if (request.headers) {
      request.headers.Authorization = `Bearer ${token}`;
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
    if (res.status === 200) {
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
