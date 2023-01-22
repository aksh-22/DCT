import {axiosInstance} from './axiosInstance';

export const validate_coupon = data =>
  axiosInstance.post('validate-coupon', data).then(res => res?.data);
