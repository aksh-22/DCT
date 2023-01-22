import {axiosInstance} from './axiosInstance';

export const login = (data: any) =>
  axiosInstance.post('auth/login', data).then(res => res?.data);

export const sendOtp = (data: any) =>
  axiosInstance.post('send-otp', data).then(res => res?.data);

export const verifyOtp = (data: any) =>
  axiosInstance.post('verify-otp', data).then(res => res?.data);

export const customerDetails = (data: any) =>
  axiosInstance.post('customer-details', data).then(res => res?.data);

export const updatePassword = (data: any) =>
  axiosInstance.post('update-password', data).then(res => res?.data);
