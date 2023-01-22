import {axiosInstance} from './axiosInstance';

export const getTypes = () =>
  axiosInstance.get('get-types').then(res => res?.data);

export const trending = () =>
  axiosInstance.get('trending-products').then(res => res?.data);

export const banners = () =>
  axiosInstance.get('banners').then(res => res?.data);

export const globalSearch = data =>
  axiosInstance.post('product-global-search', data).then(res => res?.data);
