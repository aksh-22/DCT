import {axiosInstance} from './axiosInstance';

export const get_categories = () =>
  axiosInstance.get('get-categories').then(res => res?.data);

export const get_sub_categories = data =>
  axiosInstance.post('get-sub-categories', data).then(res => res?.data);

export const get_product_list = data =>
  axiosInstance.post('get-products', data).then(res => res?.data);

export const get_category_product = data =>
  axiosInstance.post('get-category-products', data).then(res => res?.data);

export const get_product = data =>
  axiosInstance.post('product-details', data).then(res => res?.data);
